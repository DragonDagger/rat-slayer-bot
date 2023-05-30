// this file will contain all the find functions, that rely on the findColor function, into one place.
const robot = require("robotjs");
const { sleep } = require("./sleep");
const { findColor } = require("./findColor");

const ratColors = [
  "aab4b5",
  "515959",
  "8d9a9a",
  "a0acac",
  "a0acab",
  "a7b1b2",
  "8f9c9c",
  "667071",
  "404646",
  "798586",
];

const boneColors = ["", ""];

const rawMeatColors = ["", ""];

const findRat = () => {
  sleep(2000);
  findColor(300, 300, 1300, 400, ratColors);
};

const findBones = () => {
  sleep(2000);
  findColor(300, 300, 1300, 400, boneColors);
};

const findRawMeat = () => {
  sleep(2000);
  findColor(300, 300, 1300, 400, rawMeatColors);
};

module.exports = { findRat };
