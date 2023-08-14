const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  /* Blog posts redirections */
  buildRedirect(
    '/blog/md-iconography-guidelines',
    'https://stories.uplabs.com/what-google-missed-in-their-guidelines-for-material-design-iconography-daf9f88000ec',
  ),
  buildRedirect('/blog/post-of-fame', '/donate#thanks'),
  buildRedirect('/inspiration', '/blog/people-websites-that-inspire'),
  /* Old static assets paths to new ones */
  buildRedirect('/assets/:path*', '/static/:path*'),
  /* Needed for android dashboards */
  buildRedirect('/static/images/me/me.jpg', '/static/images/hirad/hirad.jpg'),
  /* Other redirections */
  buildRedirect('/links', 'https://links.hiradary.me'),
  buildRedirect('/contact', '/about#contact'),
  /* Dashboard aliases */
  buildRedirect('/music', '/dashboard'),
  buildRedirect('/now', '/dashboard'),
  buildRedirect('/stats', '/dashboard'),
  /* Donate aliases */
  buildRedirect('/support', '/donate'),
  buildRedirect('/sponsor', '/donate'),
  buildRedirect('/thanks', '/donate#thanks'),
  buildRedirect('/sponsors', '/donate#thanks'),
  buildRedirect('/supporters', '/donate#thanks'),
  /* Uses blog post aliases */
  buildRedirect('/blog/uses', '/uses'),
  buildRedirect('/gear', '/uses'),
  buildRedirect('/colophon', '/uses#colophon'),
  buildRedirect('/releases/:path*', '/gh-releases/:path*'),
  buildRedirect('/feed', '/feed.xml'),
  buildRedirect('/sitemap', '/sitemap.xml'),
  buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
];
