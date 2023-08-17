const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

module.exports = [
  /* Old static assets paths to new ones */
  buildRedirect('/assets/:path*', '/static/:path*'),
  /* Needed for android dashboards */
  buildRedirect('/static/images/me/me.jpg', '/static/images/hirad/hirad.jpg'),
  /* Other redirections */
  buildRedirect('/links', 'https://links.hiradary.me'),
  buildRedirect('/contact', '/about#contact'),
  buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
];
