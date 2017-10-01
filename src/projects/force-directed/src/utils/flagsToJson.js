/* eslint: off */
const fs = require('fs');
const parser = require('css').parse;

fs.readFile('./flags.css', 'utf8', (err, file) => {
  if (err) return process.stderr.write(err);
  const css = parser(file);
  const styles = css.stylesheet.rules.filter(d => d.type === 'rule');
  const flag = styles[0].declarations.filter((d) => {
    switch (d.property) {
      case 'width': return true;
      case 'height': return true;
      default: return false;
    }
  }).reduce((a, b) => Object.assign({}, a, {
    [b.property]: +b.value.replace(/\D+/g, ''),
  }), {});

  const { width, height } = flag;
  const countrys = styles.slice(1).map((d) => {
    const cn = d.selectors.join().replace(/\.flag\.flag-/, '');
    const pos = d.declarations.filter(dec => dec.property === 'background-position')[0].value.replace(/[a-zA-Z]+/g, '').split(' ');
    const x = +pos[0];
    const y = +pos[1];
    return { cn, width, height, x, y };
  });
  return fs.writeFile('../data/flags.json', JSON.stringify(countrys), 'utf8', (e) => {
    if (e) return process.stderr.write(e);
    return process.stdout.write('done');
  });
});
