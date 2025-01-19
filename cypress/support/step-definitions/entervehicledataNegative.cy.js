Given ('que estou na página inicial da aplicação de seguro de veículo', () => {
          cy.visit('https://sampleapp.tricentis.com/101/app.php')  
})

When ('preencho um campo obrigatório com uma informação incorreta', () => {
          cy.inserirDadosNegative()
})

Then ('uma mensagem de campo obrigatório deve ser exibida', () => {
          cy.mensagemErro()
})