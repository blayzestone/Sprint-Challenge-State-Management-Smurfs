import { 
  FETCH_SMURFS_START, 
  FETCH_SMURFS_SUCCESS, 
  CREATE_SMURF, 
  UPDATE_SMURF
} from '../actions/smurfsActions';

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
    case CREATE_SMURF:
      return {
        ...state,
        smurfsList: action.payload,
      }
    case UPDATE_SMURF:
      const { id, name, age, height } = action.payload;
      const updatedSmurfsList = state.smurfsList.map(smurf => {
        if (id === smurf.id) {
          return {
            id: smurf.id,
            name: !name ? smurf.name : name,
            age: !age ? smurf.age : age,
            height: !height ? smurf.height : height,
          };
        }
        return smurf;
      });
      return {
        ...state,
        smurfsList: updatedSmurfsList,
      }
    default:
      return state;
  }
}