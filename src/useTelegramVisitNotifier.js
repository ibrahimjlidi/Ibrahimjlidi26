import { useEffect } from 'react';

const STORAGE_KEY = 'portfolio_telegram_blocked_v1';
const COOKIE_NAME = 'portfolio_owner_session';

function isOwnerBlocked() {
  if (typeof window === 'undefined') return true;

  const hasStorageFlag = localStorage.getItem(STORAGE_KEY) === '1';
  const hasCookieFlag = document.cookie.split('; ').some((cookie) => cookie.startsWith(`${COOKIE_NAME}=1`));

  return hasStorageFlag || hasCookieFlag;
}

function setOwnerBlocked() {
  if (typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEY, '1');
  document.cookie = `${COOKIE_NAME}=1; Max-Age=31536000; Path=/; SameSite=Lax`;
}

export function useTelegramVisitNotifier() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const notifyVisit = async () => {
      if (isOwnerBlocked()) return;

      const payload = {
        url: window.location.href,
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
        screen: `${window.screen.width}x${window.screen.height}`
      };

      try {
        const endpoint =
          import.meta.env.PROD
            ? '/api/telegram-visit'
            : 'http://localhost:3000/api/telegram-visit';

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.ok) {
          setOwnerBlocked();
        }
      } catch (error) {
        console.error('Telegram notification failed:', error);
      }
    };

    notifyVisit();
  }, []);
}
