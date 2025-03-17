import Icon from '@mdi/react';
import { cx } from 'classix';

import { ButtonLink } from '@/components/core/link';
import { mdiEmail, telegram, twitterOutline } from '@/components/icons';

const emailButtonClasses = cx(
  'hocus:bg-[rgba(211_60_48/0.08)]',
  'hocus:border-[rgba(211_60_48/1)]',
  'dark:hocus:bg-[rgba(236_86_73/0.16)]',
  'dark:hocus:border-[rgba(236_86_73/1)]',
);

const twitterButtonClasses = cx(
  'hocus:bg-[rgba(26_145_218/0.08)]',
  'hocus:border-[rgba(26_145_218/1)]',
  'dark:hocus:bg-[rgba(29_161_242/0.16)]',
  'dark:hocus:border-[rgba(29_161_242/1)]',
);

const telegramButtonClasses = cx(
  'hocus:bg-[rgba(0_122_184/0.08)]',
  'hocus:border-[rgba(0_122_184/1)]',
  'dark:hocus:bg-[rgba(51_160_214/0.16)]',
  'dark:hocus:border-[rgba(51_160_214/1)]',
);

export default function ContactButtons() {
  return (
    <div className={'flex flex-wrap items-center gap-16'}>
      <ButtonLink
        title={'Compose an email to Hamed'}
        href={'mailto:hamedakbariwork@gmail.com?subject=Hi%Hamed!'}
        outlined
        className={emailButtonClasses}
      >
        <Icon path={mdiEmail} size={0.95} />
        <span>Email</span>
      </ButtonLink>
      <ButtonLink
        title={'Compose a Twitter direct message for Hamed'}
        href={'https://twitter.com/hamedakbrii'}
        openInNewTab
        outlined
        className={twitterButtonClasses}
      >
        <Icon path={twitterOutline} size={0.9} />
        <span>Twitter</span>
      </ButtonLink>
    </div>
  );
}
