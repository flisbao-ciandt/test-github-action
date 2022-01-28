# Estrutura do projeto
 - src => Pasta que contém o código do app
 - tests => Pasta que possui todos os testes do app
    - components => Pasta que possui todos os testes de componentes e suas configurações como package.json, arquivo de config do ezmockserver e cucumber
        - features => Pasta em que se encontra os arquivos .feature
            - support => Pasta que provê o código das features e de seus sub métodos
                - step_definitions => Pasta que implementa o gherkin dos arquivos .feature
                - helpers => Pasta que contém os helpers que são acessados pelo step_definitions
                - hooks => Pasta que contém os arquivos que implementam a configuração de início e fim do cucumber e de cada teste
        - sessions => Pasta que contém os mocks implementados pelo ezmockserver

# Configuração
A configuração inicial do ezmockserver pode ser iniciada com o comando
```shell
npx ezmockserver init
```

# Para rodar o app
```sh
cd ./example/node-express-server && npm run startApp
```

# Para rodar o Ezmockserver
```sh
cd ./example/node-express-server/tests/components && npm run mock-server-up
```

# Para rodar o Cucumber
```sh
cd ./example/node-express-server/tests/components && npm run component-test
```