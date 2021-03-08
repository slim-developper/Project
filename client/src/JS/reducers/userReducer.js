const {
  USER_REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} = require("../constants/actionsTypes");

const initialState = {
  loading: false,
  errors: null,
  user: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER:
    case USER_LOGIN:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
