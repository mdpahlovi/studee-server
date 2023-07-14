import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { BookService } from './book.service';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';
import pick from '../../../shared/pick';
import { filterOptionConstant } from '../../../shared/filterOption';
import { bookFilterableFields } from './book.constant';

const createBook = catchAsync(async (req: Request, res: Response) => {
    const bookData = req.body;

    const result = await BookService.createBook(bookData);

    sendResponse<IBook>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Book created successfully',
        data: result,
    });
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const filterOptions = pick(req.query, filterOptionConstant);

    const result = await BookService.getAllBooks(filters, filterOptions);

    sendResponse<IBook[]>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Books retrieved successfully',
        data: result,
    });
});

export const BookController = {
    createBook,
    getAllBook,
};
