/* eslint-disable */
/* simpliy this
let startX = Math.max(Math.floor(entities.player.x - (cols / 2)), 0);
const endX = Math.min(startX + cols, game.length);
if (endX === game.length) {
  startX = (cols > game.length) ? 0 : startX - (endX - game.length);
}

let startY = Math.max(Math.floor(entities.player.y - (rows / 2)), 0);
const endY = Math.min(startY + rows, game[0].length);
if (endY === game[0].length) {
  startY = (rows > game[0].length) ? 0 : startY - (endY - game[0].length);
}
*/
const game = [];
for (let i = 0 + game.length; i < 9; i += 1) {
  game[i] = [];
  for (let j = 0 + game[i].length; j < 9; j += 1) {
    game[i][j] = ~~(Math.random() * 2);
  }
}

const dim = (game, dim, pos) => {
  const m = Math.max(Math.floor(pos - (dim / 2), 0));
  const e = Math.min(m + dim, game);
  const s = (m + dim < game) ? m - ( e - game) : m;
  return [s, e];
}
function extents (player, cols, rows, gameXlength, gameYlength) {
  const px = player[0];
  const py = player[1];
  const x = dimExtent(gameXlength, cols, px)
  const mx = mm(px, cols);
  const ex = Math.min(mx + cols, gameXlength);
  const ms = (cols > gameXlength) ? 0 : mx - (ex - gameXlength);
  const sx = (ex === gameXlength) ? ms : mx;

  const my = mm(py, rows);
  const ey = Math.min(my + rows, gameYlength);
  const ex = (ey !== gameYlength) ? my : (rows > gameYlength) ? 0 : my - ( ey - gameYlength );
}
