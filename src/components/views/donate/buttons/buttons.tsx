import Icon from '@mdi/react';

import { Heading } from '@/components/core/heading';
import { ButtonLink } from '@/components/core/link';
import {
  // gift,
  mdiCreditCardChipOutline,
  // mdiHeartOutline,
  mdiPizza,
} from '@/components/icons';

import { PayPalLink } from './buttons.styles';

export const DonateButtons = () => {
  return (
    <div className={'flex flex-col gap-12 mt-16 mb-24'}>
      <Heading $as={'h2'} className={'text-lg'}>
        Donate via
      </Heading>
      <div className={'flex flex-row items-center gap-16 flex-wrap'}>
        <ButtonLink
          href={'https://buymeacoffee.com/hiradary'}
          title={'Buy Hamed a Pizza'}
        >
          <Icon path={mdiPizza} size={0.9} className={'-rotate-12'} />
          <span>Buy me a Pizza</span>
        </ButtonLink>
        <PayPalLink
          href={'https://paypal.me/hiradary'}
          title={'Donate to Hamed via PayPal'}
        >
          <Icon path={mdiCreditCardChipOutline} size={0.9} />
          <span>PayPal</span>
        </PayPalLink>
      </div>
    </div>
  );
};
