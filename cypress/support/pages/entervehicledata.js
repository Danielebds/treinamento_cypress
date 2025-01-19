const SELECT_MAKE = '#make' //criando um comando para selecionar a marca
const SELECT_MODEL = '#model' //criando um comando para selecionar o modelo
const INPUT_CCM = '#cylindercapacity'   //criando um comando para selecionar o campo Cilindro 
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
    cy.get(INPUT_KW).type('100') // campo de potencia do motor
    cy.get(SELECT_DATA).type('10/05/2024') //campo de data de fabricação
    cy.get(SELECT_SEATS).select('2') // campo de assentos
    cy.get(SELECT_NUMBER_SEATS).select('1') //campo de assentos moto
    cy.get(SELECT_FUEL).select('Gas')
    cy.get(INPUT_PAYLOAD).type('1000') // campo de peso do veiculo
    cy.get(INPUT_TOTALWEIGHT).type('1000') //campo de peso total
    cy.get(INPUT_LISTPRICE).type('1000') //campo de preco
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
    cy.contains('.error', 'Must be a number between 1 and 2000').should('be.visible')})