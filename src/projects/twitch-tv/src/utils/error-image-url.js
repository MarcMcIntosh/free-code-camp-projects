export default function errorImageUrl(text) {
  const base = 'https://dummyimage.com/300x300/effee7/ff5457.jpg';
  return `${base}&text=%20${text}`;
}
