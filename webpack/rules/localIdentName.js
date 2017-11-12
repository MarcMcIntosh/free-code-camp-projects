// const localIdentName = '[name]__[local]___[hash:base64:5]';

// const localIdentName = ({ prodution = false }) => (prodution ? '[hash:base64:5]' : '[name]-[local]');
const localIdentName = ({ prodution = false }) => (prodution ? '[hash:base64]' : '[name]-[local]');

module.exports = localIdentName;
