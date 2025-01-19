const SELECT_START_DATE = '#startdate'
const SELECT_INSURANCE = '#insurancesum'
const SELECT_MERIT = '#meritrating'
const SELECT_DAMAGE = '#damageinsurance'
const SELECT_OPTIONALPRODUCTS = 'label.ideal-radiocheck-label'
const SELECT_COURTESY = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'

Cypress.Commands.add('inserirDadosProduct', () => {
    cy.get(SELECT_START_DATE).type('10/05/2025')
    cy.get(SELECT_INSURANCE).select('3.000.000,00')
    cy.get (SELECT_MERIT).select('Bonus 1')
    cy.get (SELECT_DAMAGE).select('No Coverage')
    cy.get (SELECT_OPTIONALPRODUCTS).contains('Euro Protection').click();
    cy.get (SELECT_COURTESY).select('Yes');
})

Cypress.Commands.add('clique', () => {
    cy.get(BTN_NEXT).click()
})