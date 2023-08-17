const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      username: '',
      password: '',
    },  
    setupNodeEvents(on, config) {
    },
  },
});
