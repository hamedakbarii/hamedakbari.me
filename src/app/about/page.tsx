import { cx } from 'classix';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Link } from '@/components/core/link';
import { Section } from '@/components/core/section';
// import { Mdx } from '@/components/views/mdx/mdx';
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
        {/* <Mdx code={about?.body?.code} /> */}
        👋 Hey there! I'm Hamed Akbari experienced Front-End Developer with
        almost three years of hands-on expertise based in Iran. <br /> <br /> I
        specialize in translating design concepts into user-friendly interfaces.
        Collaborative and adaptable, I thrive in fast-paced environments,
        consistently delivering high-quality projects that exceed user
        expectations. Eager to contribute my skills to innovative web
        development initiatives.
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
              But please{' '}
              <Link
                title={"Don't just say hello page"}
                href={'https://nohello.net/'}
              >
                don&apos;t just say hello
              </Link>
              .
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
  exactUrl: 'https://hamedakbari.me/about',
  keywords: ['bio', 'biography', 'information', 'about', 'career'],
  image: buildOgImageUrl('about'),
});
