import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    //Make API Request to signup
    // If signup was successful, modify state, authenticate user
    //If signup was fail, show error message
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //Make API Request to signin
    // If signin was successful, modify state, authenticate user
    //If signin was fail, show error message
  };
};

const signout = (dispatch) => {
  return () => {
    //Modify state
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
