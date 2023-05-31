const { sleep } = require("./functions/sleep");
const { findRat } = require("./functions/findAll");
const robot = require("robotjs");

// Attack a rat, Pick up rat bones and rat meat.
const attackRat = () => {
  while (true) {
    findRat();
    sleep(12000);
    var img = robot.screen.capture(0, 0, 1920, 1080);
    var color = img.colorAt(1739, 86);
    // checks if heart icon health is low
    if (color === "131313") {
      robot.moveMouseSmooth(1820, 766, 0.5);
      sleep(500);
      robot.mouseClick();
    }
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
