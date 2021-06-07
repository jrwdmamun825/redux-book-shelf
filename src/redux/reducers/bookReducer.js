import allBooks from "../../fakeData/books.json";

const initialState = {
  readingList: [],
  discoverList: allBooks,
  finishedList: [],
};

const bookReducer = (state = initialState, action) => {
  console.log('action id :', state.readingList.filter(book => book.id))
  switch (action.type) {
    case "ADD_TO_READING_LIST": {
      const newState = {
        
        ...state,
        readingList: state.readingList.indexOf(action.payload) < 0 ? [...state.readingList , action.payload] :[...state.readingList],
      
        
        
      };
      return newState;
    }
    case "REMOVE_FROM_READING_LIST" : {
      const newState = {
          ...state,
          readingList: state.readingList.filter(book => book.id !== action.payload.id)
      }
      return newState;
  }
  case 'FINISH_TO_DISCOVERLIST' : {
    const newState = {
        ...state ,
        readingList: state.readingList.filter(book => book.id !== action.payload.id) ,
        finishedList:[...state.finishedList, action.payload]
    }
    return newState
  }
    default: {
      return state;
    }
  }
};

export default bookReducer;
