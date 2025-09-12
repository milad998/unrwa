import Image from "next/image";

export default function Home() {
  return (
    <div className="container  bg-light">
      <div className="row g-4">
        {/* Première carte */}
        <div className="col-12 col-lg-6">
          <div className="card text-bg-dark h-100">
            <Image
              src="/one.webp"
              className="card-img"
              alt="Soutenir les réfugiés palestiniens"
              width={500}
              height={500}
            />
            <div className="card-img-overlay d-flex align-items-center">
              <h1 className="card-text fw-bold">
                Donnez aujourd’hui pour soutenir les réfugiés palestiniens
              </h1>
            </div>
          </div>
        </div>

        {/* Deuxième carte */}
        <div className="col-12 col-lg-6">
          <div className="card text-bg-info h-100 d-flex flex-column justify-content-start align-items-start p-4">
            <h1 className="text-light">Faites la différence aujourd’hui</h1>
            <p className="text-light border-5 border-start border-light ps-3">
              Peut fournir une aide financière d’urgence à quatre familles de réfugiés palestiniens
            </p>

            <form className="w-100 mt-3">
              <label htmlFor="amount" className="form-label text-light">
                Ou choisissez votre propre montant [EUR]
              </label>
              <input
                type="text"
                placeholder="Montant"
                name="amount"
                id="amount"
                className="form-control mb-3 text-info"
              />

              <label htmlFor="currency" className="form-label text-light">
                Choisissez votre devise
              </label>
              <select
                name="currency"
                id="currency"
                className="form-select mb-3 text-info"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>

              <button type="submit" className="btn btn-light w-100 fw-bold">
                Faire un don maintenant
              </button>
            </form>
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
          <div className="accordion" id="accordionExample">
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

        {/* Autres moyens de donner */}
        <div className="col-12 col-lg-6 text-dark">
          <h1 className="fw-bold">Autres moyens de faire un don</h1>
        </div>

        {/* Cartes supplémentaires */}
        <div className="col-12 col-lg-6">
          <div className="card my-5 bg-info text-white d-flex justify-content-center align-items-center">
            <Image src="/tow.webp" alt="..." width={500} height={500} />
            <div className="card-body">
              <h5 className="card-title">Urgence Gaza</h5>
              <p className="card-text">
                Faites un don pour envoyer une aide d’urgence aux familles déplacées
              </p>
            </div>
          </div>

          <div className="card my-5 bg-info text-white d-flex justify-content-center align-items-center">
            <Image src="/three.webp" alt="..." width={500} height={500} />
            <div className="card-body">
              <h5 className="card-title">Protégeons l’éducation</h5>
              <p className="card-text">
                Pour Gaza : Votre soutien peut aider à protéger le droit à l’éducation
              </p>
            </div>
          </div>

          <div className="card my-5 bg-info text-white d-flex justify-content-center align-items-center">
            <Image
              src="/four.webp"
              className="card-img-top"
              alt="..."
              width={500}
              height={500}
            />
            <div className="card-body">
              <h5 className="card-title">Protégeons l’éducation</h5>
              <p className="card-text">
                Soutenez l’éducation des réfugiés palestiniens dans tous les domaines
              </p>
            </div>
          </div>

          <div className="card my-5 bg-info text-white d-flex justify-content-center align-items-center">
            <Image
              src="/five.webp"
              className="card-img-top"
              alt="..."
              width={500}
              height={500}
            />
            <div className="card-body">
              <h5 className="card-title">Zakat</h5>
              <p className="card-text text-dark">
                Donnez votre Zakat aujourd’hui. 100% va directement aux réfugiés palestiniens
              </p>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center my-5">
            <Image src="/11.svg" alt="..." width={25} height={25} />
            <Image src="/2.svg" alt="..." width={25} height={25} />
            <Image src="/1.svg" alt="..." width={50} height={50} />
            <Image src="/4.svg" alt="..." width={50} height={50} />
            <Image src="/5.svg" alt="..." width={50} height={50} />
            <Image src="/6.svg" alt="..." width={50} height={50} />
            <Image src="/7.svg" alt="..." width={50} height={50} />
            <Image src="/8.svg" alt="..." width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
