const brain = require("brain.js");
const data = require("./dataset.json");
const { parseColors } = require("./helpers/parsers");

const dataset = parseColors(data);
const network = new brain.NeuralNetwork();

network.train(dataset);

const output = network.run({
  r: 0.933,
  g: 0.521,
  b: 0.447
});
