import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, } from '../actions/smurfsActions';

const initialState = {
  isFetching: false,
  smurfsList: [],
} 

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfsList: action.payload,
      }
    default:
      return state;
  }
}