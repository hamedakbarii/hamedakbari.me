import '@/styles/globals.scss';

import { Analytics } from '@vercel/analytics/react';
import { Inter, Manrope } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { BackToTop } from '@/components/molecules/back-to-top';
import { Footer } from '@/components/molecules/footer';
import { Main } from '@/components/molecules/main';
import { Toolbar } from '@/components/molecules/toolbar';
import { Providers } from '@/providers';
import { getStaticMetadata } from '@/utils/metadata';

import { Meta } from './meta';

const inter = Inter({
  subsets: ['latin'],
  preload: true,
  variable: '--font-inter',
  display: 'fallback',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'fallback',
});

export const metadata = {
  ...getStaticMetadata({
    title: 'Hamed Akbari – Front-End Developer',
    description:
      // eslint-disable-next-line max-len
      "I'm a Passionate and creative front-end developer based in tehran, Iran 🇮🇷. Visit my website to learn more about me and my projects",
    keywords: [
      'hamed akbari',
      'hamed',
      'akbari',
      'hamedakbari',
      'open-source',
      'full-stack',
      'software engineer',
      'software engineering',
      'iran',
      'bio',
      'developer',
      'portfolio',
      'development',
      'web',
    ],
  }),
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang={'en'}
      className={`${inter.variable} ${manrope.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Meta />
      </head>

      <body className={'tablet-sm:overflow-y-auto'}>
        <Providers>
          <Toolbar />
          <Main>{props.children}</Main>
          <Footer />
          <BackToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
