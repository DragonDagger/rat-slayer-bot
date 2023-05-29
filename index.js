const robot = require("robotjs");
const { sleep } = require("./functions/sleep");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const findRat = () => {
  sleep(4000);
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

  let width = 1300;
  let height = 400;
  let x = 300;
  let y = 300;

  const img = robot.screen.capture(x, y, width, height);

  // sample up to 600 random pixels inside our screenshot until we find one that matches a rat color.
  for (var i = 0; i < 600; i++) {
    var random_x = getRandomInt(0, width - 1);
    var random_y = getRandomInt(0, height - 1);
    var sample_color = img.colorAt(random_x, random_y);

    if (ratColors.includes(sample_color)) {
      var screen_x = random_x + x;
      var screen_y = random_y + y;
      robot.moveMouseSmooth(screen_x, screen_y, 0.5);
      sleep(100);
      robot.mouseClick();
      console.log("rat found");
      return true;
    }
  }

  // did not find the rat color in the screenshot
  console.log("no rat found");
  return false;
};

// findRat();

// Attack a rat, Pick up rat bones and rat meat.
const attackRat = () => {
  findRat();
  sleep(12000);
  findRat();
  sleep(12000);
  findRat();
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
