import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedInGoogle: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedInGoogle: true, userId: action.payload };

    case SIGN_OUT:
      return { ...state, isSignedInGoogle: false, userId: null };

    default:
      return state;
  }
};

export default authReducer;
