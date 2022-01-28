const { Router } = require('express')
const axios = require('axios')

const route = Router();

route.get('/health', (req, res) => {
    res.json({'message': 'ok'})
})

route.get('/notHealthy', (req, res) => {
    res.status(500).json({'message': 'nok'})
})

route.get('/callAnotherApp', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/anotherApp')
        res.json(response.data)
    } catch (err) {
        res.status(403).json('nok')
    }
    
})

module.exports = { 
    route
}