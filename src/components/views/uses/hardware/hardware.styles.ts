/* eslint-disable max-len */
import tw from 'tailwind-styled-components';

import { Img } from '@/components/core/img';
import { Link } from '@/components/core/link';

export const Grid = tw.div`
  grid
  gap-12
  grid-cols-1
  tablet-sm:gap-16
  tablet-sm:grid-cols-3
  tablet-md:grid-cols-4
`;

export const HardwareItem = tw(Link)`
  relative
  flex
  flex-row
  items-center
  border
  border-divider
  rounded-10
  gap-6
  pl-2
  pr-6
  py-6
  min-h-[6rem]
  group/hardware
  text-secondary-txt
  bg-inverse/[0.006]
  dark:bg-inverse/[0.008]
  overflow-hidden
  transition-all
  no-underline
  tablet-sm:flex-col
  tablet-sm:items-start
  tablet-sm:gap-0
  tablet-sm:py-0
  tablet-sm:pr-0
  tablet-sm:aspect-square
  hocus:no-underline
  hocus:transform
  hocus:scale-[1.025]
  hocus:border-accent-dark/[0.56]
`;

export const HardwareImage = tw(Img)`
  relative
  top-0
  left-0
  right-0
  bottom-0
  z-0
  p-8
  filter
  drop-shadow-[0_0_4px_var(--color-img-drop-shadow)]
  transition-all
  max-w-[4.5rem]
  mobile-md:max-w-[5rem]
  mobile-lg:max-w-[5.5rem]
  tablet-sm:max-w-full
  tablet-sm:absolute
  tablet-sm:m-auto
  tablet-sm:p-12
  tablet-sm:[mask-image:linear-gradient(to_bottom,rgba(0_0_0/1)_0%,rgba(0_0_0/1)_20%,rgba(0_0_0/.5)_55%,rgba(0_0_0/0)_80%,rgba(0_0_0/0)_100%)]
  group-hocus/hardware:tablet-sm:opacity-25
`;

export const TextsContainer = tw.div`
  flex flex-col w-full
  py-2
  gap-2
  z-[1]
  [text-shadow:0_0_4px_rgba(235_240_251/0.72)]
  dark:[text-shadow:0_0_4px_rgba(9_17_34/0.72)]
  tablet-sm:py-4
  tablet-sm:px-8
  tablet-sm:h-full
  tablet-sm:flex-1
  tablet-sm:justify-end
  group-hocus/hardware:tablet-sm:backdrop-blur-[1px]
  group-hocus/hardware:tablet-sm:backdrop-saturate-0
  group-hocus/hardware:[text-shadow:0_0_4px_rgba(235_240_251/1)]
  group-hocus/hardware:dark:[text-shadow:0_0_4px_rgba(9_17_34/1)]
`;

export const HardwareName = tw.p`
  font-semibold
  text-2xs
  font-manrope
  m-0
  transition-all
  group-hocus/hardware:underline
`;

export const HardwareDescription = tw.span`
  transition-all
  text-secondary-txt
  text-3xs
  transform
  tablet-sm:max-h-0
  tablet-sm:scale-y-0
  tablet-sm:opacity-0
  tablet-sm:group-hocus/hardware:max-h-[unset]
  tablet-sm:group-hocus/hardware:scale-y-100
  tablet-sm:group-hocus/hardware:opacity-100
`;
