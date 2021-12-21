import styled from '@emotion/styled';
import { CSSProperties, useMemo } from 'react';

import { Reactions } from './reactions';

import { ViewsCounter } from '~/components/atoms/complex';
import { Heading, Image, Link, Divider } from '~/components/atoms/simple';
import useSafePalette from '~/hooks/useSafePalette';
import { ReactionsProvider } from '~/providers/reactions';
import { useTheme } from '~/providers/theme';
import {
  Component,
  ComponentProps,
  mediaQueries,
  Post,
  HeroMeta,
  ProjectProps as Project,
  CodingChallenge,
} from '~/types';
import getColorFromPalette from '~/utils/colors/get-color-from-palette';
import hexToRGB from '~/utils/colors/hex-to-rgb';
import formatDate from '~/utils/format/format-date';

const MdxContentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.4rem 0 1.6rem;
  width: 100%;

  ${mediaQueries.tablet.sm} {
    padding: 1.2rem 0 2rem;
  }

  ${mediaQueries.tablet.lg} {
    padding: 1.2rem 0 2.4rem;
  }
`;

const Hero = styled(Image)`
  border-radius: 6px;
  margin: 2.4rem 0;
  box-shadow: 0 4px 6px -1px rgba(var(--shadow-color), 0.175),
    0 2px 4px -1px rgba(var(--shadow-color), 0.075);

  & img {
    object-fit: cover;
    width: 100%;
    max-height: 180px !important;

    ${mediaQueries.mobile.md} {
      max-height: 211px !important;
    }

    ${mediaQueries.mobile.lg} {
      max-height: 239px !important;
    }

    ${mediaQueries.tablet.sm} {
      max-height: 298px !important;
    }

    ${mediaQueries.tablet.lg} {
      max-height: 384px !important;
    }
  }
`;

const BackLink = styled(Link)`
  margin-bottom: 0.4rem;
  margin-left: 0.4rem;
  ${mediaQueries.tablet.lg} {
    margin-left: 0.2rem;
  }
  ${mediaQueries.tablet.xl} {
    margin-left: 0;
  }
`;

const ContentTitle = styled(Heading)`
  margin-top: 0.4rem;
  ${mediaQueries.tablet.sm} {
    margin-top: 0.8rem;
  }
  ${mediaQueries.tablet.lg} {
    margin-top: 1rem;
  }
`;

const ContentIntro = styled.p`
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
`;

const DiscussEdit = styled.p`
  font-size: var(--font-2xs);
  color: var(--text-tertiary);
  order: 2;
  ${mediaQueries.tablet.lg} {
    order: 1;
  }
`;

const MdxReactions = styled(Reactions)`
  order: 1;
  ${mediaQueries.tablet.lg} {
    order: 2;
  }
`;

const MdxFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 2.4rem 0 0.8rem;
  box-sizing: border-box;

  ${mediaQueries.tablet.lg} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0 0;
  }
`;

type ContentTypes = Post | Project | CodingChallenge;

const slugPath = (content: ContentTypes): string => {
  if ('icon' in content) return `projects/${content.slug}`;
  if ('hero' in content) return `blog/${content.slug}`;
  return `coding/${content.slug}`;
};

const editUrl = (content: ContentTypes) =>
  `https://github.com/jahirfiquitiva/jahir.dev/edit/main/data/${slugPath(
    content,
  )}.mdx`;

const shareUrl = (content: ContentTypes) =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `https://jahir.dev/${slugPath(content)} by @jahirfiquitiva`,
  )}`;

interface ContentFields {
  title: string;
  hero?: string;
  date?: string;
  readingTime?: string;
  slug?: string;
  devToId?: number;
  heroMeta?: HeroMeta;
}

const getContentFields = (content: ContentTypes): ContentFields => {
  const fields: ContentFields = {
    title: 'title' in content ? content.title : content.name,
  };
  if ('hero' in content) fields.hero = content.hero;
  if ('date' in content) fields.date = content.date;
  if ('readingTime' in content) fields.readingTime = content.readingTime?.text;
  if ('slug' in content) fields.slug = content.slug;
  if ('devToId' in content) fields.devToId = content.devToId;
  if ('heroMeta' in content) fields.heroMeta = content.heroMeta;
  return fields;
};

interface CommonContent {
  backText?: string;
  backHref?: string;
  content: ContentTypes;
  contentType: 'blog' | 'projects';
}

type MdxContentProps = ComponentProps & CommonContent;

export const MdxContent: Component<MdxContentProps> = (props) => {
  const { backText, backHref, content, contentType, children } = props;
  const { title, hero, date, readingTime, slug, devToId, heroMeta } =
    getContentFields(content);

  const { isDark, themeReady } = useTheme();
  const { data: heroPalette } = useSafePalette(hero);

  const titleStyles = useMemo<CSSProperties>(() => {
    if (!themeReady || !heroPalette) return {};
    const color = hexToRGB(
      getColorFromPalette(heroPalette, isDark) || '#fff',
      0.4,
    );
    return {
      textShadow: `var(--text-shadow-size) var(--text-shadow-size) 0 ${color}`,
    };
  }, [themeReady, isDark, heroPalette]);

  const extraHeroProps = useMemo(() => {
    if (heroMeta && heroMeta.blur64) {
      return { placeholder: 'blur', blurDataURL: heroMeta.blur64 };
    }
    return {};
  }, [heroMeta]);

  return (
    <MdxContentSection>
      {backText && backHref && (
        <BackLink
          title={`Link to go ${backText.toLowerCase()}`}
          href={backHref}
        >
          ← {backText}
        </BackLink>
      )}

      <article>
        <ContentTitle style={titleStyles}>{title}</ContentTitle>

        <ContentIntro>
          {formatDate(date)}
          {(readingTime?.length || 0) > 0 && (
            <>
              {' • '}
              {readingTime}
            </>
          )}
          <ViewsCounter slug={`${contentType}--${slug}`} devToId={devToId} />
        </ContentIntro>

        <ReactionsProvider slug={`${contentType}--${slug}`}>
          <MdxReactions />

          {hero && (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Hero src={hero || ''} alt={title} priority {...extraHeroProps} />
          )}
          {children}
          <Divider thin />

          <MdxFooter>
            <DiscussEdit>
              <Link
                href={shareUrl(content)}
                title={'Link to share blog post on Twitter'}
              >
                Share on Twitter
              </Link>
              {' • '}
              <Link
                href={editUrl(content)}
                title={'Link to edit content on GitHub'}
              >
                Edit on GitHub
              </Link>
            </DiscussEdit>
            <MdxReactions />
          </MdxFooter>
        </ReactionsProvider>
      </article>
    </MdxContentSection>
  );
};