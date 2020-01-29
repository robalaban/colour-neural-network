/**
 *
 * @param {Object} color
 * Takes in Object of RGB returns Object with values 0-1
 */

const transformFromRGB = color =>
  Object.keys(color).reduce((acc, key) => {
    acc[key] = (color[key] / 255).toFixed(3);
    return acc;
  }, {});

/**
 *
 * @param {Object} color
 * Takes in Object of RGB values of 0-1 transformes to RGB
 */

const transformToRGB = color =>
  Object.keys(color).reduce((acc, key) => {
    acc[key] = (color[key] * 255).toFixed(3);
    return acc;
  }, {});

module.exports = {
  transformFromRGB,
  transformToRGB
};
