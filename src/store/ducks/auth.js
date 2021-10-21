/**
 * Default Types
 */
export const Types = {
  USER: '@auth/AUTHENTICATED_USER',
  AUTHENTICATED: '@auth/AUTHENTICATED',
  TOKEN: '@auth/TOKEN',
};

/**
 * Default values
 */
const INITIAL_STATE = {
  authenticated: false,
  token: '',
  user: {
    name: '',
  },
};

/**
 * Creating Reducers
 */
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USER:
      return {...state, user: action.user};
    case Types.AUTHENTICATED:
      return {...state, authenticated: action.authenticated};
    case Types.TOKEN:
      return {...state, token: action.token};
    default:
      return state;
  }
}

/**
 * Creating actions
 */
export const Creators = {
  addUserAction: user => ({
    type: Types.USER,
    user,
  }),

  addAuthenticated: authenticated => ({
    type: Types.AUTHENTICATED,
    authenticated,
  }),

  addToken: token => ({
    type: Types.TOKEN,
    token,
  }),
};
