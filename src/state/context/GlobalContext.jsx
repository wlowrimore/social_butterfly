'use client'

import { createContext, useReducer, useEffect } from 'react'
import { globalReducer } from '../reducers/GlobalReducer'
import { getAuth, onAuthStateChanged } from "firebase/auth";
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

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_IS_AUTHENTICATED',
          payload: {
            isAuthenticated: true
          }
        })
        dispatch({
          type: 'SET_LOADING',
          payload: {
            isLoading: false
          }
        })
      }
    })

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