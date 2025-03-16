import type { PathName } from './logo-title';

const fontSize = 40;
export const Name = (props: { path?: PathName }) => {
  if (!props.path) return null;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize,
      }}
    >
      🎧
      <p
        style={{
          alignSelf: 'flex-start',
          fontWeight: 700,
          color: 'rgba(0, 0, 0, 0)',
          backgroundImage: 'linear-gradient(to right, #88a4e6, #81c1e9)',
          backgroundClip: 'text',
          filter: 'saturate(150%)',
        }}
      >
        Hamed Akbari
      </p>
    </div>
  );
};
