# 🚀 OpenLayer Airdrop Bot

**Created by [HappyCuanAirdrop](https://t.me/HappyCuanAirdrop)**

This bot automatically checks in to OpenLayer to claim daily rewards on your behalf. It uses bearer tokens to authenticate, which you will need to retrieve from your browser.

## Features

- **Auto daily check-in:** Automatically claims your rewards every 12 hours using a cron job.
- **Display user info:** View account details like points, username, address, consecutive check-ins, and pet details.
- **Multiple accounts support:** Easily manage multiple accounts using a single script.

## How to Use

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/dante4rt/openlayer-airdrop-bot.git
cd openlayer-airdrop-bot
```

### 2. Install Dependencies

Run the following command to install the required Node.js packages:

```bash
npm install
```

### 3. Create `bearers.json`

You need to create a file named `bearers.json` in the root folder to store your authentication tokens (Bearer tokens). These tokens authenticate the bot to perform actions on your OpenLayer accounts.

The `bearers.json` file should have the following format:

```json
[
  "eyJhbGciOiJ...YourFirstBearerToken",
  "eyJhbGciOiJ...YourSecondBearerToken"
]
```

#### How to Get the Bearer Token?

1. Open the OpenLayer extension and log in to your account.
2. Right-click on the extension page and select **Inspect**.
3. Go to the **Console** tab.
4. Paste the following command into the console and press `Enter`:

   ```javascript
   console.log(localStorage.getItem('_open_layer_token_'))
   ```

5. Copy the value that appears. This is your Bearer token.
6. Add this token to your `bearers.json` file.

### 4. Run the Bot

You can now run the bot with the following command:

```bash
npm start
```

- The bot will display your account information.
- You'll be prompted to choose between an automatic daily check-in or exiting.

### 5. Automate Daily Check-ins

When you choose the auto daily check-in option, the bot will:

- Perform the first check-in immediately.
- Set up a cron job to perform automatic check-ins every 12 hours.

## Donations

If you found this bot helpful, consider supporting the project:

- **Solana**: `GLQMG8j23ookY8Af1uLUg4CQzuQYhXcx56rkpZkyiJvP`
- **EVM**: `0x960EDa0D16f4D70df60629117ad6e5F1E13B8F44`
- **BTC**: `bc1p9za9ctgwwvc7amdng8gvrjpwhnhnwaxzj3nfv07szqwrsrudfh6qvvxrj8`

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it for your own purposes.

## Follow Us

Stay updated with more bots and crypto airdrop news by joining [HappyCuanAirdrop](https://t.me/HappyCuanAirdrop)!
