const { BeforeAll, AfterAll } = require('@cucumber/cucumber')
const { KafkaConnector, disconnect } = require('../helpers/kafkaProducer')

BeforeAll(async function() {
    console.log('starting Kafka')
    await KafkaConnector.getInstance()
})


AfterAll(async function() {
    console.log('disconnecting from Kafka')
    await disconnect(await KafkaConnector.getInstance())
})