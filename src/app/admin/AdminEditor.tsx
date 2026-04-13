"use client";

import { FormEvent, useState } from "react";
import {
  defaultSiteContent,
  type SiteContent,
  type ServiceItem,
} from "@/lib/site-content-schema";

type Status = "idle" | "loading" | "saving" | "saved" | "error";

type AdminEditorProps = {
  initialContent: SiteContent | null;
  initialAuthenticated: boolean;
};

export default function AdminEditor({
  initialContent,
  initialAuthenticated,
}: AdminEditorProps) {
  const [content, setContent] = useState<SiteContent>(
    initialContent ?? defaultSiteContent,
  );
  const [loginPassword, setLoginPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: loginPassword }),
    });

    if (!res.ok) {
      setStatus("error");
      setErrorMessage("Mot de passe admin invalide.");
      return;
    }

    const contentRes = await fetch("/api/admin/content", { cache: "no-store" });
    if (!contentRes.ok) {
      setStatus("error");
      setErrorMessage("Impossible de charger le contenu.");
      return;
    }

    const data = (await contentRes.json()) as SiteContent;
    setContent(data);
    setIsAuthenticated(true);
    setLoginPassword("");
    setStatus("idle");
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setErrorMessage("");

    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    });

    if (!res.ok) {
      setStatus("error");
      setErrorMessage("La sauvegarde a echoue.");
      return;
    }

    const data = (await res.json()) as SiteContent;
    setContent(data);
    setStatus("saved");
    window.setTimeout(() => setStatus("idle"), 2000);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
    setStatus("idle");
  }

  function updateService(index: number, updater: Partial<ServiceItem>) {
    const nextItems = content.services.items.map((item, i) => {
      if (i !== index) {
        return item;
      }

      return {
        ...item,
        ...updater,
      };
    });

    setContent({
      ...content,
      services: {
        ...content.services,
        items: nextItems,
      },
    });
  }

  function addService() {
    setContent({
      ...content,
      services: {
        ...content.services,
        items: [
          ...content.services.items,
          {
            title: "Nouveau soin",
            description: "Description du soin",
            idealFor: "Ideal pour...",
            duration: "1h",
          },
        ],
      },
    });
  }

  function removeService(index: number) {
    setContent({
      ...content,
      services: {
        ...content.services,
        items: content.services.items.filter((_, i) => i !== index),
      },
    });
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-shell">
        <form onSubmit={handleLogin} className="admin-card">
          <h1>Admin CMS</h1>
          <p>Connectez-vous pour gerer le contenu du site one-page.</p>
          <label>
            Mot de passe admin
            <input
              type="password"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              required
            />
          </label>
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Connexion..." : "Se connecter"}
          </button>
          {errorMessage && <p className="admin-error">{errorMessage}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <form onSubmit={handleSave} className="admin-grid">
        <header className="admin-topbar">
          <h1>CMS - Site Vitrine</h1>
          <div>
            <button type="button" onClick={handleLogout} className="ghost-btn">
              Se deconnecter
            </button>
            <button type="submit" disabled={status === "saving"}>
              {status === "saving" ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          </div>
        </header>

        <section className="admin-card wide">
          <h2>Hero</h2>
          <label>
            Badge
            <input
              value={content.hero.badge}
              onChange={(event) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, badge: event.target.value },
                })
              }
            />
          </label>
          <label>
            Titre
            <input
              value={content.hero.title}
              onChange={(event) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, title: event.target.value },
                })
              }
            />
          </label>
          <label>
            Sous-titre
            <textarea
              rows={3}
              value={content.hero.subtitle}
              onChange={(event) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, subtitle: event.target.value },
                })
              }
            />
          </label>
          <label>
            Citation
            <input
              value={content.hero.quote}
              onChange={(event) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, quote: event.target.value },
                })
              }
            />
          </label>
        </section>

        <section className="admin-card">
          <h2>Approche</h2>
          <label>
            Titre
            <input
              value={content.approach.title}
              onChange={(event) =>
                setContent({
                  ...content,
                  approach: { ...content.approach, title: event.target.value },
                })
              }
            />
          </label>
          <label>
            Contenu
            <textarea
              rows={8}
              value={content.approach.content}
              onChange={(event) =>
                setContent({
                  ...content,
                  approach: { ...content.approach, content: event.target.value },
                })
              }
            />
          </label>
        </section>

        <section className="admin-card">
          <h2>Prix Conscient</h2>
          <label>
            Titre
            <input
              value={content.pricing.title}
              onChange={(event) =>
                setContent({
                  ...content,
                  pricing: { ...content.pricing, title: event.target.value },
                })
              }
            />
          </label>
          <label>
            Description
            <textarea
              rows={5}
              value={content.pricing.content}
              onChange={(event) =>
                setContent({
                  ...content,
                  pricing: { ...content.pricing, content: event.target.value },
                })
              }
            />
          </label>
          <label>
            Prix minimum
            <input
              type="number"
              value={content.pricing.rangeMin}
              onChange={(event) =>
                setContent({
                  ...content,
                  pricing: {
                    ...content.pricing,
                    rangeMin: Number(event.target.value),
                  },
                })
              }
            />
          </label>
          <label>
            Prix maximum
            <input
              type="number"
              value={content.pricing.rangeMax}
              onChange={(event) =>
                setContent({
                  ...content,
                  pricing: {
                    ...content.pricing,
                    rangeMax: Number(event.target.value),
                  },
                })
              }
            />
          </label>
        </section>

        <section className="admin-card wide">
          <h2>Soins</h2>
          {content.services.items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="service-editor">
              <label>
                Nom du soin
                <input
                  value={item.title}
                  onChange={(event) =>
                    updateService(index, { title: event.target.value })
                  }
                />
              </label>
              <label>
                Description
                <textarea
                  rows={4}
                  value={item.description}
                  onChange={(event) =>
                    updateService(index, { description: event.target.value })
                  }
                />
              </label>
              <label>
                Ideal pour
                <input
                  value={item.idealFor}
                  onChange={(event) =>
                    updateService(index, { idealFor: event.target.value })
                  }
                />
              </label>
              <label>
                Duree
                <input
                  value={item.duration}
                  onChange={(event) =>
                    updateService(index, { duration: event.target.value })
                  }
                />
              </label>
              <button
                type="button"
                className="danger-btn"
                onClick={() => removeService(index)}
              >
                Supprimer ce soin
              </button>
            </article>
          ))}
          <button type="button" onClick={addService} className="ghost-btn">
            Ajouter un soin
          </button>
        </section>

        <section className="admin-card">
          <h2>Lieux</h2>
          <label>
            Titre
            <input
              value={content.locations.title}
              onChange={(event) =>
                setContent({
                  ...content,
                  locations: { ...content.locations, title: event.target.value },
                })
              }
            />
          </label>
          <label>
            Marches
            <textarea
              rows={3}
              value={content.locations.markets}
              onChange={(event) =>
                setContent({
                  ...content,
                  locations: {
                    ...content.locations,
                    markets: event.target.value,
                  },
                })
              }
            />
          </label>
          <label>
            Festivals
            <textarea
              rows={3}
              value={content.locations.festivals}
              onChange={(event) =>
                setContent({
                  ...content,
                  locations: {
                    ...content.locations,
                    festivals: event.target.value,
                  },
                })
              }
            />
          </label>
          <label>
            Domicile
            <textarea
              rows={3}
              value={content.locations.homeVisits}
              onChange={(event) =>
                setContent({
                  ...content,
                  locations: {
                    ...content.locations,
                    homeVisits: event.target.value,
                  },
                })
              }
            />
          </label>
        </section>

        <section className="admin-card">
          <h2>Contact</h2>
          <label>
            Titre
            <input
              value={content.contact.title}
              onChange={(event) =>
                setContent({
                  ...content,
                  contact: { ...content.contact, title: event.target.value },
                })
              }
            />
          </label>
          <label>
            Intro
            <textarea
              rows={3}
              value={content.contact.intro}
              onChange={(event) =>
                setContent({
                  ...content,
                  contact: { ...content.contact, intro: event.target.value },
                })
              }
            />
          </label>
          <label>
            Telephone
            <input
              value={content.contact.phone}
              onChange={(event) =>
                setContent({
                  ...content,
                  contact: { ...content.contact, phone: event.target.value },
                })
              }
            />
          </label>
          <label>
            Email
            <input
              value={content.contact.email}
              onChange={(event) =>
                setContent({
                  ...content,
                  contact: { ...content.contact, email: event.target.value },
                })
              }
            />
          </label>
          <label>
            Instagram URL
            <input
              value={content.contact.instagram}
              onChange={(event) =>
                setContent({
                  ...content,
                  contact: {
                    ...content.contact,
                    instagram: event.target.value,
                  },
                })
              }
            />
          </label>
        </section>

        {status === "saved" && <p className="admin-success">Contenu sauvegarde.</p>}
        {errorMessage && <p className="admin-error">{errorMessage}</p>}
      </form>
    </div>
  );
}
