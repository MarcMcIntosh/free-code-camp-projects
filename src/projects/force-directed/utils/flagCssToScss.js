/* eslint: off */
const fs = require('fs');
const parse = require('css').parse;


const re = /\.flag.flag-/;
const IN_FILE = './flags.css';
const OUT_FILE = './_flag-map.scss';
const NAME_SPACE = 'flag-map';

const toScss = (str, name = NAME_SPACE) => `$${name}: (
  ${str}
);`;

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
  const key = d.selectors[0].replace(re, '');
  const value = d.declarations.filter(filterBackgroundPostion).map(dd => dd.value).join('').trim();
  // return `${country}: ${position}`;
  return { key, value };
}

function rulesToObject(arr, key = 'key', value = 'value') {
  return arr.reduce((a, b) => {
    const str = b[key];
    const val = b[value];
    const obj = { [str]: val };
    return Object.assign({}, a, obj);
  }, {});
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
  const rules = css.stylesheet.rules.filter(filterRules).map(mapCountryAndValues);

  /* un-nesscary de-dupe */
  const obj = rulesToObject(rules, 'key', 'value');

  const str = Object.entries(obj).map(d => d.join(': ')).join(',\n  ');
  const scss = toScss(str);

  return toFile(scss, (e) => {
    if (err) return onErr(e);
    return process.stdout.write(`converted ${IN_FILE}, to ${OUT_FILE}.`);
  });
});
