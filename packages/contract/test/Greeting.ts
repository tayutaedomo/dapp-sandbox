import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe("Greeting", function () {
  async function deployContract() {
    const [owner, account1] = await ethers.getSigners();

    const Greeting = await ethers.getContractFactory("Greeting");
    const greeting = await Greeting.deploy("InitialName");

    return { owner, account1, greeting };
  }

  describe("Deployment", function () {
    it("Should deploy with the initial name and return name", async function () {
      const { greeting } = await loadFixture(deployContract);
      const initName = "InitialName";
      expect(await greeting.myName()).to.equal(initName);
      expect(await greeting.sayMyName()).to.equal(`My name is ${initName}.`);
    });
  });

  describe("setMyName", function () {
    it("Should allow to set a new name and return name", async function () {
      const { greeting } = await loadFixture(deployContract);
      const newName = "NewName";
      await greeting.setMyName(newName);
      expect(await greeting.myName()).to.equal(newName);
      expect(await greeting.sayMyName()).to.equal(`My name is ${newName}.`);
    });

    it("Should not allow non-owners to set a new name", async function () {
      const { greeting, account1 } = await loadFixture(deployContract);
      const newName = "AnotherName";
      await expect(
        greeting.connect(account1).setMyName(newName)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should allow new owner to set a new name and prevent old owner from setting name", async function () {
      const { owner, account1, greeting } = await loadFixture(deployContract);

      await greeting.connect(owner).transferOwnership(account1.address);

      const newName1 = "AnotherName1";
      await expect(
        greeting.connect(owner).setMyName(newName1)
      ).to.be.revertedWith("Ownable: caller is not the owner");

      const newName2 = "AnotherName2";
      await greeting.connect(account1).setMyName(newName2);
      expect(await greeting.myName()).to.equal(newName2);
      expect(await greeting.sayMyName()).to.equal(`My name is ${newName2}.`);
    });
  });

  describe("hello", function () {
    it("Should emit a hello event", async function () {
      const { greeting, account1 } = await loadFixture(deployContract);
      await expect(greeting.connect(account1).hello())
        .to.emit(greeting, "GreetingMessage")
        .withArgs(account1.address, "Hello");
    });
  });

  describe("goodMorning", function () {
    it("Should emit a good morning event", async function () {
      const { greeting, account1 } = await loadFixture(deployContract);
      await expect(greeting.connect(account1).goodMorning())
        .to.emit(greeting, "GreetingMessage")
        .withArgs(account1.address, "Good morning");
    });
  });

  describe("goodbye", function () {
    it("Should emit a goodbye event", async function () {
      const { greeting, account1 } = await loadFixture(deployContract);
      await expect(greeting.connect(account1).goodbye())
        .to.emit(greeting, "GreetingMessage")
        .withArgs(account1.address, "Goodbye");
    });
  });
});
