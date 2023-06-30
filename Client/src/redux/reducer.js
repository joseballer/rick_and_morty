const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
