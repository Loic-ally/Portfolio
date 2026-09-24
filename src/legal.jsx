// legal.jsx — pages légales : mentions légales (LCEN) et politique de confidentialité (RGPD)
//
// À mettre à jour (et changer LAST_UPDATE) si l'hébergeur change, si un service tiers
// est ajouté (statistiques, formulaire, vidéo intégrée…) ou si le site devient
// professionnel (micro-entreprise : ajouter SIRET, adresse, etc.).

import { SignatureGlyph } from "./geometry.jsx";
import { Footer, LEGAL_PAGES } from "./sections.jsx";

const assetBase = import.meta.env.BASE_URL;

const LAST_UPDATE = "24 septembre 2026";

const OWNER = {
  name: "Loïc Philippe",
  city: "Mulhouse, France",
  email: "loic.philippe@epitech.eu",
  phone: "+33767498084",
  phoneLabel: "+33 7 67 49 80 84",
};

const HOST = {
  name: "GitHub, Inc.",
  service: "GitHub Pages",
  address: "88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis",
  phone: "+18774484820",
  phoneLabel: "+1 (877) 448-4820",
  url: "https://github.com",
};

const GITHUB_PRIVACY =
  "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement";

const Email = () => <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>;

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const Block = ({ n, title, children }) => (
  <section className="legal-block" aria-labelledby={`s${n}`}>
    <h2 id={`s${n}`}>
      <span className="legal-num">{n}</span>
      {title}
    </h2>
    <div className="legal-body">{children}</div>
  </section>
);

const LegalHeader = ({ current }) => (
  <nav className="nav" aria-label="Navigation principale">
    <a href={assetBase} className="nav-mark" aria-label="Retour au portfolio">
      <SignatureGlyph variant={2} size={22} strokeWidth={1.1} />
      <span className="nav-name">Loïc Philippe</span>
    </a>
    <ul className="nav-links">
      {LEGAL_PAGES.map((p) => (
        <li key={p.id}>
          <a href={p.href} aria-current={p.id === current ? "page" : undefined}>
            <span>{p.label}</span>
          </a>
        </li>
      ))}
    </ul>
    <div className="nav-actions">
      <a href={assetBase} className="nav-cv">
        ← Portfolio
      </a>
    </div>
  </nav>
);

const MentionsLegales = () => (
  <>
    <div className="section-head">
      <span className="section-num">§</span>
      <span className="section-kicker">Informations légales</span>
    </div>
    <h1 className="legal-title">
      Mentions légales<em>.</em>
    </h1>
    <p className="legal-updated">Dernière mise à jour : {LAST_UPDATE}</p>
    <p className="legal-lede">
      Conformément à l'article 1-1 de la loi n° 2004-575 du 21 juin 2004 pour la
      confiance dans l'économie numérique (LCEN), les informations suivantes sont
      portées à la connaissance des visiteurs du présent site.
    </p>

    <Block n="01" title="Éditeur du site">
      <p>
        Ce site est un portfolio personnel, édité à titre non professionnel par une
        personne physique :
      </p>
      <dl className="legal-card">
        <dt>Nom</dt>
        <dd>{OWNER.name}</dd>
        <dt>Localisation</dt>
        <dd>{OWNER.city}</dd>
        <dt>Email</dt>
        <dd>
          <Email />
        </dd>
        <dt>Téléphone</dt>
        <dd>
          <a href={`tel:${OWNER.phone}`}>{OWNER.phoneLabel}</a>
        </dd>
      </dl>
      <p>
        Conformément aux dispositions de la LCEN applicables aux éditeurs non
        professionnels, l'adresse postale de l'éditeur n'est pas publiée ; ses
        éléments d'identification personnelle ont été communiqués à l'hébergeur.
      </p>
    </Block>

    <Block n="02" title="Directeur de la publication">
      <p>
        {OWNER.name} — joignable à l'adresse <Email />.
      </p>
    </Block>

    <Block n="03" title="Hébergement">
      <dl className="legal-card">
        <dt>Hébergeur</dt>
        <dd>
          {HOST.name} (service {HOST.service})
        </dd>
        <dt>Adresse</dt>
        <dd>{HOST.address}</dd>
        <dt>Téléphone</dt>
        <dd>
          <a href={`tel:${HOST.phone}`}>{HOST.phoneLabel}</a>
        </dd>
        <dt>Site web</dt>
        <dd>
          <Ext href={HOST.url}>github.com</Ext>
        </dd>
      </dl>
    </Block>

    <Block n="04" title="Propriété intellectuelle">
      <p>
        Sauf mention contraire, l'ensemble des contenus de ce site — textes, compositions
        graphiques et illustrations, signature visuelle, mise en page et CV — est la
        propriété exclusive de {OWNER.name} et est protégé par le Code de la propriété
        intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification ou adaptation, totale ou
        partielle, sans autorisation écrite préalable est interdite et constitue une
        contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la
        propriété intellectuelle. Les courtes citations sont autorisées dans les
        conditions de l'article L.122-5, sous réserve d'en mentionner la source.
      </p>
      <p>
        Les noms, marques et logos cités (notamment EPITECH, GitHub, Avada-Consult,
        Gordios, ainsi que les technologies mentionnées) appartiennent à leurs titulaires
        respectifs. Leur mention est purement informative et n'implique aucun partenariat
        ni aucune approbation de leur part.
      </p>
      <p>
        Les projets présentés renvoient à des dépôts GitHub soumis à leurs propres
        conditions. Sauf licence explicite dans le dépôt concerné, le code source de ce
        site n'est pas placé sous licence libre.
      </p>
    </Block>

    <Block n="05" title="Données personnelles et cookies">
      <p>
        Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure d'audience et ne
        charge aucune ressource tierce. Le détail des traitements de données
        personnelles figure dans la{" "}
        <a href={`${assetBase}confidentialite.html`}>politique de confidentialité</a>.
      </p>
    </Block>

    <Block n="06" title="Liens hypertextes">
      <p>
        Ce site contient des liens vers des sites tiers, notamment GitHub. L'éditeur
        n'exerce aucun contrôle sur ces sites et n'est pas responsable de leur contenu
        ni de leurs pratiques en matière de données personnelles.
      </p>
      <p>
        La création de liens vers ce site est libre, à condition de ne pas laisser croire
        à une affiliation et de ne pas afficher ses pages à l'intérieur d'un autre site
        (framing).
      </p>
    </Block>

    <Block n="07" title="Responsabilité">
      <p>
        Les informations publiées sont fournies à titre indicatif et peuvent évoluer.
        Malgré le soin apporté à leur rédaction, l'éditeur ne peut garantir leur
        exactitude, leur exhaustivité ou leur actualité, et ne saurait être tenu
        responsable, dans les limites prévues par la loi, des dommages résultant de
        l'accès au site ou de son utilisation, ou de son indisponibilité.
      </p>
      <p>
        Pour signaler un contenu que vous estimez illicite ou une erreur, écrivez à{" "}
        <Email />.
      </p>
    </Block>

    <Block n="08" title="Droit applicable">
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de
        litige, et à défaut de résolution amiable, les juridictions françaises sont
        compétentes dans les conditions prévues par la loi.
      </p>
    </Block>

    <Block n="09" title="Crédits">
      <ul>
        <li>Conception et développement : {OWNER.name}.</li>
        <li>
          Réalisé avec <Ext href="https://react.dev">React</Ext> et{" "}
          <Ext href="https://vite.dev">Vite</Ext>.
        </li>
        <li>
          Typographies : Fraunces (Undercase Type), Inter (Rasmus Andersson) et
          JetBrains Mono (JetBrains), distribuées sous licence{" "}
          <Ext href="https://openfontlicense.org">SIL Open Font License 1.1</Ext> et
          hébergées sur ce site.
        </li>
        <li>Hébergement : {HOST.service}.</li>
      </ul>
    </Block>
  </>
);

const Confidentialite = () => (
  <>
    <div className="section-head">
      <span className="section-num">§</span>
      <span className="section-kicker">Données personnelles</span>
    </div>
    <h1 className="legal-title">
      Politique de confidentialité<em>.</em>
    </h1>
    <p className="legal-updated">Dernière mise à jour : {LAST_UPDATE}</p>
    <p className="legal-lede">
      Cette page explique quelles données personnelles sont traitées lorsque vous
      consultez ce site ou me contactez, conformément au Règlement (UE) 2016/679 (RGPD)
      et à la loi n° 78-17 du 6 janvier 1978 modifiée, dite « Informatique et
      Libertés ».
    </p>

    <aside className="legal-summary" aria-labelledby="en-bref">
      <h2 id="en-bref">En bref</h2>
      <ul>
        <li>Aucun cookie, aucun traceur, aucune mesure d'audience, aucune publicité.</li>
        <li>Aucun formulaire, aucun compte utilisateur, aucun stockage dans votre navigateur.</li>
        <li>
          Polices hébergées sur le site : aucune requête vers un service tiers pendant
          votre visite.
        </li>
        <li>
          Seul l'hébergeur (GitHub) enregistre votre adresse IP, pour des raisons de
          sécurité.
        </li>
      </ul>
    </aside>

    <Block n="01" title="Responsable du traitement">
      <p>
        {OWNER.name}, {OWNER.city} — <Email />.
      </p>
    </Block>

    <Block n="02" title="Données traitées">
      <h3>Consultation du site</h3>
      <p>
        Lorsque vous consultez ce site, l'hébergeur {HOST.name} enregistre
        automatiquement votre adresse IP à des fins de sécurité, que vous soyez
        connecté à GitHub ou non. GitHub traite ces données pour ses propres besoins,
        conformément à sa{" "}
        <Ext href={GITHUB_PRIVACY}>déclaration de confidentialité</Ext> ; l'éditeur n'a
        pas accès à ces journaux et ne réalise aucune statistique de fréquentation.
      </p>
      <ul>
        <li>
          Base légale : intérêt légitime (article 6.1.f du RGPD) — sécurité et bon
          fonctionnement du service d'hébergement.
        </li>
        <li>
          Transfert hors de l'Union européenne : GitHub, Inc. est établie aux
          États-Unis. Ce transfert repose notamment sur le cadre de protection des
          données UE–États-Unis (Data Privacy Framework), auquel GitHub a adhéré.
        </li>
      </ul>

      <h3>Prise de contact</h3>
      <p>
        Si vous me contactez par email ou par téléphone, je traite les données que vous
        me transmettez (nom, coordonnées, contenu du message) uniquement pour vous
        répondre et assurer le suivi de nos échanges, par exemple pour une opportunité
        de stage ou d'emploi.
      </p>
      <ul>
        <li>
          Base légale : intérêt légitime à répondre aux sollicitations reçues (article
          6.1.f du RGPD) ou mesures précontractuelles prises à votre demande (article
          6.1.b).
        </li>
        <li>
          Durée de conservation : le temps nécessaire au traitement de votre demande,
          puis au maximum 3 ans à compter du dernier échange.
        </li>
        <li>
          Destinataire : {OWNER.name} uniquement. Les messages sont conservés dans sa
          messagerie, fournie par EPITECH. Ils ne sont ni vendus, ni cédés, ni utilisés
          à des fins de prospection.
        </li>
      </ul>

      <h3>Téléchargement du CV</h3>
      <p>
        Le CV est un fichier statique : son téléchargement n'entraîne aucune collecte
        de données par l'éditeur, en dehors des journaux techniques de l'hébergeur
        décrits ci-dessus.
      </p>
    </Block>

    <Block n="03" title="Cookies et traceurs">
      <p>
        Ce site ne dépose aucun cookie et n'utilise aucun traceur (mesure d'audience,
        réseaux sociaux, publicité), ni aucun stockage local du navigateur. Les
        préférences d'affichage, comme le mode sombre, ne sont pas enregistrées. Aucun
        consentement n'est donc requis au titre de l'article 82 de la loi Informatique
        et Libertés, et aucun bandeau cookies n'est affiché.
      </p>
    </Block>

    <Block n="04" title="Services et liens tiers">
      <p>
        Aucune ressource tierce n'est chargée : pas de police Google, de CDN, de vidéo
        intégrée ni de bouton de réseau social. Les liens vers GitHub ou d'autres sites
        ne transmettent aucune donnée tant que vous ne cliquez pas. Ils s'ouvrent sans
        communiquer l'adresse de la page d'origine ; une fois sur le site tiers, sa
        propre politique de confidentialité s'applique.
      </p>
    </Block>

    <Block n="05" title="Sécurité">
      <p>
        Le site est servi en HTTPS et applique une politique de sécurité du contenu
        (Content Security Policy) qui n'autorise que les ressources provenant du site
        lui-même.
      </p>
    </Block>

    <Block n="06" title="Vos droits">
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation,
        d'opposition et de portabilité sur vos données (articles 15 à 21 du RGPD), ainsi
        que du droit de définir des directives relatives à leur sort après votre décès
        (article 85 de la loi Informatique et Libertés).
      </p>
      <p>
        Pour les exercer, écrivez à <Email />. Une réponse vous sera apportée dans un
        délai d'un mois. Un justificatif d'identité pourra être demandé en cas de doute
        raisonnable. Pour les journaux de connexion conservés par GitHub, adressez-vous
        directement à GitHub via les coordonnées indiquées dans sa{" "}
        <Ext href={GITHUB_PRIVACY}>déclaration de confidentialité</Ext>.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire
        une réclamation auprès de la CNIL : 3 place de Fontenoy, TSA 80715, 75334 Paris
        Cedex 07 — <Ext href="https://www.cnil.fr/fr/plaintes">cnil.fr/fr/plaintes</Ext>.
      </p>
    </Block>

    <Block n="07" title="Modifications">
      <p>
        Cette politique peut être modifiée, notamment en cas d'évolution du site ou de
        la réglementation. La date de dernière mise à jour figure en haut de la page.
      </p>
    </Block>
  </>
);

const PAGES = {
  mentions: MentionsLegales,
  confidentialite: Confidentialite,
};

export function LegalPage({ page }) {
  const Content = PAGES[page] ?? MentionsLegales;
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <LegalHeader current={page} />
      <main id="contenu" className="legal">
        <Content />
      </main>
      <Footer sigVariant={2} current={page} />
    </>
  );
}
