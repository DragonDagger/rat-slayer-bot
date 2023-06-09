// this file will contain all the find functions, that rely on the findColor function, into one place.

const { sleep } = require("./sleep");
const { findColor } = require("./findColor");
const { rotateCamera } = require("./rotateCamera");

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

const boneColors = [
  "d1cbcb",
  "d3cece",
  "c0b8b7",
  "c6bebe",
  "aea3a3",
  "8d1409",
  "d2cccc",
  "e9e7e7",
];

const rawMeatColors = [
  "8d1409",
  "b0a5a5",
  "f9f9f9",
  "b0a5a5",
  "d1cbcb",
  "e2dfdf",
];

const findRat = () => {
  let findingRatColor = false;
  let counter = 0;
  while (findingRatColor !== true) {
    rotateCamera();
    counter++;
    console.log(`Scanning for rats, ${counter} times!`);
    findingRatColor = findColor(300, 300, 1300, 400, ratColors);
    sleep(2000);
  }

  return findingRatColor;
};

//find bones function needs adjusting, as some of the bone colors match the lumbridge castle wall :/
// Also its just not very accurate because the bones don't take up much space on the screen. WIP
const findBones = () => {
  let findingBoneColor = false;
  let counter = 0;
  while (findingBoneColor !== true) {
    rotateCamera();
    counter++;
    console.log(`Scanning for bones, ${counter} times!`);
    findingBoneColor = findColor(300, 300, 1400, 500, boneColors);
    sleep(5000);
  }

  return findingBoneColor;
};

const findRawMeat = () => {
  sleep(2000);
  findColor(300, 300, 1300, 400, rawMeatColors);
};

module.exports = { findRat };
