const axios = require('axios');

const deleteSessions = async () => { 
    await axios.delete('http://localhost:3000/api/pactum/interactions')
}

const addSession = async (sessionMockRequest) => {
    await axios.post('http://localhost:3000/api/pactum/interactions', JSON.stringify(sessionMockRequest), {headers: {'Content-Type': 'application/json'}})
}

module.exports = { addSession, deleteSessions }