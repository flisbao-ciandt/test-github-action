# language: pt
Funcionalidade: Teste
    Cenário: Quando eu faço uma requisição à api devo receber um erro 422
        Dado que eu esteja na sessão "que retorne 403"
        E faço uma requisicao para a "http://localhost:3000/healthcheck"
        Quando recebo uma resposta
        Então a resposta deverá ter o status 403
    
    Cenário: Quando eu faço uma requisição à api devo receber um status 200
        Dado que eu esteja na sessão "que retorne 200"
        E faço uma requisicao para a "http://localhost:3000/healthcheck"
        Quando recebo uma resposta
        Então a resposta deverá ter o status 200
        