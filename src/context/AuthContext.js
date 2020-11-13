import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", {
      email,
      password,
    });
    await AsyncStorage.setItem("token", response.data.token);
    console.log("*LOG:");
    console.log(response);
    dispatch({ type: "signup", payload: response.data.token });
    // If sign up succeeded, navigate to TrackListScreen
    navigate("TrackList");
    //await AsyncStorage.getItem("token");
  } catch (err) {
    dispatch({
      type: "add_error",
      //payload: "Something went wrong, please try again later.",
      payload: err.message,
    });
  }
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
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
