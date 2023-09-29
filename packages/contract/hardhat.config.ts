import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY || ""],
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.MUMBAI_PRIVATE_KEY || ""],
    },
  },
};

export default config;
