export async function POST(req) {
  try {
    const { fullname, amount, currency } = await req.json();

    const TELEGRAM_BOT_TOKEN = 8255290968:AAHMYhcRTfmvoHfkJGKRQh1rdbtqgBUoxok;
    const TELEGRAM_CHAT_ID = 5047074105;

    const text = `💌 Nouveau don reçu!\nNom: ${fullname}\nMontant: ${amount} ${currency}`;

    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
    });

    if (!res.ok) throw new Error("Telegram API error");

    return new Response("Message envoyé", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Erreur serveur", { status: 500 });
  }
}
