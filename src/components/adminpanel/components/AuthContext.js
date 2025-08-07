import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

// Actions
const AUTH_ACTIONS = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  SET_LOADING: 'SET_LOADING',
  RESTORE_SESSION: 'RESTORE_SESSION',
};

// Reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case AUTH_ACTIONS.RESTORE_SESSION:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // For demonstration purposes, we'll use in-memory storage
  // In a real app, you might want to use a more persistent solution
  const sessionData = {
    user: null,
    token: null,
  };

  // Login function
  const login = (user, token) => {
    // Store in memory (replace with your preferred storage method)
    sessionData.user = user;
    sessionData.token = token;
    
    dispatch({
      type: AUTH_ACTIONS.LOGIN_SUCCESS,
      payload: { user, token },
    });
  };

  // Logout function
  const logout = () => {
    // Clear stored data
    sessionData.user = null;
    sessionData.token = null;
    
    dispatch({
      type: AUTH_ACTIONS.LOGOUT,
    });
  };

  // Check if user is authenticated
  const checkAuthStatus = () => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
    
    // Check if we have stored session data
    if (sessionData.user && sessionData.token) {
      dispatch({
        type: AUTH_ACTIONS.RESTORE_SESSION,
        payload: {
          user: sessionData.user,
          token: sessionData.token,
        },
      });
    } else {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  };

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value = {
    user: state.user,
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};