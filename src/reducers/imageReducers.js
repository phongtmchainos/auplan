import initState from './initialState';

export const imageReducers = (state = initState.dataImages, action) => {
  switch (action.type) {
    case 'FETCH_TOP_IMAGE':
      return {
        ...state,
        data: action.result
      };
    default:
      return state;
  }
};
