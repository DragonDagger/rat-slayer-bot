const { sleep } = require("./functions/sleep");
const { findRat } = require("./functions/findAll");
const { eatFood } = require("./functions/eatFood");
const robot = require("robotjs");

const attackRat = () => {
  while (true) {
    // find a rat and attack it
    findRat();
    sleep(10000);
    // checks if heart icon health is low
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var color = img.colorAt(1739, 86);
    if (color === "131313") {
      eatFood();
    }
  }
};

attackRat();

// Bury the rat bones
const buryBones = () => {};

// Find a tree to cut for a log, light the log.
const findTree = () => {};

// Cook the rat meat, Drop any burnt meat.
const cookFood = () => {
  const burntMeatColors = ["131111", "383333"];
};
