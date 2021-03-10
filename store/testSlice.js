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
  },
});

// Action creators are generated for each case reducer function
export const {addBook} = testSlice.actions;

export default testSlice.reducer;
