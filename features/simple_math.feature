# language: pt
Funcionalidade: Teste

    Cenário: Teste de cenário
        Dado a variable set to 1
        Quando I increment the variable by 1
        Então the variable should contain 2
    
    Cenário: Check Tea Pot
        Dado I make a GET request to "http://httpbin.org/status/418"
        Quando I receive a response
        Então response should have a status 418
