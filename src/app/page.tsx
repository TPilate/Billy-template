import Link from "next/link";
import Image from "next/image";
import { getSiteContent, sanitizeSiteContent } from "@/lib/site-content";

export default async function Home() {
  const content = sanitizeSiteContent(await getSiteContent());

  return (
    <div className="site-shell">
      <header className="floating-nav-wrap">
        <div className="nav-bar">
          <p className="brand">Lucie Amanahita</p>
          <nav>
            <a href="#approche">Approche</a>
            <a href="#rituels">Rituels</a>
            <a href="#nomade">Nomade</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section reveal-mask" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.badge}</p>
              <h1>{content.hero.title}</h1>
              <p className="lead">{content.hero.subtitle}</p>
              <blockquote className="editorial-quote">{content.hero.quote}</blockquote>
              <div className="cta-row">
                <a href={content.hero.primaryCtaHref} className="btn-primary">
                  {content.hero.primaryCtaLabel}
                </a>
                <a href={content.hero.secondaryCtaHref} className="btn-secondary">
                  {content.hero.secondaryCtaLabel}
                </a>
              </div>
            </div>
            <div className="hero-image-wrap reveal-mask">
              <Image
                src={content.visuals.heroImage}
                alt="Lucie pendant un soin fascia"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 60vw"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section className="content-section reveal-mask" id="approche">
          <div className="container split-grid">
            <h2>{content.approach.title}</h2>
            <p>{content.approach.content}</p>
          </div>
        </section>

        <section className="content-section reveal-mask" id="rituels">
          <div className="container">
            <h2>{content.services.title}</h2>
            <div className="ritual-grid">
              {content.services.items.map((service) => (
                <article key={service.title} className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-price">{service.price}</p>
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

        <section className="content-section reveal-mask" id="nomade">
          <div className="container">
            <h2>{content.locations.title}</h2>
            <div className="nomadic-bento">
              <article className="bento-cell cell-photo">
                <Image
                  src={content.visuals.nomadicImage}
                  alt="Cocon nomade de massage"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className="cover-image"
                />
              </article>
              <article className="bento-cell cell-markets">
                <h3>Marches</h3>
                <p>{content.locations.markets}</p>
              </article>
              <article className="bento-cell cell-cta">
                <h3>Suivre le parcours</h3>
                <a href={content.contact.instagram} className="btn-secondary">
                  Follow on Instagram
                </a>
              </article>
              <article className="bento-cell cell-festivals">
                <h3>Festivals a venir</h3>
                <p>{content.locations.festivals}</p>
              </article>
              <article className="bento-cell cell-home">
                <h3>A domicile</h3>
                <p>{content.locations.homeVisits}</p>
              </article>
              <article className="bento-cell cell-note">
                <p>{content.locations.note}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section pricing-manifesto reveal-mask" id="tarifs">
          <div className="container manifesto-inner">
            <p className="eyebrow">Conscious pricing</p>
            <h2>{content.pricing.title}</h2>
            <p>{content.pricing.content}</p>
            <p className="price-range">
              {content.pricing.rangeMin} EUR - {content.pricing.rangeMax} EUR
            </p>
          </div>
        </section>

        <section className="content-section contact-wrap reveal-mask" id="contact">
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
            <aside className="contact-image-wrap">
              <Image
                src={content.visuals.contactImage}
                alt="Ambiance de soin et contact"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className="cover-image"
              />
            </aside>
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
