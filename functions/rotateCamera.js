const robot = require("robotjs");
const { sleep } = require("./sleep");

function rotateCamera() {
  console.log("Rotating camera");
  robot.keyToggle("right", "down");
  sleep(1000);
  robot.keyToggle("right", "up");
}
module.exports = { rotateCamera };
