export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const host = req.headers.host || '';
  const isPreviewHost =
    host.includes('localhost') ||
    host.includes('git-') ||
    host.includes('-preview') ||
    host.includes('preview');

  if (isPreviewHost) {
    return res.status(200).json({
      ok: true,
      skipped: true,
      reason: 'preview_or_non_production_host'
    });
  }

  const {
    url,
    referrer,
    userAgent,
    language,
    timezone,
    screen
  } = req.body || {};

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({
      ok: false,
      message: 'Missing Telegram env vars',
      host
    });
  }

  const forwarded = req.headers['x-forwarded-for'];
  const ipRaw = Array.isArray(forwarded)
    ? forwarded[0]
    : typeof forwarded === 'string'
      ? forwarded.split(',')[0].trim()
      : req.socket?.remoteAddress || 'unknown';

  let geo = {
    country_name: 'unknown',
    city: 'unknown',
    region: 'unknown',
    org: 'unknown',
    timezone: 'unknown'
  };

  try {
    const geoRes = await fetch(`https://ipapi.co/${ipRaw}/json/`, {
      headers: { 'Accept': 'application/json' }
    });

    if (geoRes.ok) {
      geo = await geoRes.json();
    }
  } catch (error) {
    console.log('Geo lookup failed:', error.message);
  }

  const ua = userAgent || 'unknown';
  const country = geo.country_name || 'unknown';
  const city = geo.city || 'unknown';
  const region = geo.region || 'unknown';
  const org = geo.org || 'unknown';
  const geoTimezone = geo.timezone || timezone || 'unknown';

  const text = [
    '🔔 Nouveau visiteur sur le portfolio',
    `🌐 URL: ${url || 'unknown'}`,
    `🔁 Referrer: ${referrer || 'direct'}`,
    `📍 Pays: ${country}`,
    `🏙️ Ville: ${city}`,
    `🗺️ Région: ${region}`,
    `🧭 Langue: ${language || 'unknown'}`,
    `🕒 Timezone: ${geoTimezone}`,
    `📱 User-Agent: ${ua}`,
    `🖥️ Screen: ${screen || 'unknown'}`,
    `🌐 IP: ${ipRaw}`,
    `🏢 ISP / org: ${org}`
  ].join('\n');

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true
        })
      }
    );

    const data = await response.json();

    if (!data.ok) {
      return res.status(400).json({
        ok: false,
        message: 'Telegram send failed',
        details: data
      });
    }

    return res.status(200).json({ ok: true, message: 'Notification sent' });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Server error',
      error: error.message
    });
  }
}