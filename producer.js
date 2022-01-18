import Kafka from 'node-rdkafka'

const producer = new Kafka.Producer({
    'metadata.broker.list': 'localhost:9092',
    'dr_cb': true
})

const topicName = 'test'

producer.on('event.log', (log) => {
    console.log(`Producer got a log => ${JSON.stringify(log)}`)
})

producer.on('event.error', (error) => {
    console.error(`Producer got an error => ${error}`)
})

//counter to stop this sample after maxMessages are sent
var counter = 0;
var maxMessages = 10;

producer.on('delivery-report', function(err, report) {
  console.log('delivery-report: ' + JSON.stringify(report));
  counter++;
});

producer.on('ready', (arg) => {
    console.log('producer ready.' + JSON.stringify(arg));

  for (var i = 0; i < maxMessages; i++) {
    var value = Buffer.from('value-' +i);
    var key = "key-"+i;
    // if partition is set to -1, librdkafka will use the default partitioner
    var partition = -1;
    var headers = [
      { header: "header value" }
    ]
    producer.produce(topicName, partition, value, key, Date.now(), "", headers);
  }

  //need to keep polling for a while to ensure the delivery reports are received
  var pollLoop = setInterval(function() {
      producer.poll();
      if (counter === maxMessages) {
        clearInterval(pollLoop);
        producer.disconnect();
      }
    }, 1000);
})

producer.on('disconnected', function(arg) {
    console.log('producer disconnected. ' + JSON.stringify(arg));
  });
  
  //starting the producer
producer.connect();