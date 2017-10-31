const yargs   = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

const argv = yargs.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }
}).help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (err, data) => {
  if (err) return console.log(err);

  console.log(`Address: ${data.address}`);

  weather.getWeather(data.latitude, data.longitude, (err, data) => {
    if (err) return console.log(err);

    console.log('It\'s currently', data.temperature, 'degrees celsius.');
    console.log('But it feels like', data.apparentTemperature, 'degrees celsius.');
  });
});

