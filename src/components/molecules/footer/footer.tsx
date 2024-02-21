import { LogoAnimoji } from '@/components/core/logo-animoji';
import { SocialLinks } from '@/components/molecules/social-links';

import {
  StyledFooter,
  InnerFooter,
  BrandLink,
  BrandLinkSpan,
  LinksContainer,
} from './footer.styles';
import { FooterLinksList, type FooterLinkProps } from './links-list';

const primaryLinks: Array<FooterLinkProps> = [
  {
    title: 'About',
    href: '/about',
    className: 'from-gradient-blue to-gradient-green',
    underlineColor: 'blue',
  },
  {
    title: 'Newsletter',
    href: 'https://hiradary.beehiiv.com',
    className: 'from-gradient-red to-gradient-purple',
    underlineColor: 'red',
    openInNewTab: true,
  },
];

const secondaryLinks: Array<FooterLinkProps> = [
  {
    title: 'Donate',
    href: 'https://buymeacoffee.com/hiradary',
    className: 'from-gradient-brand to-gradient-blue',
    openInNewTab: true,
    underlineColor: 'brand',
  },
];

const metaLinks: Array<FooterLinkProps> = [
  {
    title: 'Source',
    href: 'https://github.com/hiradary/hiradary.me',
    className: 'from-gradient-brand to-gradient-blue',
    underlineColor: 'brand',
    a11yTitle: 'View source code on GitHub',
    openInNewTab: true,
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <LinksContainer>
        <FooterLinksList title={'Primary pages links'} links={primaryLinks} />
        <FooterLinksList
          title={'Secondary pages links'}
          links={secondaryLinks}
        />
        <FooterLinksList meta title={'Meta pages links'} links={metaLinks} />
      </LinksContainer>
      <InnerFooter>
        <BrandLink
          href={'/'}
          title={'Home page'}
          className={'hocus:decoration-gradient-brand group/link group/animoji'}
        >
          🎧
          <BrandLinkSpan>Hirad Arshadi</BrandLinkSpan>
        </BrandLink>
        <SocialLinks withBackToTop />
      </InnerFooter>
    </StyledFooter>
  );
};
