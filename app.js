// 43bb775544f6dac0688e4a96558c07fb

// const yargs   = require('yargs');
//
// const geocode = require('./geocode');
//
// const argv = yargs.options({
//   a: {
//     demand: true,
//     alias: 'address',
//     describe: 'Address to fetch weather for',
//     string: true
//   }
// }).help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (err, data) => {
//   if (err) return console.log(err);
//
//   console.log(`Address: ${data.address}`);
//   console.log(`Latitude: ${data.latitude}`);
//   console.log(`Longitude: ${data.longitude}`);
// });

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/43bb775544f6dac0688e4a96558c07fb/24.7135517,46.6752957?units=si',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch weather.');
  }
});
