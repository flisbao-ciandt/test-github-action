const { Before } = require('@cucumber/cucumber')
const { deleteSessions, addSession } =require('../helpers/mockServer')
const { should_return_422 } = require('../../../sessions/session_should_return_422')
const { should_return_200 } = require('../../../sessions/session_should_return_200');
const pactum = require('pactum');
const { Dado, Quando, Entao } =require('../helpers/language')

let spec = pactum.spec();
Before(async () => {
  await deleteSessions()
  spec = pactum.spec(); 
});

Dado('que eu esteja na sessao que a api ira retornar 422', async function() {
  await addSession(should_return_422())
})

Dado('que eu esteja na sessao que a api ira retornar 200', async function() {
  await addSession(should_return_200())
})

Dado('faço uma requisicao para a {string}', async function (url) {
  spec.get(url);
});

Quando('recebo uma resposta', async function () {
  await spec.toss();
});

Entao('a resposta deverá ter o status {int}', async function (code) {
  spec.response().should.have.status(code);
});