Given ('que estou na página inicial da aplicação de seguro de veículo', () => {
    cy.visit('https://sampleapp.tricentis.com/101/app.php')
})




When ('preencho todos os campos obrigatórios no formulário da  aba Enter Vehicle Data', () => {
    cy.inserirDadosVehicleInsurance()

})

And ('clico no botão next', () => {
    cy.clicarbotao()
//da primeira aba    
    
})

And ('preencho os campos obrigatórios da aba Enter Insurant Data', () => {
    cy.inserirDadosInsurant()
})
And ('clico no botao next', () => {
    cy.botao_next()
    //da segunda aba
})

And ('preencho os campos obrigatórios Enter Product date', () => {
    cy.inserirDadosProduct()
})

And ('clico em next', () => {
    cy.clique()

    //da terceira aba
})

And ('Seleciono uma  opção do Select Price Option', () => {
    cy.selecionarplano()
})

And ('clico na opção next', () => {
    cy.btn_nxt_spo()

    //da quarta aba
})

And ('preencho os campos obrigatórios da aba Send Quote', () => {
    cy.sendQuote()
})
And ('clico no botao send', () => {
    cy.botao_enviar()
    // da quinta aba
})
Then ('sera validado com sucesso', () => {
    cy.validarMensagemDeSucesso()
   
    //da quinta aba 
})

