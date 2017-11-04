// const localIdentName = '[name]__[local]___[hash:base64:5]';

const localIdentName = ({ prodution = false }) => (prodution ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]');

module.exports = localIdentName;
