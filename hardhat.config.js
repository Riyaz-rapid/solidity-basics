/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "dp2yXm2BDkyyZq2KKneqmndLnK9xktA9";
const ROPSTEN_PRIVATE_KEY =
  "a5c401aa2efbfbe991f6b18c26bcc461b8a39ebc9200cc10cfcdf844fdd56e08";

module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2//${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
