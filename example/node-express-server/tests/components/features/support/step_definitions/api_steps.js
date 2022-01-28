const { Before, Given, When, Then } = require('@cucumber/cucumber')
const { deleteSessions, addSession } =require('../helpers/mockServer')
const pactum = require('pactum')

let spec = pactum.spec();
Before(async () => {
  await deleteSessions()
  spec = pactum.spec(); 
});

Given('I am in session {string}', async function(session) {
  await addSession(session)
})

Given('I make a request to url {string}', function (url) {
  spec.get(url)
})

When('I receive an answer from api', async function() {
  await spec.toss();
})

Then('I expect that the response status is {int}', function(statusCode) {
  spec.response().should.have.status(statusCode)
})