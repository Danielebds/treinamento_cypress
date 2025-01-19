# utf-8
# language: pt

Funcionalidade: Aplicando de Seguro de Veiculo
    Cenário: Criando os formularios de  Seguro de Veiculo Válida 
        Dado que estou na página inicial da aplicação de seguro de veículo
        Quando preencho todos os campos obrigatórios no formulário da  aba Enter Vehicle Data
        E clico no botão next  
        E preencho os campos obrigatórios da aba Enter Insurant Data
        E clico no botao next 
        E preencho os campos obrigatórios Enter Product date
        E clico em next
        E Seleciono uma  opção do Select Price Option
        E clico na opção next
        E preencho os campos obrigatórios da aba Send Quote 
        E clico no botao send
        Entao sera validado com sucesso

        
      
    Cenário: Criando os formularios de  Seguro de Veiculo Invalida 
    Dado que estou na página inicial da aplicação de seguro de veículo
    Quando preencho um campo obrigatório com uma informação incorreta
    Então uma mensagem de campo obrigatório deve ser exibida
       
       



    
    



