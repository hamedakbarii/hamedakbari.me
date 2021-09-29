export interface BaseInspirationSite {
  title: string;
  link: string;
  description?: string;
}

export interface InspirationSite extends BaseInspirationSite {
  favicon?: string;
}

export const inspirationSites: Array<InspirationSite> = [
  {
    title: 'Lee Robinson',
    link: 'https://leerob.io',
  },
  {
    title: 'Brian Lovin',
    link: 'https://brianlovin.com',
  },
  {
    title: 'Julie Chabin',
    link: 'https://www.julie.design/',
  },
  {
    title: 'James Fenn',
    link: 'https://jfenn.me',
  },
  {
    title: 'Corbin Crutchley',
    link: 'https://crutchcorn.dev',
  },
  {
    title: 'Tom Wellington',
    link: 'https://tommyemo.net',
  },
  {
    title: 'Vukašin Anđelković',
    link: 'https://vukashin.xyz/',
  },
  {
    title: 'Eduardo Pratti',
    link: 'https://pratti.design/',
  },
  {
    title: 'Justin Kruit',
    link: 'https://justinkruit.com',
  },
  {
    title: 'Cassidoo Williams',
    link: 'https://cassidoo.co/',
  },
  {
    title: 'Melody',
    link: 'https://melody.dev/',
  },
  {
    title: 'Jared Palmer',
    link: 'https://jaredpalmer.com/',
  },
  {
    title: 'Jake Jarvis',
    link: 'https://jarv.is/',
  },
  {
    title: 'Steph Parrot',
    link: 'https://www.stephparrott.com/',
  },
  {
    title: 'Julia Johnson',
    link: 'https://juliacodes.com/',
  },
];