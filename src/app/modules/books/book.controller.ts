import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { BookService } from './book.service';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from './book.interface';

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

export const BookController = {
    createBook,
};
