const SELECT_MAKE = '#make' 
const SELECT_MODEL = '#model'
const INPUT_CCM = '#cylindercapacity'  
const SELECT_FUEL = '#fuel'
const INPUT_KW = '#engineperformance' 
const SELECT_DATA = '#dateofmanufacture'
const SELECT_SEATS = '#numberofseats' 
const SELECT_NUMBER_SEATS = '#numberofseatsmotorcycle' 
const INPUT_PAYLOAD = '#payload'
const INPUT_TOTALWEIGHT = '#totalweight'
const INPUT_LISTPRICE = '#listprice'
const INPUT_LICENSEPLATE = '#licenseplatenumber'
const INPUT_ANNUALMILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('inserirDadosVehicleInsurance', () => {
    cy.get(SELECT_MAKE).select( 'Ford')
    cy.get(SELECT_MODEL).select('Moped')
    cy.get(INPUT_CCM).type('500') 
    cy.get(INPUT_KW).type('100') 
    cy.get(SELECT_DATA).type('10/05/2024') 
    cy.get(SELECT_SEATS).select('2') 
    cy.get(SELECT_NUMBER_SEATS).select('1') 
    cy.get(SELECT_FUEL).select('Gas')
    cy.get(INPUT_PAYLOAD).type('1000') 
    cy.get(INPUT_TOTALWEIGHT).type('1000') 
    cy.get(INPUT_LISTPRICE).type('1000') 
    cy.get(INPUT_LICENSEPLATE).type('ABC123')
    cy.get(INPUT_ANNUALMILEAGE).type('1000')
    
    
}) 
Cypress.Commands.add('clicarbotao', () => {
    cy.get(BTN_NEXT).click()
})

 Cypress.Commands.add('inserirDadosNegative', () => {
    
    cy.get(INPUT_CCM).type('20000000');
    
 })
Cypress.Commands.add('mensagemErro', () => {
    cy.contains('.error', 'Must be a number between 1 and 2000').should('be.visible')}) // Aqui estamos buscando a mensagem de erro exibida na tela. 
    // Utilizamos o 'contains' para localizar o texto e verificar se ele corresponde à mensagem de erro esperada.