const { BeforeAll, AfterAll } = require('@cucumber/cucumber')
const { KafkaProducer, disconnect } = require('../helpers/kafkaProducer')

BeforeAll(async function() {
    await KafkaProducer.getInstance()
})


AfterAll(async function() {
    await disconnect(await KafkaProducer.getInstance())
})