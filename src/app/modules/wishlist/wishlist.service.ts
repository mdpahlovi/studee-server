import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const createWishlist = async (payload: IWishlist): Promise<IWishlist> => {
    const isExist = await Wishlist.find({ user: payload?.user, book: payload?.book });
    if (isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Already Exist');
    }

    const newWishlist = new Wishlist(payload);
    const result = await newWishlist.save();
    return result;
};

const getAllWishlist = async (email: string): Promise<IWishlist[]> => {
    const result = await Wishlist.find({ user: email }).populate({ path: 'book' });
    return result;
};

export const WishlistService = {
    createWishlist,
    getAllWishlist,
};
