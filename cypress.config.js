const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1280,
    viewportHeight:720,
    watchForFileChanges: false,
    //para não ficar atualizando no cypress quando estiver editando
    specPattern:'cypress/e2e/**/*.feature',
    baseUrl: 'https://sampleapp.tricentis.com/101/app.php',
    //caminho do bdd cypress
    setupNodeEvents(on, config) {
     const cucumber = require('cypress-cucumber-preprocessor').default;
     on('file:preprocessor', cucumber());
    },
    // a parte de importar a biblioteca instalada
  },
});
