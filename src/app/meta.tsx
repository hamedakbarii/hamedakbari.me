import { colorMetaTags } from '@/utils/metadata';

export const Meta = () => {
  return (
    <>
      <meta charSet={'UTF-8'} />
      <meta
        name={'viewport'}
        content={'width=device-width, initial-scale=1.0'}
      />
      <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
      <link
        rel={'apple-touch-icon'}
        sizes={'180x180'}
        href={'/static/images/brand/apple-touch-icon.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'32x32'}
        href={'/static/images/brand/favicon-32x32.png'}
      />
      <link
        rel={'icon'}
        type={'image/png'}
        sizes={'16x16'}
        href={'/static/images/brand/favicon-16x16.png'}
      />
      <link
        rel={'apple-touch-icon-precomposed'}
        href={'/static/images/brand/favicon-32x32.png'}
      />
      <link
        rel={'icon'}
        sizes={'32x32'}
        href={'/static/images/brand/favicon-32x32.png'}
      />

      {colorMetaTags.map((tag) => (
        <meta key={tag} name={tag} content={'transparent'} />
      ))}
    </>
  );
};
