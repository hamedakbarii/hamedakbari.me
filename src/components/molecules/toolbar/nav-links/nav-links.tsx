import { cx } from 'classix';
import type { Route } from 'next';

import type { GradientClass } from '@/types/gradient';

import { ToolbarLink, PageLinkSpan } from './link.styles';
import { PagesLinksContainer, LinkItem } from './links-container.styles';

interface ToolbarLinkItem {
  title: string;
  href: string;
  className?: GradientClass;
  openInNewTab?: boolean;
}

const toolbarLinksList: Array<ToolbarLinkItem> = [
  {
    title: 'About',
    href: '/about',
    className: 'from-gradient-blue to-gradient-green',
  },

  {
    title: 'Projects',
    href: '/projects',
    className: 'from-gradient-red to-gradient-purple',
  },
];

export const ToolbarNavLinks = (props: { pathname?: string }) => {
  const { pathname } = props;
  return (
    <PagesLinksContainer>
      {toolbarLinksList.map((link, index) => {
        return (
          <LinkItem key={`page-link-${index}`}>
            <ToolbarLink
              title={`${link.title} page`}
              href={link.href as Route}
              openInNewTab={link.openInNewTab}
              aria-current={
                pathname?.startsWith(link.href) ? 'page' : undefined
              }
              className={'group/link'}
            >
              <PageLinkSpan
                className={cx(
                  (link.className || '')
                    .split(' ')
                    .map(
                      (it) =>
                        `group-hocus/link:${it} [[aria-current="page"]_&]:${it}`,
                    )
                    .join(' ') as string,
                )}
              >
                {link.title}
              </PageLinkSpan>
            </ToolbarLink>
          </LinkItem>
        );
      })}
    </PagesLinksContainer>
  );
};
