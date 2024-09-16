require('colors');
const cron = require('cron');
const readline = require('readline-sync');
const { displayHeader, delay } = require('./src/utils');
const { performCheckIn } = require('./src/checkIn');
const { displayUserData } = require('./src/userData');

(async () => {
  displayHeader();

  console.log(`Please wait...\n`.yellow);
  await delay(1000);

  await displayUserData();

  console.log('What would you like to do?');
  console.log('1. Auto daily check-in');
  console.log('0. Exit');

  const choice = readline.questionInt('\nEnter your choice: ');

  if (choice === 1) {
    console.log('Running your first check-in...'.yellow);
    await performCheckIn();

    const job = new cron.CronJob('0 */12 * * *', () => {
      console.log(
        `\nPerforming automatic check-in at ${new Date().toLocaleString()}\n`
          .green
      );
      performCheckIn();
    });

    job.start();
    console.log('Cron job set to run every 12 hours.'.green);
  } else if (choice === 0) {
    console.log('👋 Exiting the bot. See you next time!'.cyan);
    console.log('Subscribe: https://t.me/HappyCuanAirdrop.'.green);
    process.exit(0);
  } else {
    console.log('Invalid choice. Exiting...'.red);
    console.log('Subscribe: https://t.me/HappyCuanAirdrop.'.green);
    process.exit(0);
  }
})();
