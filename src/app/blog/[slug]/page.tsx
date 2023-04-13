import Icon from '@mdi/react';
import { cx } from 'classix';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Divider } from '@/components/core/divider';
import { ButtonLink } from '@/components/core/link';
import { Section } from '@/components/core/section';
import { mdiPencilOutline } from '@/components/icons';
import { Mdx } from '@/components/views/mdx/mdx';
import { Reactions } from '@/components/views/mdx/ui/reactions';
import { ShareButton } from '@/components/views/mdx/ui/share-button';
import { ReactionsProvider } from '@/providers/reactions';
import { RequestData } from '@/types/request';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';
import { allBlogs as generatedBlogs } from 'contentlayer/generated';

import Header from './header';
import Hero from './hero';
import Stats from './stats';

const allBlogs = generatedBlogs.filter((it) => it.slug !== 'about');

type BlogPageData = RequestData<{ slug?: string }>;

export default function Blog(data: BlogPageData) {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return notFound();
  if (post.link) return redirect(post.link);

  return (
    <Section className={'gap-16'}>
      <Header title={post.title} color={post.color} />
      <Stats
        slug={post.slug}
        date={post.date}
        readingTime={post.readingTime}
        devToId={post.devToId}
        inProgress={post.inProgress}
      />
      <ReactionsProvider slug={post.slug} inProgress={post.inProgress}>
        <Reactions inProgress={post.inProgress} />
        <Hero
          title={post.title}
          hero={post.hero}
          meta={post.heroMeta}
          source={post.heroSource}
        />
        <Mdx code={post?.body?.code} />
        <Divider
          className={cx(
            '-mx-14 w-[calc(100%+1.75rem)]',
            'tablet-md:mx-0 tablet-md:w-full',
          )}
        />
        <div
          className={cx(
            'flex flex-col-reverse',
            'gap-24',
            'mt-0 mb-16',
            'tablet-md:mt-2 tablet-md:mb-8',
            'tablet-md:flex-row tablet-md:items-center',
            'tablet-md:justify-between',
          )}
        >
          <div className={'flex gap-12'}>
            <ShareButton title={post.title} slug={post.slug} />
            <ButtonLink
              outlined
              title={'Edit blog post content on GitHub'}
              href={`https://github.com/jahirfiquitiva/jahir.dev/edit/main/content/${post.slug}.mdx`}
            >
              <Icon path={mdiPencilOutline} size={0.9} />
              <span>Edit on GitHub</span>
            </ButtonLink>
          </div>
          <Reactions inProgress={post.inProgress} />
        </div>
      </ReactionsProvider>
    </Section>
  );
}

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  data: BlogPageData,
): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === data.params.slug);
  if (!post) return undefined;

  const { title, date, excerpt, hero, slug } = post;

  const ogImage = buildOgImageUrl('blog', title, hero);

  const metadata = getStaticMetadata({
    title,
    description: excerpt || 'Blog post by Jahir Fiquitiva',
    image: ogImage,
    exactUrl: `https://jahir.dev/blog/${slug}`,
  });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: 'article', publishedTime: date },
  };
}
