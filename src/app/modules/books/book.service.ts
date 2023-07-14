import { IBook } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
    const newBook = new Book(payload);
    const result = await newBook.save();
    return result;
};

export const BookService = {
    createBook,
};
