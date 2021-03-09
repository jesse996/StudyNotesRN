import * as constant from './constant';

export const addBook = (book) => {
  return {
    type: constant.ADD_NEW_BOOK,
    payload: book,
  };
};
