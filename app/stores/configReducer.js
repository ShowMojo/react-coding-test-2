export const configReducer =
  (initialState, reducers) =>
  (state = initialState, action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
  };
