export function createReducer (initialState, fnMap) {
  return function (state = initialState, {type, payload}) {
    const handler = fnMap[type];

    return handler ? handler (state, payload) : state;
  };
}

//OR
/*export const createReducer = (initialState, fnMap) => {
  return (state = initialState, {type, payload}) => {
    const handler = fnMap[type];

    return handler ? handler (state, payload) : state;
  };
};*/
