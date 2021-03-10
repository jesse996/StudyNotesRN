import {createSlice} from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    allBooks: [
      {
        image: {},
        bookName: 'book name',
        author: 'jesse',
        publishing: '',
        publicDate: '',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.allBooks.push(action.payload);
    },
    deleteBooks: (state, action) => {
      state.allBooks = state.allBooks.filter(
        (item, index) => !action.payload[index],
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addBook, deleteBooks} = testSlice.actions;

export default testSlice.reducer;
