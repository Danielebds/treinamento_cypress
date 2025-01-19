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



Cypress.Commands.add("validarMensagemDeSucesso", () => {
  cy.get(ALERT_MESSAGE, { timeout: 10000 }) //forcando o alert messsage a ter um novo tempo, pois o cypress tem o tempo fixo de quatro segundos

    .should("be.visible")
    .and("contain", "Sending e-mail success!"); 
  cy.pause();
});
