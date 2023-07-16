import { Document, Model, Types } from 'mongoose';
import { IBook } from '../books/book.interface';

export interface IWishlist extends Document {
    user: string;
    book: Types.ObjectId | IBook;
}

export type WishlistModel = Model<IWishlist, Record<string, unknown>>;
