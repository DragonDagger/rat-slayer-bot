const { findColor } = require("./findColor");

// Incorporate eating food to self-sustain.
const eatFood = () => {
  // these are food colors for cooked rat meat, cooked shrimp and anchovies
  const foodColors = [
    "673806",
    "7a432f",
    "914209",
    "774909",
    "945b0b",
    "8d5709",
    "303561",
    "14162a",
    "2f345f",
    "353d6d",
    "343a6a",
    "24273a",
    "ac4e0b",
    "cb5d0f",
  ];
  // Look inside the inventory and eat some food, when at low health
  findingFoodColor = findColor(1710, 745, 182, 254, foodColors);
};

module.exports = { eatFood };
