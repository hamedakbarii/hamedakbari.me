const buildRedirect = (source, destination, permanent = false) => {
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
  buildRedirect('/static/images/me/me.jpg', '/static/images/hamed/hamed.jpg'),
  /* Other redirections */
  buildRedirect('/contact', '/about#contact'),
  buildRedirect('/resume', '/share/Hamed-Resume.pdf'),
];
