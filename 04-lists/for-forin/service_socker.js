const axios = require('axios');
const URL = 'https://www.thesportsdb.com/api/v1/json/1';

async function obterTimes(nome) {
    const url = `${URL}/searchteams.php?t=${nome}`;
    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    obterTimes: obterTimes
}
