# language: pt
Funcionalidade: Teste
    Cenário: Quando eu faço uma requisição à api devo receber um erro 422
        Dado que eu esteja na sessao que a api ira retornar 422
        E faço uma requisicao para a "http://localhost:3000/teste"
        Quando recebo uma resposta
        Então a resposta deverá ter o status 422
    
    Cenário: Quando eu faço uma requisição à api devo receber um status 200
        Dado que eu esteja na sessao que a api ira retornar 200
        E faço uma requisicao para a "http://localhost:3000/teste"
        Quando recebo uma resposta
        Então a resposta deverá ter o status 200
        