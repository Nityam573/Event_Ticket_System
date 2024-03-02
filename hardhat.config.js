require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: String(process.env.WEB_URL),
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
