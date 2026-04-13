import Link from "next/link";
import { getSiteContent, sanitizeSiteContent } from "@/lib/site-content";

export default async function Home() {
  const content = sanitizeSiteContent(await getSiteContent());

  return (
    <div>
      <header className="top-nav">
        <div className="container top-nav-inner">
          <p className="brand">Lucie Amanahita Soete</p>
          <nav>
            <a href="#approche">Approche</a>
            <a href="#soins">Soins</a>
            <a href="#tarifs">Tarifs</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{content.hero.badge}</p>
              <h1>{content.hero.title}</h1>
              <p className="lead">{content.hero.subtitle}</p>
              <blockquote>{content.hero.quote}</blockquote>
              <div className="cta-row">
                <a href={content.hero.primaryCtaHref} className="btn-primary">
                  {content.hero.primaryCtaLabel}
                </a>
                <a href={content.hero.secondaryCtaHref} className="btn-secondary">
                  {content.hero.secondaryCtaLabel}
                </a>
              </div>
            </div>
            <aside className="hero-aside">
              <h2>Cabinet Nomade</h2>
              <p>
                Un cocon mobile, une ecoute profonde, une approche artisanale du
                soin.
              </p>
              <a href="#lieux">Voir les lieux</a>
            </aside>
          </div>
        </section>

        <section className="content-section" id="approche">
          <div className="container split-grid">
            <h2>{content.approach.title}</h2>
            <p>{content.approach.content}</p>
          </div>
        </section>

        <section className="content-section" id="soins">
          <div className="container">
            <h2>{content.services.title}</h2>
            <div className="bento-grid">
              {content.services.items.map((service) => (
                <article key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p>
                    <strong>Ideal pour:</strong> {service.idealFor}
                  </p>
                  <p>
                    <strong>Duree:</strong> {service.duration}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="tarifs">
          <div className="container price-card">
            <h2>{content.pricing.title}</h2>
            <p>{content.pricing.content}</p>
            <p className="price-range">
              {content.pricing.rangeMin} EUR a {content.pricing.rangeMax} EUR
            </p>
          </div>
        </section>

        <section className="content-section" id="lieux">
          <div className="container">
            <h2>{content.locations.title}</h2>
            <div className="locations-grid">
              <article>
                <h3>Marches</h3>
                <p>{content.locations.markets}</p>
              </article>
              <article>
                <h3>Festivals</h3>
                <p>{content.locations.festivals}</p>
              </article>
              <article>
                <h3>A domicile</h3>
                <p>{content.locations.homeVisits}</p>
              </article>
            </div>
            <p className="small-note">{content.locations.note}</p>
          </div>
        </section>

        <section className="content-section contact-wrap" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.intro}</p>
              <ul>
                <li>Telephone: {content.contact.phone}</li>
                <li>Email: {content.contact.email}</li>
              </ul>
              <a href={content.contact.instagram} className="text-link">
                Instagram
              </a>
            </div>
            <form className="contact-form">
              <label>
                Nom & Prenom
                <input type="text" placeholder="Votre nom" />
              </label>
              <label>
                Email
                <input type="email" placeholder="votre@email.com" />
              </label>
              <label>
                Telephone
                <input type="tel" placeholder="06..." />
              </label>
              <label>
                Votre message
                <textarea rows={5} placeholder="Votre besoin" />
              </label>
              <button type="button" className="btn-primary">
                {content.contact.ctaLabel}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>Lucie Amanahita Soete - massages bien-etre</p>
          <Link href="/admin" className="admin-link">
            Espace admin CMS
          </Link>
        </div>
      </footer>
    </div>
  );
}
