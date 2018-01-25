import { REQUEST, RECEIVED, REJECTED, RESET } from './actions';

export const DEFAULT_STATE = {
  fetching: false,
  data: {},
  error: false,
  message: '',
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST: return { ...state, fetching: true, error: false, data: {} };
    case RECEIVED: {
      const { error, message, unix, natural } = action.payload;
      return { ...state, fetching: false, data: { unix, natural }, error, message };
    }
    case REJECTED: {
      const { message } = action.payload;
      return { ...state, fetching: false, error: true, message };
    }
    case RESET: return { ...state, ...DEFAULT_STATE };
    default: return state;
  }
}
