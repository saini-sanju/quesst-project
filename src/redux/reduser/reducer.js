
import { LoadingData } from "../constants";

const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadingData:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
