import { Schema, model } from 'mongoose';
import { IWishlist, WishlistModel } from './wishlist.interface';

const wishlistSchema = new Schema<IWishlist>(
    {
        user: { type: String, required: true },
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const Wishlist = model<IWishlist, WishlistModel>('Wishlist', wishlistSchema);
