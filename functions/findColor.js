const robot = require("robotjs");
const { sleep } = require("./sleep");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function will be re-used to find all the different items, based on color. ( find rats, bones, trees, raw meat, food etc. )
const findColor = (x, y, width, height, colorSamples) => {
  sleep(2000);
  const img = robot.screen.capture(x, y, width, height);

  // sample up to 700 random pixels inside our screenshot until we find one that matches a color.
  for (var i = 0; i < 700; i++) {
    var random_x = getRandomInt(0, width - 1);
    var random_y = getRandomInt(0, height - 1);
    var sample_color = img.colorAt(random_x, random_y);

    if (colorSamples.includes(sample_color)) {
      var screen_x = random_x + x;
      var screen_y = random_y + y;
      robot.moveMouseSmooth(screen_x, screen_y, 0.5);
      sleep(100);
      robot.mouseClick();
      console.log("The color was found");
      return true;
    }
  }

  // did not find the color in the screenshot
  console.log("no color found");
  return false;
};

module.exports = { findColor };
