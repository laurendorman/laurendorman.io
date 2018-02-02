const { default: config } = require('nextein/config');

module.exports = config({
  exportPathMap: () => ({
    '/projects': { page: '/projects' },
    '/writing': { page: '/writing' },
  }),
});
