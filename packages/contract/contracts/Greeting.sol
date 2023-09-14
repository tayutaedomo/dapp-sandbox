// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Greeting is Ownable {
    using Strings for string;

    string public myName;

    event GreetingMessage(address indexed from, string message);

    constructor(string memory name) {
        myName = name;
    }

    function setMyName(string memory name) external onlyOwner {
        myName = name;
    }

    function sayMyName() external view returns (string memory) {
        return string(abi.encodePacked("My name is ", myName, "."));
    }

    function hello() external {
        emit GreetingMessage(msg.sender, "Hello");
    }

    function goodMorning() external {
        emit GreetingMessage(msg.sender, "Good morning");
    }

    function goodbye() external {
        emit GreetingMessage(msg.sender, "Goodbye");
    }
}
