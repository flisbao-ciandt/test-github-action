const { Given, When, Then } = require('@cucumber/cucumber')

const Dado = (description, callback) => Given(description, callback)
const Quando = (description, callback) => When(description, callback)
const Entao = (description, callback) => Then(description, callback)

module.exports = { Dado, Quando, Entao }