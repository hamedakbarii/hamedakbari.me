// import { Logo } from '../icons';

const pathEmojiMap = {
  '404': '👻',
  about: '😀',
  donate: '🎁',
  projects: '💼',
  uses: '💻',
  blog: '📄',
  error: '🚨',
};
export type PathName = keyof typeof pathEmojiMap | null;

const pathTitleMap = {
  '404': 'Page not found',
  about: 'About',
  donate: 'Donate',
  projects: 'Projects',
  uses: 'Uses',
  blog: 'Blog',
  error: 'Error',
};

const titleFontSize = 72;
export const LogoOrEmoji = (props: { path?: PathName }) => {
  const emoji = props.path ? pathEmojiMap[props.path] : null;
  if (!emoji) {
    return null;
    // <Logo
    //   style={{
    //     width: titleFontSize * 2,
    //     height: titleFontSize * 2,
    //   }}
    // />
  }
  return <span style={{ fontSize: titleFontSize }}>{emoji}</span>;
};

export const PageTitle = (props: {
  path?: PathName;
  title?: string | null;
}) => {
  const { path, title } = props;
  const pathTitle = path ? pathTitleMap[path] : null;
  return (
    <p
      style={{
        alignSelf: 'flex-start',
        fontSize: titleFontSize,
        fontWeight: 700,
        maxWidth: 900,
        color: path ? 'white' : 'rgba(0, 0, 0, 0)',
        ...(path
          ? {}
          : {
              backgroundImage: 'linear-gradient(to right, #00b85c, #66d89f)',
              backgroundClip: 'text',
              filter: 'saturate(150%)',
            }),
      }}
    >
      {title || pathTitle || 'Hamed Akbari'}
    </p>
  );
};
