export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case 'SET_IS_AUTHENTICATED':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated
      }
    case 'SET_IS_ONBOARDED':
      return {
        ...state,
        isOnboarded: action.payload.isOnboarded
      }
    default: {
      throw Error('unkown action: ' + action.type);
    }
  }
}