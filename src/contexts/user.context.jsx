import React, { createContext, useState, useEffect, useReducer } from 'react';


import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const userReducer = (state,action) =>{
  const {type, payload} = action;
  console.log(action);
  switch(type){
    case  USER_ACTION_TYPES.SET_CURRENT_USER:
      return{
        ...state,
        currentUser: payload
      }
      default:
        throw new Error(`Unhandled type ${type} in userReducer`);
}
};

const INITIAL_STATE = {
  currentUser: null
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState([]);
  const [{currentUser}, dispatch] =  useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);
  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
