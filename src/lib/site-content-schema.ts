export type ServiceItem = {
  title: string;
  description: string;
  idealFor: string;
  duration: string;
};

export type SiteContent = {
  key: "home";
  updatedAt: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  approach: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  pricing: {
    title: string;
    content: string;
    rangeMin: number;
    rangeMax: number;
  };
  locations: {
    title: string;
    markets: string;
    festivals: string;
    homeVisits: string;
    note: string;
  };
  contact: {
    title: string;
    intro: string;
    phone: string;
    email: string;
    instagram: string;
    ctaLabel: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

export const defaultSiteContent: SiteContent = {
  key: "home",
  updatedAt: new Date().toISOString(),
  hero: {
    badge: "Massages Bien-Etre & Ecoute Tissulaire",
    title: "Lucie Amanahita Soete",
    subtitle:
      "Parfois, la vie avance a 300km/h. Stop. Un temps pour soi, c'est possible maintenant.",
    quote: "A la rencontre de soi, en douceur.",
    primaryCtaLabel: "Reserver un soin",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Decouvrir mon approche",
    secondaryCtaHref: "#approche",
  },
  approach: {
    title: "Mon Approche",
    content:
      "Le corps parle, il suffit de savoir l'ecouter. Par une ecoute par les mains, reliee au coeur, je vous accompagne vers une detente en profondeur. Plus qu'un simple massage, c'est une veritable liberation des tensions physiques et emotionnelles.",
  },
  services: {
    title: "Mes Soins & Massages",
    items: [
      {
        title: "Massage Bien-Etre Global & Ecoute des Fascias",
        description:
          "Un voyage interieur pour relacher la pression quotidienne grace a des pressions douces et une ecoute tissulaire profonde.",
        idealFor: "Fatigue, stress, besoin de reconnexion a soi, emotions fortes.",
        duration: "1h a 1h30",
      },
      {
        title: "Soin Cible (Dos, Drainage, Nerf Vague)",
        description:
          "Un accompagnement specifique la ou le corps tiraille: dos, digestion, tensions chroniques ou fatigue nerveuse.",
        idealFor: "Douleurs localisees, digestion difficile, tensions persistantes.",
        duration: "45 min",
      },
    ],
  },
  pricing: {
    title: "Tarif: Le Prix Conscient",
    content:
      "Vous choisissez le montant que vous donnez selon vos moyens et la valeur du soin recu.",
    rangeMin: 40,
    rangeMax: 90,
  },
  locations: {
    title: "Ou me trouver ?",
    markets: "Montbrun Bocage, Foix, Saint-Girons",
    festivals: "Les Ferrarias, Aurillac, et d'autres dates en ete",
    homeVisits: "Je me deplace chez vous pour transformer votre salon en cocon.",
    note: "Suivez mes reseaux sociaux pour connaitre mon emplacement de la semaine.",
  },
  contact: {
    title: "Me Contacter / Reserver",
    intro:
      "Vous ressentez l'appel d'une pause douceur ? Ecrivez-moi pour reserver ou poser vos questions.",
    phone: "+33 6 00 00 00 00",
    email: "contact@lucie-massages.fr",
    instagram: "https://instagram.com/",
    ctaLabel: "Envoyer avec le coeur",
  },
  seo: {
    title: "Lucie Amanahita Soete - Massages Bien-Etre",
    description:
      "Site vitrine one-page de massages bien-etre, ecoute tissulaire et soins nomades.",
  },
};
