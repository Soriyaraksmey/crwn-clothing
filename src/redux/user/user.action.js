import { useractionType } from "./user.action.type";

export const setCurrentUser = (user) => ({
  type: useractionType.SET_CURRENT_USER,
  payload: user,
});
