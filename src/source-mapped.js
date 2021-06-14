const lodash = require("lodash");
module.exports = {
  echo,
};

function echo(str) {
  lodash.toString('lodash here!!')
  return `we were given: ${str}`;
}
