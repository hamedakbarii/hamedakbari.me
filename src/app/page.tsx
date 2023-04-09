import Icon from '@mdi/react';

import { Button } from '@/components/core/button';
import { Divider } from '@/components/core/divider';
import { Link, ButtonLink } from '@/components/core/link';
import { mdiAccountCircleOutline } from 'old-src/components/icons';

export default function Home() {
  return (
    <main className={'flex min-h-screen flex-col items-center p-24 gap-24'}>
      <Button title={'test'}>Button</Button>
      <Button title={'test'}>
        <Icon path={mdiAccountCircleOutline} size={1} />
      </Button>
      <Button title={'test'}>
        <Icon path={mdiAccountCircleOutline} size={1} />
        <span>Icon button</span>
      </Button>
      <Button title={'test'} outlined>
        Outlined Button
      </Button>
      <Button title={'test'} className={'rounded-full'}>
        Custom Button
      </Button>
      <Divider />
      <Link href={'#test'} title={'Test link'}>
        Link
      </Link>
      <ButtonLink href={'#test'} title={'Test link'}>
        Button link
      </ButtonLink>
      <ButtonLink href={'#test'} title={'Test link'} outlined>
        Outlined button link
      </ButtonLink>
    </main>
  );
}
