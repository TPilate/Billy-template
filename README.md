# Billy - One Page Vitrine + Mongo CMS

Site vitrine one-page construit avec Next.js, avec un CMS admin simple et rapide base sur MongoDB.

## Ce que contient le projet

- One-page vitrine (hero, approche, soins, tarifs, lieux, contact)
- Interface admin a `/admin` pour modifier le contenu sans toucher au code
- Contenu stocke en base MongoDB (`siteContent` collection)
- API routes pour lecture publique et edition admin
- Style editorial base sur le systeme de design defini dans `context/design.md`

## Installation

1. Installer les dependances

```bash
npm install
```

2. Creer un fichier `.env.local` a partir de `.env.example`

```bash
cp .env.example .env.local
```

3. Lancer le projet

```bash
npm run dev
```

4. Ouvrir:
- Site: http://localhost:3000
- Admin CMS: http://localhost:3000/admin

## Variables d'environnement

- `MONGODB_URI` : URI MongoDB
- `MONGODB_DB_NAME` : nom de la base
- `ADMIN_PASSWORD` : mot de passe de l'interface admin

Par defaut, le projet utilise:
- `mongodb://localhost:27042/billy`
- base `billy`

## CMS Admin

L'interface admin permet de gerer:
- Hero
- Approche
- Soins (ajout/suppression)
- Prix conscient
- Lieux
- Contact

Une fois connecte, cliquez sur "Sauvegarder" pour mettre a jour le document principal `home` en base.

## Commandes utiles

- `npm run dev` : lancer en local
- `npm run lint` : verifier le code
- `npm run build` : build production
- `npm run start` : demarrer en mode production
