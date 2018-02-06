const { default: config } = require('nextein/config');

module.exports = config({
  exportPathMap: () => ({
    '/work': { page: '/projects' },
  }),
});
