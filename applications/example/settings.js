/*
 * Example application settings.
 */

/**
 * Settings object.
 */
var settings = module.exports = {

  database: 'mongodb://localhost/example',

  sessionSecret: 'change-me',

  application: {
    name: 'Example'
  },

  extensions: {
    'example-type': {},
    'example-page': {},
    'example-panel': {},
    'example-navigation': {},
    'example-layout': {},
    'example-context': {},
    'example-route': {}
  }

};
