const { default: config } = require('nextein/config');

module.exports = config({
  exportPathMap: () => ({
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/colophon': { page: '/colophon' },
    '/projects': { page: '/projects' },
    '/style-guide': { page: '/style-guide' },
    '/work': { page: '/projects' },
    '/writing': { page: '/writing' },
  }),
});
