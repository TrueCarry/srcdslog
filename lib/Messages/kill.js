var parser = require('../parseutils');

module.exports = {
  pattern: /^L \d\d\/\d\d\/\d\d\d\d - \d\d:\d\d:\d\d: "(.+)" killed "(.+)" with ["](.+)["] (\(headshot\))?$/,
  return: function (result) {
    return { time: result[2], type: 'kill', player: parser.parsePlayer(result[3]), killed: parser.parsePlayer(result[4]), weapon: result[5], headshot: !!result[6] }
  }
};
