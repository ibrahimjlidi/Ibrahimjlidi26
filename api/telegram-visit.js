export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const { url, referrer, userAgent, language, timezone, screen } = req.body || {};

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({
      ok: false,
      message: 'Missing Telegram env vars. Add TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Vercel.'
    });
  }

  const text = [
    '🔔 Nouveau visiteur sur le portfolio',
    `🌐 URL: ${url || 'unknown'}`,
    `🔁 Referrer: ${referrer || 'direct'}`,
    `🧭 Langue: ${language || 'unknown'}`,
    `🕒 Timezone: ${timezone || 'unknown'}`,
    `📱 User-Agent: ${userAgent || 'unknown'}`,
    `🖥️ Screen: ${screen || 'unknown'}`
  ].join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      })
    });

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
