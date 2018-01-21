var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=94090fac0e474b13059afa238d600565&units=metric';

// 7543332926dd68132bfd44ae39d13469

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        //var requestUrl = OPEN_WEATHER_MAP_URL + encodedLocation + REMAINING_URL;

        return axios.get(requestUrl).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            const response = res.response;
            throw new error(response.data.message);
        });
    }
}