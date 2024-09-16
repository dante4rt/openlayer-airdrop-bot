const axios = require('axios');
const { BEARERS, BASE_URL } = require('./config');

async function getData(token) {
  const { data } = await axios({
    url: BASE_URL + '/backend_apis/api/service/userInfo',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data;
}

async function displayUserData() {
  try {
    for (let i = 0; i < BEARERS.length; i++) {
      const userData = await getData(BEARERS[i]);

      console.log(`[ ### Account ${i + 1} ### ]\n`.bold.green);
      console.log(`Name: ${userData.xName}`.bold.yellow);
      console.log(`X Username: ${userData.xUsername}`.bold.yellow);
      console.log(`Address: ${userData.point.address}`.bold.yellow);
      console.log(`Current Points: ${userData.point.currentPoints}`.bold.green);
      console.log(`Multiplier: ${userData.point.multiplier}x`.bold.cyan);
      console.log(
        `Consecutive Check-in Count: ${userData.point.consecutiveCheckinCount}`
          .bold.magenta
      );
      console.log(
        `Pet Details: [ Name: ${userData.eggInfo.eggInfo.name} | Type: ${userData.eggInfo.eggInfo.type} | Info: ${userData.eggInfo.eggInfo.info} ]`
          .bold.blue
      );
      console.log('\n==================================\n');
    }
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
}

module.exports = {
  displayUserData,
};
