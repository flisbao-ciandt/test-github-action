const { Before } = require('@cucumber/cucumber')
const { deleteSessions, addSession } =require('../helpers/mockServer')
const { Dado, Quando, Entao } = require('../helpers/language')
const pactum = require('pactum')

let spec = pactum.spec();
Before(async () => {
  await deleteSessions()
  spec = pactum.spec(); 
});

Dado('que eu esteja na sessão {string}', async function (sessionName) {
  await addSession(sessionName)
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