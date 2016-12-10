// Description
//   Draws 14 mahjong tiles
//
// Commands:
//   hubot tenhou - Draws 14 mahjong tiles
//
// Author:
//   Ryota Kameoka<kameoka.ryota@gmail.com>

function * thru(from, to) {
  let n = from;
  while (n <= to) yield n++;
}

const flatten = xs => Reflect.apply(Array.prototype.concat, [], xs);

const chars = [...thru(126976, 127009)].map(x => String.fromCodePoint(x));

module.exports = robot => {
  robot.respond(/tenhou/i, msg => {
    const tiles = flatten([...thru(0, 33)].map(x => [x, x, x, x]))
      .sort(() => Math.random() - 0.5)
      .slice(0, 14)
      .map(x => chars[x])
      .sort()
      .join('')
    ;

    msg.send(tiles);
  });
}
