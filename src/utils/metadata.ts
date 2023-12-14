import type { Metadata } from 'next';

import { buildOgImageUrl } from './og';

type MetaImageStyle = 'summary_large_image' | 'summary';

const defaultLogoImage =
  'https://hamedakbari.vercel.app/static/images/brand/logo-full-me.png';

export const getStaticMetadata = (data: {
  title: string;
  description: string;
  keywords?: string | Array<string> | null;
  exactUrl?: string;
  image?: string;
  metaImageStyle?: MetaImageStyle;
}): Metadata => {
  const { title, description, keywords, exactUrl, image, metaImageStyle } =
    data;

  const actualDefaultImage =
    metaImageStyle === 'summary' ? defaultLogoImage : buildOgImageUrl();
  const actualImage = image || actualDefaultImage;
  const actualMetaImageStyle =
    actualImage === defaultLogoImage
      ? 'summary'
      : metaImageStyle || 'summary_large_image';

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Hamed Akbari', url: 'https://hamedakbari.vercel.app' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://hamedakbari.vercel.app',
      siteName: title,
      images: [{ url: actualImage }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title,
      description,
      images: [{ url: actualImage }],
      card: actualMetaImageStyle,
      creator: '@hamedakbarii',
      site: '@hamedakbarii',
    },
    metadataBase: new URL('https://hamedakbari.vercel.app'),
  };
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
