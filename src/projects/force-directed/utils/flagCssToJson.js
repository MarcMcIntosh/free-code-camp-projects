/* eslint: off */
const fs = require('fs');
const parse = require('css').parse;


const re = /\.flag.flag-/;
const IN_FILE = './flags.css';
const OUT_FILE = './flags.json';

function filterRules(flag) {
  const isRule = flag.type && flag.type === 'rule';
  const isFlag = flag.selectors && re.test(flag.selectors[0]);
  return isRule && isFlag;
}

function filterBackgroundPostion(declaration) {
  const isDeclaration = declaration.type && declaration.type === 'declaration';
  const isPostion = declaration.property && declaration.property === 'background-position';
  return isDeclaration && isPostion && declaration.value;
}

function mapCountryAndValues(d) {
  const code = d.selectors[0].replace(re, '');
  const values = d.declarations.filter(filterBackgroundPostion).map(dd => dd.value.split(' '));
  const [x, y] = Array.prototype.concat.apply([], values);
  return { code, x, y };
}

function toFile(str, cb) {
  fs.writeFile(OUT_FILE, str, 'utf8', cb);
}

function onErr(err) {
  return err && process.stderr.write(err);
}

fs.readFile('./flags.css', 'utf8', (err, file) => {
  if (err) return onErr(err);
  const css = parse(file);
  const flags = css.stylesheet.rules.filter(filterRules).map(mapCountryAndValues);

  return toFile(JSON.stringify(flags), (e) => {
    if (err) return onErr(e);
    return process.stdout.write(`converted ${IN_FILE}, to ${OUT_FILE}.`);
  });
});
