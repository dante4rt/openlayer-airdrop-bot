const axios = require('axios');
const moment = require('moment');

const { BEARERS, BASE_URL } = require('./config');

async function login(token) {
  const { data } = await axios({
    url: BASE_URL + '/backend_apis/api/service/checkIn',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {},
  });
  return data;
}

async function performCheckIn() {
  try {
    for (let i = 0; i < BEARERS.length; i++) {
      const response = await login(BEARERS[i]);

      console.log(`[ # Account ${i + 1} ]`.bold.green);

      if (response.msg.includes('already checked in')) {
        console.log(
          `[ ${moment().format(
            'HH:mm:ss'
          )} ] Check-in failed: You've already checked in today! Try again tomorrow.`
            .red
        );
      } else {
        console.log(
          `[ ${moment().format('HH:mm:ss')} ] Check-in successful! Congrats 🎉`
            .green
        );
      }

      console.log();
    }
  } catch (error) {
    console.log(
      `[ ${moment().format('HH:mm:ss')} ] Error: ${error.message}`.red
    );
  }
}

module.exports = {
  performCheckIn,
};
