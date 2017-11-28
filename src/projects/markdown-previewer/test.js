const str = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .




`;
// const t = JSON.stringify(str);

const n = str.match(/\n/gi).length;
const n0 = str.split(/\n/).length;
console.log({ n, n0 });
