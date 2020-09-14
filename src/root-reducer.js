import { combineReducers } from "redux";

const initialGithubUsersState = {
  githubUsersData: null,
  status: "pending"
};
  
function githubUsersReducer(state = initialGithubUsersState, action) {
  if (action.type === "request/resolved") {
    return {
      ...state,
      githubUsersData: action.payload,
      status: "resolved"
    };
  }
  if (action.type === "request/rejected") {
    return {
      ...state,
      status: "rejected"
    };
  }
  return state;
}
  
export default combineReducers({
  githubUsers: githubUsersReducer,
});