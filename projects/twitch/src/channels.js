const USER_LIST = [
  'freecodecamp',
  'ESL_SC2',
  'OgamingSC2',
  'cretetion',
  'storbeck',
  'habathcx',
  'RobotCaleb',
  'noobs2ninjas',
  'brunofin',
  'comster404',
];

const CHANNELS = USER_LIST.map((name, _id) => ({
  name,
  _id,
  isFetching: false,
  url: `https://www.twitch.tv/${name}`,
  display_name: name,
  error: '',
  message: '', /* Happens with error */
  bio: '',
  status: null,
  viewers: 0,
  game: '',
  logo: 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=%20LOGO',
})).reduce((a, b) => {
  const { name, ...rest } = b;
  const obj = { [name]: { ...rest } };
  return { ...a, ...obj };
}, {});

export default CHANNELS;
