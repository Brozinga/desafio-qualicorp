const host = require("./host");

const definitions = require("./definitions/definitions");
const user = require("./paths/user");

module.exports = {
  ...host,
  paths: {
    ...user,
  },
  ...definitions
};
