import { IWishlist } from './wishlist.interface';
import { Wishlist } from './wishlist.model';

const createWishlist = async (payload: IWishlist): Promise<IWishlist> => {
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
