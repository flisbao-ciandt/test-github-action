import Kafka from 'node-rdkafka'

const consumer = Kafka.KafkaConsumer.createReadStream({
    "metadata.broker.list": "localhost:9092",
    'metadata.broker.list': 'localhost:9092',
    'group.id': 'librd-test',
    'socket.keepalive.enable': true,
    'enable.auto.commit': false
  }, {}, {
    topics: 'test',
    waitInterval: 0,
    objectMode: false
  }
)

consumer.on('error', (error) => {
    console.error(`An error occurred: ${error}`)
})

consumer.on('event.error', (error) => {
    console.error(`An error EVENT occurred: ${error}`)
})

consumer.on('event.log', (log) => {
    console.log(`Events that are happening ${JSON.stringify(log)}`)
})

consumer.pipe(process.stdout)