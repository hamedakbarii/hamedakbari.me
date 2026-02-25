import Icon from '@mdi/react';
import { cx } from 'classix';

import { Heading } from '@/components/core/heading';
import { ButtonLink, Link } from '@/components/core/link';
import { mdiAccountCircleOutline } from '@/components/icons';
import { SocialLinks } from '@/components/molecules/social-links';

import {
  IntroSection,
  TextsContainer,
  TitlesContainer,
  IntroParagraph,
  PhotoContainer,
  Photo,
} from './intro.styles';
import { WavingHello } from './waving-hello';

export const Intro = () => {
  return (
    <IntroSection id={'intro'}>
      <TextsContainer>
        <TitlesContainer>
          <Heading
            shadow={'blue'}
            // look like h2
            className={'text-2xl'}
          >
            This is&nbsp;
            <Heading
              $as={'span'}
              shadow={'blue'}
              from={'brand'}
              to={'blue'}
              className={'[&>span]:w-[unset]'}
            >
              Hamed Akbari
            </Heading>
          </Heading>

          <WavingHello />
        </TitlesContainer>

        <IntroParagraph>
          Passionate and creative front-end developer based in{' '}
          <Link
            title={'Vancouver on Google Maps'}
            href={'https://goo.gl/maps/jBVpJRmkjWSK4qwq7'}
          >
            tehran, Iran 🇮🇷
          </Link>
        </IntroParagraph>

        <div className={'flex items-center gap-16 flex-wrap'}>
          <ButtonLink title={'About page'} href={'/about'}>
            <Icon path={mdiAccountCircleOutline} size={1} />
            More about me
          </ButtonLink>

          <div
            className={cx(
              'flex items-center transition-colors',
              'border border-divider rounded-6',
              'py-4 pl-12 pr-8 min-h-[2.625rem]',
              'hover:border-accent-dark',
            )}
          >
            <SocialLinks />
          </div>
        </div>
      </TextsContainer>

      <PhotoContainer>
        <Photo
          src={'/static/images/hamed/hamed-4.jpg'}
          alt={"Hamed's Photo"}
          size={168}
          priority
        />
      </PhotoContainer>
    </IntroSection>
  );
};
