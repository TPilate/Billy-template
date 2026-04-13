**Projet :** Site vitrine — Lucie Amanahita Soete (Massages & Fascias)  
**Direction Artistique :** Nature Distillée & Éditorial Minimaliste

---

## 1. FONDATIONS STRATÉGIQUES
Le style "Amanahita Soul" s'éloigne des codes classiques et souvent génériques du bien-être. Nous construisons une identité ancrée dans la matière, la terre et le mouvement. L'espace négatif est notre meilleur allié pour symboliser le souffle et la détente. 

> **Note de design :** Ne surcharge rien, laisse le design respirer.

---

## 2. PALETTE DE COULEURS (Tokens)
L'équilibre chromatique repose sur un contraste fort entre des tons terreux très clairs et des accents organiques profonds.

| Rôle | Nom | Hex | Description |
| :--- | :--- | :--- | :--- |
| **Base** | Sable Rose | `#D8C3A5` | Fond majoritaire (peau, chaleur, humain). |
| **Surface** | Ivoire | `#F9F6F1` | Cartes et superpositions pour la lisibilité. |
| **Texte & Titres** | Encre Profonde | `#1A0F1D` | Noir teinté violet, riche et premium. |
| **Accent Primaire** | Aubergine Profond | `#301934` | Autorité et action (boutons, titres forts). |
| **Accent Secondaire**| Lavande Séchée | `#967BB6` | Micro-interactions et icônes (parcimonie). |

---

## 3. TYPOGRAPHIE (Hiérarchie)
Le contraste entre les empattements classiques et la rigueur géométrique crée cette tension "Haute-Couture".

### Titres Principaux (H1, H2)
- **Police :** `Clash Display` (Bold)
- **Alternative :** Space Grotesk ou Syne
- **Propriétés :** `letter-spacing: -0.02em; line-height: 1.1;`
- **Usage :** Hero banner, titres de grandes sections.

### Corps de texte
- **Police :** `Inter` (Regular & Medium)
- **Propriétés :** `font-size: 1.125rem (18px); line-height: 1.6; color: var(--color-text-ink);`
- **Usage :** Paragraphes, descriptions techniques, UI.

### Citations & Voix (Accents)
- **Police :** `Cormorant Garamond` (Italic)
- **Propriétés :** `font-size: 1.5rem; color: var(--color-primary-aubergine);`
- **Usage :** Témoignages, signatures, phrases clés (ex: *"Stop it, it's possible now"*).

---

## 4. GRILLE & ESPACEMENT
- **Système :** Grille stricte basée sur un pas de **8pt** (0.5rem, 1rem, 2rem, 4rem, 8rem).
- **Max-width :** Conteneur limité à **1200px** (65 à 75 caractères par ligne max).
- **Marges :** Utilisation de `margin-bottom: var(--space-xl)` entre les sections pour la respiration.

---

## 5. DESIGN PATTERNS & COMPOSANTS

### Éléments d'interface
- **Le "Bento Grid" Nomade :** Présentation asymétrique pour les lieux d'intervention (Marchés, Festivals).
- **Bords arrondis :** `border-radius: 12px` (douceur sans excès).
- **Effet Hover :** `transform: translateY(-4px)` avec ombre douce pour inviter au clic.

### Les Boutons (CTAs)
- **Primaire :** Fond Aubergine, Texte Ivoire. Majuscules, `letter-spacing: 0.05em`. Radius léger (4px).
- **Secondaire :** Bordure 1px Aubergine, fond transparent.

### Direction Photographique
- **Interdiction :** Banques d'images génériques (pierres, bambous, bougies).
- **Recommandation :** - Photos de Lucie en action.
    - Grain argentique ou noir et blanc contrasté.
    - Gros plans sur les mains et textures organiques (lin).

---

## 6. CSS CUSTOM PROPERTIES (Variables)

```css
:root {
  /* Couleurs */
  --color-bg-sable: #D8C3A5;
  --color-surface-ivoire: #F9F6F1;
  --color-text-ink: #1A0F1D;
  --color-primary-aubergine: #301934;
  --color-accent-lavande: #967BB6;

  /* Typographie */
  --font-heading: 'Clash Display', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Cormorant Garamond', serif;

  /* Espacements (Système 8pt) */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 2rem;     /* 32px */
  --space-lg: 4rem;     /* 64px */
  --space-xl: 8rem;     /* 128px */

  /* Élévation & Effets */
  --radius-sm: 4px;
  --radius-md: 12px;
  --shadow-soft: 0 10px 30px rgba(26, 15, 29, 0.05);
  --transition-base: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
