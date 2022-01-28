const express = require('express')
const { route } = require('./routes/routes')
const app = express()
app.use(route)


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})