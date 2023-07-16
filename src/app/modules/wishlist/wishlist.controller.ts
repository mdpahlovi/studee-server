import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IWishlist } from './wishlist.interface';
import { WishlistService } from './wishlist.service';
import httpStatus from 'http-status';

const createWishlist = catchAsync(async (req: Request, res: Response) => {
    const wishlistData = req.body;

    const result = await WishlistService.createWishlist(wishlistData);

    sendResponse<IWishlist>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Wishlist created successfully',
        data: result,
    });
});

const getAllWishlist = catchAsync(async (req: Request, res: Response) => {
    const { email } = req.params;

    const result = await WishlistService.getAllWishlist(email);

    sendResponse<IWishlist[]>(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Wishlists retrieved successfully',
        data: result,
    });
});

export const WishlistController = {
    createWishlist,
    getAllWishlist,
};
