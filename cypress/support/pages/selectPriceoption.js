const SELC_SILVER = '#selectsilver'
const BTN_NEXT = '#nextsendquote'


Cypress.Commands.add('selecionarplano', () => {
    cy.get(SELC_SILVER).check({ force: true }) //tive que forçar, pos o elemeto estava  dentro de outros elementos e estava dando erro de click
})


Cypress.Commands.add('btn_nxt_spo', () => {
    cy.get(BTN_NEXT).click()
})
