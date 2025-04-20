import type { Metadata } from 'next';

import { buildOgImageUrl } from './og';

type MetaImageStyle = 'summary_large_image' | 'summary';

const defaultLogoImage =
  'https://hamedakbri.ir/static/images/brand/logo-full-me.png';

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
    authors: [{ name: 'Hamed Akbari', url: 'https://hamedakbri.ir' }],
    openGraph: {
      title,
      description,
      url: exactUrl || 'https://hamedakbri.ir',
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
    metadataBase: new URL('https://hamedakbri.ir'),
  };
};

export const colorMetaTags = [
  'theme-color',
  'msapplication-TileColor',
  'msapplication-navbutton-color',
  'apple-mobile-web-app-status-bar-style',
];
