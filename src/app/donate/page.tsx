import { notFound } from 'next/navigation';

import { Heading } from '@/components/core/heading';
import { Section } from '@/components/core/section';
import { DonateButtons } from '@/components/views/donate/buttons';
import { Mdx } from '@/components/views/mdx';
import { getBlog } from '@/utils/blogs';
import { getStaticMetadata } from '@/utils/metadata';
import { buildOgImageUrl } from '@/utils/og';

const DonatePageContent = () => {
  const donate = getBlog('donate');
  if (!donate) return notFound();
  return <Mdx code={donate?.body?.code} className={'gap-8 tablet-sm:-mt-16'} />;
};

export default async function DonatePage() {
  return (
    <Section id={'donate'}>
      <Heading shadow={'brand'} from={'brand'} to={'blue'}>
        Donate
      </Heading>
      <DonatePageContent />
      <DonateButtons />
    </Section>
  );
}

export const metadata = getStaticMetadata({
  title: 'Donate – Hirad Arshadi',
  description:
    // eslint-disable-next-line max-len
    'Support Hirad Arshadi. Donate or sponsor him as a recognition for his work on different projects.',
  exactUrl: 'https://hiradary.me/donate',
  keywords: [
    'donate',
    'support',
    'sponsor',
    'open-source',
    'supporter',
    'sponsorship',
  ],
  image: buildOgImageUrl('donate'),
});
