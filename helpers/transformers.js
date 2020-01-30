/**
 *
 * @param {Object} color
 * Takes in Object of RGB returns the Hex value of the color
 */

//TODO: Deal with RGB(A) alpha

const transformToRGB = color => {
  let rgb = ["#"];
  Object.keys(color).forEach(key =>
    if (key === 'a') return;
    rgb.push(color[key].toString(16).slice(-2))
  );
  return rgb.join("");
};


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
