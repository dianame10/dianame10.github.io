// Every visible string lives here. Facts come from Dianame's CV (Nov 2026).
// Assumptions to confirm or replace:
//  - site.url: GitHub Pages address until a custom domain is bought.
//  - GitHub: dianame10.
//  - LinkedIn: /in/dianame-altalim-b31862215/.
//  - Degree years read as 2020 to 2022, Best Design Award as 2021 (the CV layout was ambiguous).
//  - POS architecture (Electron tills, Node/Express + PostgreSQL server on the shop network)
//    inferred from the CV's stack list.

export type Fact = { value: string; label: string };
export type Line = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  short: string; // the name on the item row
  value: string; // the right-hand "price" column on the item row
  summary: string;
  description: string; // meta description, 120 to 160 chars
  meta: Line[];
  figure: { kind: 'facts'; facts: Fact[] } | { kind: 'timeline'; rows: Line[] };
  context: string;
  idea: string;
  craft: string[];
  outcome: string;
  colour: 'mustard' | 'pink' | 'green';
  stat: Fact; // the big number on the card
  tag: string; // small label on the card
  // Demo video. Leave src empty to show a "coming soon" frame. Either put a file in
  // public/videos/ and set src to '/videos/name.mp4', or paste a YouTube or Vimeo link.
  demo?: { src: string; poster?: string; caption: string };
  placeholder?: boolean;
};

export const site = {
  name: 'Dianame Altalim',
  first: 'DIANAME',
  last: 'ALTALIM',
  role: 'Full-stack software engineer',
  url: 'https://dianame10.github.io', // change to the custom domain once it is set up
  location: 'Wellington, New Zealand',
  timeZone: 'Pacific/Auckland',
  description:
    'Dianame Altalim is a full-stack engineer in Wellington: C# and .NET behind bank reconciliation at Xero, plus React products that real shops run on.',
  email: 'daltalim@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dianame-altalim-b31862215/',
  github: 'https://github.com/dianame10', // e.g. 'https://github.com/<username>'. Empty = hidden.
  // YOUR PHOTO: put the file in public/images/ (e.g. public/images/portrait.jpg) and set src to
  // '/images/portrait.jpg'. A portrait (taller than wide) works best, about 1200 x 1500 px.
  // While src is empty, a DA monogram fills the space.
  portrait: { src: '/images/portrait.jpg', alt: 'Dianame Altalim smiling at a table by a window, wearing a black lace top' },
  statement:
    'I write the C# services behind bank reconciliation at Xero, where the numbers have to be right and the lights have to stay on. Outside work, I build React products that real shops and real guests depend on.',
};

export const socials = [
  { label: 'LinkedIn', href: site.linkedin },
  ...(site.github ? [{ label: 'GitHub', href: site.github }] : []),
];

// How I build: shown on the home page. The About page words it differently on purpose.
export const approach = {
  heading: 'Software anyone can understand',
  body: [
    'I care about the systems I build, long after they ship. I want them to be easy to understand for anyone who uses them, including people who aren’t technical at all.',
    'Good software should help people do their job and make that job easier. The till system I built is used by shop staff, some of whom had never used a computer before, and they ran it from day one.',
  ],
};

export const xero = {
  team: 'Bank Reconciliation team',
  stack: 'C#, .NET, TypeScript, SQL, AWS, Terraform',
  blurb:
    'Close to four years at Xero, from intern to intermediate engineer. As a graduate I rotated through three teams, Reporting, Security and Engineering Practice, before settling on Bank Reconciliation. There I build and look after the services and APIs that small businesses and their accountants use every day to match their bank feeds.',
  roles: [
    { label: 'Intermediate engineer', value: 'Jan 2026 to now' },
    { label: 'Associate engineer', value: 'Feb 2024 to Dec 2025' },
    { label: 'Graduate engineer, 3 team rotations', value: 'Feb 2023 to Feb 2024' },
    { label: 'Intern', value: 'Nov 2021 to Feb 2022' },
  ] as Line[],
};

export const totals: Fact[] = [
  { value: '4', label: 'years at Xero, near enough' },
  { value: '32,000', label: 'products moved into the new point of sale in a single day' },
  { value: '20', label: 'shop staff working on that system every day' },
  { value: '400', label: 'wedding guests checked in by QR code' },
];

export const departments = [
  { name: '.NET stack', items: ['C#', '.NET', 'Web APIs', 'SQL', 'Object-oriented design', 'SOLID and design patterns', 'Unit and integration testing'] },
  { name: 'Front end', items: ['React', 'TypeScript', 'JavaScript', 'HTML and CSS', 'Tailwind CSS', 'UI and UX design'] },
  { name: 'Tools and cloud', items: ['Git', 'AWS', 'Terraform', 'PostgreSQL', 'Prisma', 'Firebase', 'dbt', 'Node.js', 'Python', 'Java'] },
  { name: 'With people', items: ['Daily code review', 'Pairing with senior engineers', 'Mentoring students', 'Explaining technical work to non-technical users'] },
];

export const about = {
  intro:
    'I work across the whole stack: C#, .NET and SQL on the back end, React and TypeScript on the front. I care most about software people rely on every day, like a shop’s daily sales.',
  body: [
    'I started at Xero as an intern, then came back as a graduate and rotated through three teams: Reporting, Security and Engineering Practice. In Security I handled incident response and the compliance documentation behind it. I settled on the Bank Reconciliation team, where I’m now an intermediate engineer. I work on services and APIs, ship front-end features, and review teammates’ code every day.',
    'Outside work I design and build products end to end. The biggest is a point-of-sale and inventory system that runs my family’s retail store in Indonesia. I also built the invitation and check-in app for a 400-guest wedding and ran it live on the day.',
    'Whatever I build, I want the people using it to understand it without needing me in the room. If a system makes someone’s day harder, it isn’t done yet.',
    'I’m happiest on a team that actually talks to each other.',
  ],
  education: [
    { label: 'BSc Computer Science, University of Canterbury', value: '2020 to 2022' },
    { label: 'Best Design Award, Wellington Create Camp (Summer of Tech)', value: '2021' },
  ] as Line[],
  volunteering: [
    'Junior Talent Ambassador at Xero',
    'Student mentor, Women in Tech Society',
    'Student support, Summer of Tech and University of Canterbury',
  ],
};

export const projects: Project[] = [
  {
    slug: 'retail-point-of-sale',
    title: 'Retail point of sale and inventory',
    short: 'Retail point of sale',
    value: '32,000 products',
    colour: 'mustard',
    stat: { value: '32,000', label: 'products moved over in one day' },
    tag: 'Still growing',
    summary:
      'A full replacement for a family retail store’s old till system in Indonesia. I designed and built it solo, 20 staff use it every day, and I’m still adding features.',
    description:
      'Case study: the point-of-sale and inventory system Dianame Altalim built solo for a 20-staff store in Indonesia, and is still expanding.',
    meta: [
      { label: 'Role', value: 'Solo build: design, front end, back end' },
      { label: 'Where', value: 'Family retail store, Indonesia' },
      { label: 'Status', value: 'In daily use, and I’m still building new features' },
      { label: 'Stack', value: 'React, TypeScript, Vite, Tailwind CSS, Electron, Node.js, Express, Prisma, PostgreSQL' },
    ],
    figure: {
      kind: 'facts',
      facts: [
        { value: '4', label: 'cashier lanes' },
        { value: '10', label: 'machines' },
        { value: '20', label: 'staff' },
        { value: '32,000', label: 'products' },
        { value: '1', label: 'day to move the whole store across' },
      ],
    },
    context:
      'The store was running on an old system that the business had outgrown. It sells a huge range of stock across four cashier lanes, and every sale, price and stock count has to come out right at the end of the day, because it is real money.',
    idea:
      'Build it to keep trading no matter what. The system runs on the store’s own network, so the tills keep working when the internet drops, and the owner can still check in remotely. The screens are designed for staff who had never used a computer before.',
    craft: [
      'Sales, stock and pricing reconcile with each other, so the end-of-day numbers match what was rung up.',
      'Local-network first: each till talks to a server inside the shop, not a server overseas.',
      'Remote access for the owner without making the shop depend on the internet.',
      'Screens and flows simple enough that the team could work it from day one without much training.',
      'A one-day migration: over 32,000 products moved across and the store trading on the new system.',
    ],
    demo: {
      src: '/videos/pos-demo.mp4', // e.g. '/videos/pos-demo.mp4' or 'https://www.youtube.com/watch?v=...'
      poster: '/images/pos-demo.jpg', // optional still image shown before play, e.g. '/images/pos-demo.jpg'
      caption: 'Two minutes through the system: a cashier ringing up a sale, staff order requests the owner reviews and sends to suppliers on WhatsApp, purchasing with stacked discounts worked out, and the daily cash check against the system.',
    },
    outcome:
      'The whole store moved over in a single day and has run on it every day since: 4 lanes, 10 machines and 20 staff. It isn’t finished. I’m still working on it and adding features as the shop asks for them.',
  },
  {
    slug: 'wedding-guest-app',
    title: 'Wedding invitation and guest management',
    short: 'Wedding guest app',
    value: '400 guests',
    colour: 'pink',
    stat: { value: '400', label: 'guests checked in by QR' },
    tag: 'Used live',
    summary:
      'A digital invitation plus an organiser dashboard for RSVPs, seating, souvenirs and gifts, used live on the day to check in 400 guests by QR code.',
    description:
      'Case study: the digital invitation, RSVP dashboard and QR check-in app Dianame Altalim designed, built and ran live for a 400-guest wedding.',
    meta: [
      { label: 'Role', value: 'Solo build: visual design, flow, code, live support' },
      { label: 'Guests', value: 'Around 400' },
      { label: 'Status', value: 'Used live on the day' },
      { label: 'Stack', value: 'React 18, TypeScript, Vite, React Router, Firebase (Firestore, Hosting), QR scanning' },
    ],
    figure: {
      kind: 'facts',
      facts: [
        { value: '400', label: 'guests' },
        { value: '5', label: 'things tracked per guest: invite, RSVP, seat, souvenir, gift' },
        { value: '1', label: 'dashboard for the organisers' },
        { value: '0', label: 'paper lists at the door' },
      ],
    },
    context:
      'Around 400 guests, each needing an invitation, an RSVP, a seat, a souvenir and somewhere to record their gift. A paper list at the door would have meant a queue.',
    idea:
      'Give every guest a QR code with their invitation, and let the ushers check people in by scanning it with their own phones. The organisers get one dashboard for everything else.',
    craft: [
      'A digital invitation guests open on their phones, with the RSVP built in.',
      'An organiser dashboard covering RSVPs, seating, souvenirs and gifts in one place.',
      'QR check-in that works from an usher’s phone, so the door keeps moving.',
      'Visual look and the whole flow designed by me, not taken from a template.',
    ],
    outcome:
      'It ran live at the wedding. Ushers scanned guests in from their phones with no paper list, and I supported it on the day.',
  },
  {
    slug: 'xero-bank-reconciliation',
    title: 'Bank reconciliation at Xero',
    short: 'Bank reconciliation, Xero',
    value: 'Since 2021',
    colour: 'green',
    stat: { value: '2021', label: 'at Xero since' },
    tag: 'Day job',
    summary:
      'C# services, APIs and front-end features behind bank reconciliation, used every day by small businesses and the accountants who look after them.',
    description:
      'Dianame Altalim’s work on Xero’s Bank Reconciliation team: C# and .NET services, Client Readiness, Reconcile Period and team health metrics.',
    meta: [
      { label: 'Team', value: 'Bank Reconciliation' },
      { label: 'Role', value: 'Intermediate engineer' },
      { label: 'Before that', value: 'Graduate rotations in Reporting, Security and Engineering Practice' },
      { label: 'At Xero since', value: 'Nov 2021 (intern), full time from Feb 2023' },
      { label: 'Stack', value: 'C#, .NET, TypeScript, SQL, AWS, Terraform' },
    ],
    figure: { kind: 'timeline', rows: [] }, // filled from xero.roles on the page
    context:
      'Bank reconciliation is where a business checks that its books match its bank. It is enterprise software where the numbers have to be right and the service has to stay up, for small businesses and for the accountants who look after hundreds of them.',
    idea:
      'Care for what already runs as much as what is new. Alongside feature work, I fix production issues, improve tests and tidy code so the next person has an easier time of it.',
    craft: [
      'Client Readiness (in progress): a single-page view that scores an organisation’s banking, bookkeeping and tax health as percentages, next to figures like unreconciled statement lines, so accounting partners see which clients need attention first.',
      'Reconcile Period: front-end and back-end work on letting a business close off a period once it is reconciled. Now live for customers in the United States.',
      'Operational health metrics: co-led the release with a senior engineer, giving the team an accurate read on how our systems perform.',
      'Earlier, on my graduate rotation in Security: incident response and the compliance documentation behind it.',
      'Daily code review, design discussions, and open feedback through the team’s 360 process.',
    ],
    outcome:
      'Four roles and four teams at Xero, from intern to intermediate engineer on Bank Reconciliation, with work that is live for Xero customers today.',
  },
];
