function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=      🚀 OpenLayer Airdrop Bot 🚀     ='.cyan);
  console.log('=     Created by HappyCuanAirdrop      ='.cyan);
  console.log('=    https://t.me/HappyCuanAirdrop     ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

module.exports = {
  displayHeader,
  delay,
};
