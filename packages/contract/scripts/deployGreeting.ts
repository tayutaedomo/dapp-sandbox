import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Greeting = await ethers.getContractFactory("Greeting");
  const myName = "John";
  const greeting = await Greeting.deploy(myName);

  console.log("greeting address:", await greeting.address);
  console.log("deployer address:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
