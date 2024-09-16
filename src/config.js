const fs = require('fs');

const BASE_URL = 'https://us-central1-openoracle-de73b.cloudfunctions.net';
const BEARERS = JSON.parse(fs.readFileSync('bearers.json', 'utf-8'));

module.exports = {
  BASE_URL,
  BEARERS,
};
