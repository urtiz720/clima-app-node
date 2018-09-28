const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=30298b13ced200fa98e12919de9f9f26`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}