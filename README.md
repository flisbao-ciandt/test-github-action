# Objetivo
Apresentar um kickstart de como configurar um teste de componente que pode ser usado em todos os projetos e que possa ser integrado no github actions

# Porque adicionar Testes de Componentes na minha aplicação?
Os testes de componentes são uma forma de testar a aplicação como um todo, "controlando" os serviços em que ela se conecta à fim.
Desse modo é possível testar as regras de negócio e como a aplicação se comporta em cenários felizes e cenários que ocorrem algum erro.

# Tecnologias Usadas
 - Nodejs
 - Cucumber-js
 - BDD
 - Gherkin

# Quais são os componentes e a estrutura desse projeto?
Esse projeto possui um mock server http [ezmockserver](https://github.com/trzenaro/ezmockserver) feito em node.

Um docker-compose com os serviços que deverão subir, como por exemplo o kafka, redis, mssql, mysql e outros

E os testes que ficam na pasta "features"

# Como posso aplicá-lo no meu projeto?
Tem um projeto em node na pasta "examples" que servirá como se deve estruturar um projeto.

# Sobre o Ezmockserver
 - Você poderá começar com um layout padrão que te ajuda a começar a configurar o mockserver
 ```sh
    npx ezmockserver init
 ```

# Como integrar no github actions
Seguir mais ou menos o exemplo que está no workflow do projeto


