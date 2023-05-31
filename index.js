const { sleep } = require("./functions/sleep");
const { findRat } = require("./functions/findAll");
const { findColor } = require("./functions/findColor");
const robot = require("robotjs");

// Incorporate eating food to self-sustain.
const eatFood = () => {
  // these are food colors for cooked rat meat
  const foodColors = ["673806", "7a432f"];
  // Look inside the inventory and eat some food, when at low health
  findingFoodColor = findColor(1710, 745, 182, 254, foodColors);
};

const attackRat = () => {
  while (true) {
    // find a rat and attack it
    findRat();
    sleep(12000);
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
