// Уведомления в телеграм через @joxter_alert_bot — того же, что шлёт бэкапы
// sfw-game. Токен и чат берутся с дроплета, см. README/Deploy.
const token = process.env.TG_BOT_TOKEN;
const chatId = process.env.TG_CHAT_ID;

if (!token || !chatId) {
  console.log(
    "notify: TG_BOT_TOKEN/TG_CHAT_ID не заданы, уведомлений не будет",
  );
}

// Ничего не ждёт и ничего не бросает: телеграм лежит — игра всё равно идёт.
export function notify(text: string): Promise<void> {
  if (!token || !chatId) return Promise.resolve();

  return fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    // висящий запрос задержал бы process.exit при падении подписки
    signal: AbortSignal.timeout(10_000),
    // ссылки на комнаты разворачиваются в превью и засоряют чат
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  })
    .then((res) => {
      if (!res.ok) console.error("notify:", res.status, res.statusText);
    })
    .catch((err) => console.error("notify:", err));
}
