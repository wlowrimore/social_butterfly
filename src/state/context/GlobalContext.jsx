'use client'

import { createContext, useReducer, useEffect } from 'react'
import { globalReducer } from '../reducers/GlobalReducer'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/lib/firebase';
import useFetchCurrentUser from '@/utils/fetchCurrentUser';

const initialState = {
  user: {},
  isAuthenticated: false,
  isOnboarded: false,
  isLoading: true
}

export const GlobalContext = createContext(initialState)
export const GlobalDispatchContext = createContext(null)

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const { fetchUser } = useFetchCurrentUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({
          type: 'SET_IS_AUTHENTICATED',
          payload: {
            isAuthenticated: true,
          },
        });
        const userData = await fetchUser()
        if (userData) {
          dispatch({
            type: 'SET_USER',
            payload: {
              user: userData,
            },
          });
          dispatch({
            type: 'SET_IS_ONBOARDED',
            payload: {
              isOnboarded: true,
            },
          });
        }
      }
      dispatch({
        type: 'SET_LOADING',
        payload: {
          isLoading: false,
        },
      });
    });

    return () => unsubscribe();
  }, [])

  return (
    <GlobalContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider