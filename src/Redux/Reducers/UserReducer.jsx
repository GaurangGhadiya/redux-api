import {
  ADD_USER,
  DELETE_USER,
  SAVE_USER,
  UPDATE_USER,
  USER_DATA,
} from "../Actions/ActionType";

const initialState = {
  users: [],
  updateData: [],
  saveData: false,
  saveUpdateData: false,
  deleteData: false,
  isLoading: false,
  updateLoading : false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,

        users: action.data,
        isLoading: false,
        updateLoading : false
      };
    case ADD_USER:
      // const users = state.users.concat(action.data);
      console.log('loading close');
      return {
        ...state,
        saveData: true,
      // isLoading : false
        // users,
      };
    case DELETE_USER:
      // const users = state.users.filter(({ id }) => id !== action.id);
      return {
        ...state,
        users: state.users,
        deleteData: true,
      };

    case UPDATE_USER:
      return { ...state, updateData: [action.response] };

    case SAVE_USER:
      return {
        ...state,
        
        saveUpdateData: true,
      };

    default:
      return state;
  }
};
