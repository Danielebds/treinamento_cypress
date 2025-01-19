const INPUT_FIRSTNAME = '#firstname'
const INPUT_LASTNAME = '#lastname'
const SLC_BIRTHDAYDATE = '#birthdate'
const SELECT_COUNTRY = '#country'
const INPUT_POSTALCODE = '#zipcode'
const SELECT_OCCUPATION = '#occupation'
const SELECT_HOBBIES = 'label.ideal-radiocheck-label'
const BTN_NEXT = '#nextenterproductdata'



Cypress.Commands.add('inserirDadosInsurant', () => {
    cy.get(INPUT_FIRSTNAME).type('daniel')
    cy.get(INPUT_LASTNAME).type('silva')
    cy.get(SLC_BIRTHDAYDATE).type('01/01/1990')
    cy.get(SELECT_COUNTRY).select('Brazil')
    cy.get(INPUT_POSTALCODE).type('12345')
    cy.get(SELECT_OCCUPATION).select('Farmer')
    cy.get(SELECT_HOBBIES).contains('Speeding').click()
})

Cypress.Commands.add('botao_next', () => {
    cy.get(BTN_NEXT).click()
})

