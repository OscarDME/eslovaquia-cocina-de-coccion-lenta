// ─────────────────────────────────────────────────────────────────────────────
// Doc §7: TODO el texto visible de la landing sale de este archivo.
// Los componentes solo leen de aquí; nunca tienen texto propio.
// Idioma: eslovaco (sk) — transcreación adaptada al mercado eslovaco.
// Convención "*Rich": array de segmentos {t, b?, hi?} para énfasis inline
// (b = negrita, hi = resaltado verde). Se renderiza con RichText.astro.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  metadata: {
    lang: 'sk',
    title: 'Najlepšia 5⭐ kuchárka pre pomalý hrniec so 141 fantastickými receptami',
    description:
      'Chcete večeru bez stresu presne o 19:00? 141 chutných a zdravých receptov pre pomalý hrniec z bežných surovín a s rýchlou prípravou. Viac ako 16 500 rodín už podľa nich varí a hodnotí ich 5 hviezdičkami.',
    canonical: 'https://bavno-gotvene.crearis.online',
    ogImage: '/og-cover.webp',
    ogType: 'website',
    ogLocale: 'sk_SK',
    siteName: 'Kuchárka pre pomalý hrniec',
  },

  a11y: {
    skipToContent: 'Prejsť na hlavný obsah',
    reviewsRegion: 'Hodnotenia zákazníkov',
    valuePropsRegion: 'Výhody v skratke',
    footerNav: 'Pätičková navigácia',
    starsLabel: 'hviezdičiek',
  },

  hero: {
    title: 'Kuchárka pre pomalý hrniec',
    subtitle: 'Sadnúť si k stolu bez stresu a zhonu? O tom sníva každý!',
    socialProof: {
      strong: 'Viac ako 16 500 rodín',
      rest: ' už varí podľa týchto receptov s priemerným hodnotením ',
      stars: 5,
    },
    ctaPrimary: { label: 'Objednať ako e-knihu (PDF)', sub: 'výhodnejšie a okamžite vo vašom e-maile' },
    pricePerRecipe: { pre: 'Len', amount: '0,06 €', post: 'na recept' },
    book: {
      title: 'Pomalé varenie',
      subtitle: 'Jednoducho a chutne',
      author: 'Jana Kováčová',
      badge: '141 receptov',
      spine: 'POMALÉ VARENIE',
    },
    imageAlt: 'Jedlo z pomalého hrnca s krehkým hovädzím mäsom a čerstvou zeleninou, pripravené na servírovanie',
  },

  valueProps: [
    {
      icon: 'pot',
      title: 'Večera je na stole presne o 19:00',
      text: 'S bežnými surovinami z obchodu a jasnými, presnými pokynmi.',
    },
    {
      icon: 'clock',
      title: 'Príprava zaberie minimum času',
      text: 'Ráno pár minút na prípravu — a večer vás už čaká hotová večera.',
    },
    {
      icon: 'chef',
      title: 'Varenie zvládnete ako skutočný šéfkuchár',
      text: 'Gurmánsky zážitok ako z reštaurácie, no pripravený v pohodlí domova!',
    },
  ],

  story: {
    heading: 'Večera úplne bez stresu',
    paragraphs: [
      'Stáva sa vám, že vám úplne dôjdu nápady, keď máte vymyslieť, čo uvariť na večeru?',
      'A v tom najväčšom zhone po práci vám jednoducho neostáva čas na niečo chutné, rozmanité a zdravé?',
      'Tak dobre vám rozumiem!'
    ],
    highlightRich: [
      { t: 'Ale dnes vďaka pomalému hrncu za chvíľku servírujem ' },
      { t: 'neskutočne chutné jedlá', hi: true },
      { t: ' a zároveň ' },
      { t: 'šetrím hromadu času', hi: true },
      { t: '!' },
    ],
    question: 'Chcete mať aj vy pohodovú večeru presne o 19:00?',
    answer: 'Potom bude mojich 141 zdravých a chutných receptov pre vás skutočnou záchranou!',
    closer: 'Jednoducho si sadnete k stolu a vychutnáte si skvelé jedlo – kto by to nechcel?',
    imageAlt: 'Výborne uvarené dusené mäso so zeleninou, ktoré sa parí priamo z pomalého hrnca na stole',
  },

  buyerReviews: {
    heading: 'Čo hovoria ľudia, ktorí si ju už kúpili:',
    items: [
      {
        name: 'Mária',
        source: 'Trustpilot',
        rating: 5,
        title: 'Nedávno som si vzala všetky tri e-knihy…',
        quote:
          'Kúpila som si všetky e-knihy a som do nich úplne zbláznená! Už som podľa nich v mojom pomalom hrnci varila viackrát. Všetko je také jednoduché a chutné. Rada varím na pár dní dopredu a funguje to super. Recepty sú veľmi zrozumiteľné a časy varenia sú absolútne presné! S netrpezlivosťou čakám na číslo 4!',
      },
      {
        name: 'Zuzana V.',
        source: 'Google',
        rating: 5,
        title: 'Určite stojí za to!',
        quote:
          'Knihu som kúpila pred pár týždňami a hneď po otvorení som bola nadšená. Je plná skvelých receptov, kroky sú vysvetlené perfektne, rovnako ako aj to, ako dlho sa má jedlo dusiť v pomalom hrnci. Na začiatku je super praktický zoznam receptov. Určite stojí za každý jeden cent!!',
      },
      {
        name: 'Andrea K.',
        source: 'Trustpilot',
        rating: 5,
        title: 'Tretia kniha od Janky…',
        quote:
          'Samozrejme, že som si kúpila aj tretiu Janinu knihu, a opäť som očarená! Jej recepty sú neskutočne chutné, prehľadné, z čerstvých surovín a prinášajú veľmi prekvapivé kombinácie! Dodáva mi to obrovskú inšpiráciu a teraz varím s ešte väčšou radosťou!',
      },
      {
        name: 'Ľubica',
        source: 'Trustpilot',
        rating: 4,
        title: 'Skvelé recepty',
        quote:
          'Veľmi chutné jedlá. Hneď prvý recept mi vyšiel na výbornú, čo sa s inými knihami na prvýkrát nie vždy stáva. Odporúčam všetkými desiatimi.',
      },
      {
        name: 'Martin B.',
        source: 'Google',
        rating: 5,
        title: 'Najlepšia kniha pre pomalé varenie',
        quote:
          'Kúpil som si ju pre seba a je v nej hrozne veľa jednoduchých, no super chutných receptov. Všetko je vysvetlené krok za krokom z bežne dostupných surovín. A vždy sa to podarí! Toto je tá najlepšia kniha pre pomalý hrniec, na akú som kedy natrafil. Vrelo odporúčam!',
      },
      {
        name: 'Milena D.',
        source: 'Trustpilot',
        rating: 5,
        title: 'Kúpila som si časť 1 a 2…',
        quote:
          'Kúpila som si prvé dve časti a poviem vám, aké sú tam fantastické recepty! Sú tak dobré, každému odporúčam, aby si ich zaobstaral a vyskúšal to, je to fakt obrovská zábava!',
      },
    ],
  },

  inspiration: {
    heading: 'Koniec lámania si hlavy nad tým, čo uvariť',
    subheading: 'Poznáte to?',
    paragraphs: [
      'Hrabete sa hodiny na internete, aby ste našli dokonalé jedlo pre pomalý hrniec... myslíte si, že ste niečo objavili, a nakoniec výsledok? Vodová brečka bez akejkoľvek chuti.',
      'Nie ste v tom sami!',
      'Ale ide to aj inak.',
    ],
    highlight:
      'S touto kuchárkou budete musieť jesť to isté jedlo len 2-krát do roka – toľko rozmanitosti zrazu vo svojej kuchyni budete mať.',
    cta: 'Áno, chcem všetky tieto recepty hneď teraz!',
    priceLabel: 'Teraz len za',
    price: '8,90 €',
  },

  benefits: {
    heading: 'Vaše výhody v skratke',
    items: [
      {
        title: '14-dňová záruka',
        text: 'Nakupujete bez akéhokoľvek rizika. Ak nebudete spokojní, máte 14-dňovú záruku vrátenia peňazí.',
      },
      {
        title: 'Zdravé a chutné',
        text: 'Pripravíte jedlá plné chuti, zo zdravých surovín, s množstvom zeleniny a úplne bez umelých polotovarov.',
      },
      {
        title: 'Dostupné suroviny',
        text: 'Nakúpite všetky ingrediencie do mojich receptov aj v tom najmenšom bežnom supermarkete.',
      },
      {
        title: 'Rýchla príprava',
        text: 'Navaríte úžasnú večeru vďaka jasným postupom krok za krokom, a to bez hodín státia pri sporáku.',
      },
    ],
    categories: [
      'Krehké a šťavnaté dusené hovädzie mäso',
      'Prekvapivo chutné a sýte polievky',
      'Poctivé domáce jedlá ako rizoto, ale aj úžasné recepty s cestovinami, kuracím mäsom a rybami',
    ],
  },

  bonuses: {
    eyebrow: 'Darčeky k objednávke navyše',
    heading: 'Ku kuchárke pridávame 5 bonusov — úplne ZADARMO',
    subheading: 'Aby ste z pomalého hrnca vyťažili naozaj maximum, k receptom vám pribalíme aj týchto 5 praktických pomocníkov:',
    freeWord: 'ZADARMO',
    items: [
      {
        tag: 'Bonus 1',
        title: 'Jedálniček na 4 týždne',
        text: '28 večerí naplánovaných za vás. Stačí otvoriť, uvariť a máte hotovo — koniec večnej otázky „čo dnes navarím?“.',
        value: '12 €',
      },
      {
        tag: 'Bonus 2',
        title: 'Hotové nákupné zoznamy',
        text: 'Ku každému týždňu prehľadný zoznam rozdelený podľa regálov v obchode. V supermarkete ste za pár minút a na nič nezabudnete.',
        value: '9 €',
      },
      {
        tag: 'Bonus 3',
        title: 'Sprievodca „Už nikdy vodovo ani bez chuti“',
        text: 'Tabuľka časov varenia na nízkom aj vysokom stupni, jednoduché pravidlá korenenia a zahusťovania a návod, ako pre pomalý hrniec upraviť ktorýkoľvek recept.',
        value: '14 €',
      },
      {
        tag: 'Bonus 4',
        title: 'Varenie do zásoby a mrazenie',
        text: 'Uvarte raz a jedzte celý týždeň. Ukážeme vám, ako jedlá správne rozdeliť na porcie, zamraziť a znovu ohriať bez straty chuti.',
        value: '11 €',
      },
      {
        tag: 'Bonus 5',
        title: 'Extra kolekcia: dezerty z pomalého hrnca',
        text: 'Približne 25 receptov na sladké — od hrejivých múčnikov po krémové dobroty, ktoré pripravíte úplne bez rúry.',
        value: '19 €',
      },
    ],
    totalLabel: 'Hodnota všetkých bonusov spolu',
    totalValue: '65 €',
    freeLine: 'Dnes ich k objednávke dostávate úplne ZADARMO.',
  },

  socialReviews: {
    heading: 'Čo hovoria ľudia na sociálnych sieťach',
    items: [
      {
        name: 'Kamila S.',
        source: 'WhatsApp',
        quote:
          'Som taká šťastná, čakanka vyšla na výbornú, kučeravý kel tiež a recept s klobáskami je absolútny hit. Zbožňujem domácu stravu. V pondelok budem robiť chili con carne s pečenými sladkými zemiakmi.',
      },
      {
        name: 'Margaréta S.',
        source: 'WhatsApp',
        quote:
          'Dnes sme mali zasa orzo, je to neskutočne dobré, s tvojimi receptami som sa v kuchyni znovuzrodila!',
      },
      {
        name: 'Alica B.',
        source: 'Facebook',
        quote:
          'Neskutočná dobrota!! Pridala som aj trošku čili na spestrenie. Môj muž povedal, že je to jedlo na úrovni drahej reštaurácie!!',
      },
      {
        name: 'Katka G.',
        source: 'Facebook',
        quote:
          'Včera mi kniha prišla a dnes som hneď spravila paradajkovú polievku. Moji chalani ju schválili na 100 %, takže ju určite zaraďujeme do nášho pravidelného jedálnička.',
      },
      {
        name: 'Klára V.',
        source: 'Facebook',
        quote: 'Dnes som robila soto polievku, je proste brutálna!!!!!',
      },
      {
        name: 'martin_m',
        source: 'Instagram',
        quote: 'Veľmi dobrá kniha so skvelými receptami.',
      },
    ],
  },

  showcase: {
    heading: 'Je čas zožať doma ovácie!',
    items: [
      { title: 'Mäso, ktoré sa rozplýva na jazyku', imageAlt: 'Krehké mäso z pomalého hrnca s mrkvou a bylinkami' },
      { title: 'Fantastické polievky', imageAlt: 'Svieža, krémová polievka pripravená v pomalom hrnci' },
    ],
  },

  finalCta: {
    kicker: 'Staňte sa majstrom pomalého hrnca úplne bez námahy!',
    heading: 'Nechajte pomalý hrniec premeniť vašu kuchyňu!',
    lead: 'Doprajte si chutné, zdravé a jednoduché domáce jedlá.',
    paragraphs: [
      'Zmeňte spôsob, akým varíte, vďaka mojim receptom. Objavte starostlivo vybrané jedlá, šikovné triky a vychutnajte si skvelé večere bez zbytočného stresu.',
      'Inšpirujte sa ešte dnes a ušetrite si hodiny hľadania receptov a únavného státia pri sporáku!'
    ],
    cta: 'Objednať túto úžasnú knihu hneď teraz',
    ctaNote: '14-dňová záruka! Už nikdy si nelámte hlavu nad tým, čo budete variť!',
    imageAlt: 'Kuchárka pre pomalý hrniec vedľa čerstvo uvareného, pariaceho sa jedla',
  },

  ratings: {
    heading: 'Hodnotenie',
    items: [
      {
        platform: 'Trustpilot',
        score: '4,8',
        max: '5',
        count: '208',
        countLabel: 'recenzií',
        note: 'Overený profil',
      },
      {
        platform: 'Google',
        score: '4,8',
        max: '5',
        count: '89',
        countLabel: 'recenzií',
        note: 'Mediálna agentúra',
      },
    ],
  },

  testimonials: {
    heading: 'Ďalšie ohlasy na moje recepty',
    items: [
      {
        title: 'Všetci zjedia svoje porcie do posledného kúska!',
        quote:
          'Odkedy varím podľa tvojej knihy, dokonca aj moji tínedžeri všetko zjedia bez reptania, chutí im absolútne všetko!',
      },
      {
        title: 'Stačí si len vybrať',
        quote:
          'Je to jednoducho fantastické! Je tam taká obrovská rozmanitosť, že stačí prelistovať pár strán a hneď viem, akú dobrotu dám dnes na stôl.',
      },
      {
        title: 'Proste top!',
        quote:
          'Nikdy by som neverila, že môžem variť tak chutne s tak malou námahou. Proste top!',
      },
    ],
    cta: 'Objednať teraz',
  },

  about: {
    heading: 'Niečo málo o mne...',
    name: 'Jana Kováčová',
    intro: 'Ahojte, som Jana Kováčová a som zapálená fanúšička pomalého hrnca',
    paragraphs: [
      'Pred rokmi som dostala pomalý hrniec ako darček a úplne som „prepadla“ kúzlu pomalého varenia.',
      'Už viac ako 14 rokov smelo experimentujem a tento úžasný prístroj používam aspoň 3- až 4-krát týždenne.',
      'Som vydatá a mám dvoch tínedžerov; nech žije blázinec s dospievajúcimi deťmi, najrôznejšími rozvrhmi v škole a práci, ako aj stovkami tréningov. Bez pomalého hrnca by bola večera v našej rodine oveľa zložitejšou a poriadne nervy drásajúcou úlohou!',
      'Chcete sa o mne, mojej knihe alebo o našej komunite nadšencov pomalého varenia dozvedieť viac? Napíšte mi e-mail, rada vám odpoviem!'
    ],
    cta: 'ÁNO, chcem začať variť podľa tejto knihy',
    imageAlt: 'Svieže a farebné jedlo, pripravené s láskou doma v pomalom hrnci',
  },

  closing: {
    heading: 'Recepty v knihe',
    primaryCta: 'Objednať knihu',
    altCta: 'Nie, radšej chcem len e-knihy',
  },

  footer: {
    brand: 'Kuchárka pre pomalý hrniec',
    author: 'od Jany Kováčovej',
    tagline: 'Varenie bez stresu, zdravo a chutne — 141 receptov, ktoré sa vždy podaria.',
    copyright: '© 2026 Mamsatwork · Všetky práva vyhradené.',
    links: [
      { label: 'Všeobecné obchodné podmienky', href: '#' },
      { label: 'Zásady ochrany osobných údajov', href: '#' },
      { label: 'Kontakt', href: '#' },
    ],
  },
};