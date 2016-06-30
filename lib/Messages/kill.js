var parser = require('../parseutils');

module.exports = {
  pattern: /^L (\d\d\/\d\d\/\d\d\d\d - \d\d:\d\d:\d\d): "(.+)" \[(-?\d+) (-?\d+) (-?\d+)\] killed "(.+)" \[(-?\d+) (-?\d+) (-?\d+)\] with "(.+)" ?(\(headshot\))?(\(headshot\))?$/,
  return: function (result) {
    return { time: parser.parseTime(result[0]), type: 'kill', player: parser.parsePlayer(result[2]), killed: parser.parsePlayer(result[6]), weapon: result[10], headshot: !!result[11] }
  }
};
