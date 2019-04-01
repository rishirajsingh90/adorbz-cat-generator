let cats = require("../config/cats.json");

export function generateCatName(e) {
  return cats[Math.floor(Math.random() * 99)];
}
