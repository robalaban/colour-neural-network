// TODO: User transformer here? Or leave it for clarity sake?

/**
 *
 * @param {Array} data
 * Converts RGB to values between 0 - 1
 */
function parseColors(data) {
  data.forEach(color => {
    color.input.r = (color.input.r / 255).toFixed(3);
    color.input.g = (color.input.g / 255).toFixed(3);
    color.input.b = (color.input.b / 255).toFixed(3);
    color.output.r = (color.output.r / 255).toFixed(3);
    color.output.g = (color.output.g / 255).toFixed(3);
    color.output.b = (color.output.b / 255).toFixed(3);
  });

  return data;
}

module.exports = {
  parseColors
};
