# Loïc Philippe — Portfolio

[English](README.md) · **Français**

[![Déploiement GitHub Pages](https://github.com/Loic-ally/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Loic-ally/Portfolio/actions/workflows/deploy.yml)

Portfolio personnel de Loïc Philippe, développeur full-stack et étudiant à EPITECH Mulhouse.
Une page unique, en français, qui présente mes projets, ma stack technique, mon expérience
et ma formation, avec un CV téléchargeable.

**Site en ligne :** https://loic-ally.github.io/Portfolio/

## Fonctionnalités

- Design éditorial et minimal, avec une géométrie SVG dessinée à la main (hero, séparateurs,
  visuels des projets)
- Mode clair et mode sombre
- Animations légères (apparition du titre, barre de progression, effet tilt, fondu au
  défilement), désactivées si le système du visiteur demande moins d'animations
- Accessibilité de base : lien d'évitement, zone `main`, navigation nommée, focus clavier
  visible
- Pages mentions légales et politique de confidentialité conformes au droit français (LCEN,
  RGPD)
- Respect de la vie privée dès la conception : aucun cookie, aucune mesure d'audience, aucun
  stockage dans le navigateur, aucune requête vers un tiers (les polices sont auto-hébergées)
- Politique de sécurité du contenu (CSP) qui n'autorise que les ressources du site

## Stack technique

| Domaine       | Outils                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Interface     | [React 18](https://react.dev)                                          |
| Build         | [Vite 5](https://vite.dev), multi-pages (portfolio + 2 pages légales)  |
| Styles        | CSS natif avec variables, sans framework                               |
| Graphismes    | SVG inline écrit à la main                                             |
| Typographies  | Fraunces, Inter, JetBrains Mono, auto-hébergées avec [Fontsource](https://fontsource.org) |
| Hébergement   | GitHub Pages, déployé avec GitHub Actions                              |

## Structure du projet

```
.
├── .github/workflows/deploy.yml  # Build + déploiement sur GitHub Pages
├── public/                       # Copié tel quel : CV.pdf, favicon.svg
├── src/
│   ├── main.jsx                  # Point d'entrée du portfolio
│   ├── App.jsx                   # Mise en page, sections hero et contact
│   ├── sections.jsx              # Nav, à propos, projets, stack, expérience, formation, pied de page
│   ├── geometry.jsx              # Compositions SVG
│   ├── effects.jsx               # Animations et micro-interactions
│   ├── tweaks-panel.jsx          # Panneau de réglages design (ne s'ouvre que dans un outil de design)
│   ├── legal.jsx                 # Contenu des mentions légales et de la politique de confidentialité
│   ├── legal-main.jsx            # Point d'entrée des pages légales
│   └── portfolio.css             # Tous les styles et l'import des polices
├── index.html                    # Portfolio
├── mentions-legales.html         # Mentions légales
├── confidentialite.html          # Politique de confidentialité
└── vite.config.js                # Config Vite : pages, base relative, CSP
```

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org) 18 ou plus (22 recommandé, comme la CI, voir
`.nvmrc`) et npm.

```bash
git clone https://github.com/Loic-ally/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Puis ouvrez http://localhost:5173.

| Commande          | Rôle                                                          |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Lance le serveur de développement avec rechargement à chaud   |
| `npm run build`   | Génère le site de production dans `dist/`                     |
| `npm run preview` | Sert `dist/` en local pour vérifier le build de production    |

Les pages légales sont accessibles à `/mentions-legales.html` et `/confidentialite.html`.
La CSP n'est ajoutée qu'au build de production : pour la tester, lancez
`npm run build && npm run preview`.

## Déploiement (GitHub Pages)

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construit et
déploie le site à chaque push sur `main`. Il construit aussi les pull requests, sans les
déployer, pour repérer un build cassé avant la fusion. Vous pouvez aussi le lancer à la main
depuis l'onglet **Actions**.

### Configuration initiale (une seule fois)

1. Dans le dépôt, allez dans **Settings → Pages → Build and deployment** et choisissez
   **GitHub Actions** comme **Source**.
2. Poussez sur `main`, ou lancez le workflow à la main. L'URL du site s'affiche dans le
   résumé de l'exécution et dans **Settings → Pages**.

La `base` de Vite vaut `./` (chemins relatifs) : le même build fonctionne à
`https://loic-ally.github.io/Portfolio/` comme sur un domaine personnalisé.

### Domaine personnalisé (optionnel)

Pour servir le site sur `loic-philippe.fr` :

1. Dans **Settings → Pages → Custom domain**, saisissez `loic-philippe.fr` et enregistrez.
   Aucun fichier `CNAME` n'est nécessaire avec un déploiement par Actions.
2. Chez votre registraire, créez ces enregistrements DNS :
   - des enregistrements `A` pour le domaine nu (`@`) : `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - des enregistrements `AAAA` pour le domaine nu (IPv6) : `2606:50c0:8000::153`,
     `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - un enregistrement `CNAME` pour `www` qui pointe vers `loic-ally.github.io`
3. Une fois la vérification DNS validée, cochez **Enforce HTTPS**.
4. Recommandé : vérifiez le domaine dans les paramètres de votre compte GitHub
   (**Settings → Pages → Add a domain**) pour que personne d'autre ne puisse l'utiliser
   sur GitHub Pages.

## Mentions légales et vie privée

La loi française impose d'identifier l'éditeur et l'hébergeur d'un site (LCEN, article 1-1)
et d'informer les visiteurs de l'usage de leurs données personnelles (RGPD). Le site inclut :

- une page **mentions légales** (`mentions-legales.html`) : éditeur, directeur de la
  publication, hébergeur, propriété intellectuelle, liens, responsabilité, droit applicable,
  crédits ;
- une page **politique de confidentialité** (`confidentialite.html`) : responsable du
  traitement, données traitées, bases légales, durées de conservation, transferts hors UE,
  cookies, droits des personnes, réclamation auprès de la CNIL ;
- un lien vers ces deux pages dans le pied de page de chaque page.

Le site ne dépose aucun cookie, n'utilise aucun stockage navigateur et ne charge rien depuis
un tiers : aucun bandeau de consentement n'est nécessaire.

**Gardez ces pages à jour.** Modifiez `src/legal.jsx` et sa date `LAST_UPDATE` si vous :

- changez d'hébergeur (mettre à jour la section hébergement) ;
- ajoutez une mesure d'audience, une vidéo intégrée, un formulaire de contact ou tout autre
  service tiers (mettre à jour la politique de confidentialité ; un bandeau de consentement
  peut alors devenir obligatoire) ;
- utilisez le site à titre professionnel, par exemple comme micro-entrepreneur (il faut alors
  ajouter votre numéro SIRET et votre adresse professionnelle).

## Licence

© Loïc Philippe. Tous droits réservés. Le contenu (textes, visuels, CV) et le code source ne
sont pas publiés sous licence libre. Les polices sont sous licence SIL Open Font License 1.1.
