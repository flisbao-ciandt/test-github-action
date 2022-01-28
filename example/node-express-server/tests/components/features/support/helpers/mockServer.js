const axios = require('axios');

const deleteSessions = async () => { 
    await axios.delete('http://localhost:3050/sessions/current')
}

const addSession = async (sessionName) => {
    await axios.post('http://localhost:3050/sessions/current', { name: sessionName.replaceAll(' ', '_') }, {headers: {'Content-Type': 'application/json'}})
}

module.exports = { addSession, deleteSessions }