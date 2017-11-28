import {
  ON_INPUT,
} from './actions';

const DEFAULT_STATE = {
  value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .',
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ON_INPUT: return { ...state, value: action.payload };
    default: return state;
  }
}

export default reducer;
