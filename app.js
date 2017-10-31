const yargs   = require('yargs');

const geocode = require('./geocode');

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
  console.log(`Latitude: ${data.latitude}`);
  console.log(`Longitude: ${data.longitude}`);
});
