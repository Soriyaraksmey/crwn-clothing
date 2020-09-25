import { useractionType } from "./user.action.type";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case useractionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
