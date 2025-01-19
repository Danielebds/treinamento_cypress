const INPUT_EMAIL = "#email";
const INPUT_USERNAME = "#username";
const INPUT_PASSWORD = "#password";
const INPUT_CONFIRMPASSWORD = "#confirmpassword";
const BTN_SEND = "#sendemail";
const ALERT_MESSAGE = ".sweet-alert";

Cypress.Commands.add("sendQuote", () => {
  cy.get(INPUT_EMAIL).type(Cypress.env("email"));
  cy.get(INPUT_USERNAME).type("Daniele");
  cy.get(INPUT_PASSWORD).type(Cypress.env("password"));
  cy.get(INPUT_CONFIRMPASSWORD).type(Cypress.env("confirmPassword"));
});

Cypress.Commands.add("botao_enviar", () => {
  cy.get(BTN_SEND).click();
});

// Cypress.Commands.add('botao_validar', () => {
//     cy.contains(BTN_VALIDAR).should('not.exist')
//     cy.pause()
// })

Cypress.Commands.add("validarMensagemDeSucesso", () => {
  cy.get(ALERT_MESSAGE, { timeout: 10000 })

    .should("be.visible")
    .and("contain", "Sending e-mail success!");
  cy.pause();
});
