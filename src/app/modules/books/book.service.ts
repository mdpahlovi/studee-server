import { SortOrder } from 'mongoose';
import { isFilterOption } from '../../../shared/filterOption';
import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters, IBookFilterOptions } from './book.interface';
import { Book } from './book.model';

const createBook = async (payload: IBook): Promise<IBook> => {
    const newBook = new Book(payload);
    const result = await newBook.save();
    return result;
};

const getAllBooks = async (filters: IBookFilters, filterOptions: IBookFilterOptions): Promise<IBook[]> => {
    const { query } = filters;
    const { sortBy, sortOrder } = isFilterOption(filterOptions);

    const andConditions = [];

    if (query) {
        andConditions.push({
            $or: bookSearchableFields.map(field => ({
                [field]: {
                    $regex: query,
                    $options: 'i',
                },
            })),
        });
    }

    const sortConditions: { [key: string]: SortOrder } = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }

    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};

    const result = await Book.find(whereConditions).sort(sortConditions);

    return result;
};

export const BookService = {
    createBook,
    getAllBooks,
};
