var parser = require('../parseutils');

module.exports = {
  pattern: /^L \d\d\/\d\d\/\d\d\d\d - \d\d:\d\d:\d\d: World triggered ["](.+)["] (.+)$/,
  return: function (result) {
    return { type: 'worldtrigger', trigger: result[1], args: parser.parseArgs(result[2]) }
  }
};
