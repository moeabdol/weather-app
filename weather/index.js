const request = require('request');

const getWeather = (lat, lng, cb) => {
  request({
    url: `https://api.darksky.net/forecast/43bb775544f6dac0688e4a96558c07fb/${lat},${lng}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      cb(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else if (response.statusCode === 400) {
      cb('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
};
