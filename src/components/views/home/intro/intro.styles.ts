import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Section } from '@/components/core/section';

export const IntroSection = tw(Section)`
  grid
  grid-cols-1
  gap-y-16
  tablet-sm:grid-cols-[minmax(0,1fr)_auto]
  tablet-sm:grid-rows-1
  tablet-sm:gap-x-28
`;

export const TextsContainer = tw.div`
  flex
  flex-col
  gap-8
  [grid-row:2]
  tablet-sm:[grid-row:1]
`;

export const TitlesContainer = tw.div`
  flex flex-col-reverse gap-8
`;

export const IntroParagraph = tw.p`
  my-12
  max-w-[325px]
  mobile-lg:max-w-[410px]
`;

export const PhotoContainer = tw.div`
  rounded-half
  w-[200px]
  h-[200px]
`;

export const Photo = tw(Img)`
  rounded-half
  w-full
  h-full
  object-cover
`;
