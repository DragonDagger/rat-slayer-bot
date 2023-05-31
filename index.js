const { sleep } = require("./functions/sleep");
const { findRat, findBones, findRawMeat } = require("./functions/findAll");

// Attack a rat, Pick up rat bones and rat meat.
const attackRat = () => {
  while (true) {
    findRat();
    sleep(11000);
    // findBones();
    // sleep(11000);
    // findRawMeat();
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
