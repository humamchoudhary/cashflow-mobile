import { createStore } from "redux";

const initialState = {
    loggedIn: false,
    user: null,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          loggedIn: true,
          user: action.payload,
          error: null,
        };
      
      default:
        return state;
    }
  };
  
  const store = createStore(userReducer)
  export default store;