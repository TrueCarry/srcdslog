var parser = require('../parseutils');

module.exports = {
  pattern: /^L \d\d\/\d\d\/\d\d\d\d - \d\d:\d\d:\d\d: "(.+)" triggered ["](.+)["]\n\u0000$/,
  return: function (result) {
    return { type: 'trigger', player: parser.parsePlayer(result[1]) , event: result[2] }
  }
};
