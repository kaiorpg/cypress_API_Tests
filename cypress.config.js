const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  e2e: {
    baseUrl: 'https://api.restful-api.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
