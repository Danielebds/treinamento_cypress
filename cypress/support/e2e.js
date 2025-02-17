// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/entervehicledata'
import './pages/enterInsurantData'
import './pages/enterProductData'
import './pages/selectPriceoption'
import './pages/sendQuote'


Cypress.on('uncaught:exception', (err, runnable) => {
          
          if (err.message.includes('e is not defined')) {
              return false
          }
      })
      // Retorna false para evitar que o Cypress falhe o teste, da etapa final. devido ao erro que esta ocorrendo na plataforma de testes
      //dica de uma colega de classe para evitar o erro

      