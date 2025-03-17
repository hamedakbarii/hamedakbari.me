import { cx } from 'classix';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { Mdx } from '@/components/views/mdx/mdx';
import { getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

import ContactButtons from './contact-buttons';
import Doodle from './doodle';

const about = getBlog('about');

export default function AboutPage() {
  if (!about) return notFound();
  return (
    <>
      <Section id={'about'}>
        <Heading shadow={'blue'} from={'blue'} to={'green'}>
          About
        </Heading>
        <Mdx code={about?.body?.code} />
      </Section>
      <Section id={'contact'}>
        <Heading $as={'h2'} shadow={'brand'} from={'brand'} to={'blue'}>
          Contact
        </Heading>
        <p>
          I&apos;m always open to chatting, connecting with new people, and
          exploring new opportunities.
        </p>
        <div
          className={cx(
            'flex flex-col-reverse gap-48',
            'tablet-sm:flex-row tablet-sm:items-start',
          )}
        >
          <Doodle />
          <div className={cx('flex flex-col gap-12')}>
            <p>
              If you have a project or idea in mind where I can contribute,
              don&apos;t hesitate to contact me!
              <br />
            </p>
            <p>There are a few ways you can get in touch:</p>
            <ContactButtons />
          </div>
        </div>
      </Section>
    </>
  );
}

export const metadata = getStaticMetadata({
  title: 'About – Hamed Akbari',
  description: 'Learn more about me (Hamed Akbari), my career and more',
  exactUrl: 'https://hiradary.me/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
