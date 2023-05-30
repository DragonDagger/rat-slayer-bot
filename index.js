const robot = require("robotjs");
const { sleep } = require("./functions/sleep");
const { findRat } = require("./functions/findAll");

// Attack a rat, Pick up rat bones and rat meat.
const attackRat = () => {
  while (true) {
    findRat();
    sleep(10000);
  }
};

attackRat();

// Bury the rat bones
const buryBones = () => {};

// Find a tree to cut for a log, light the log.
const findTree = () => {};

// Incorporate eating food to self-sustain.
const eatFood = () => {};

// Cook the rat meat, Drop any burnt meat.
const cookFood = () => {
  const burntMeatColors = ["131111", "383333"];
};
