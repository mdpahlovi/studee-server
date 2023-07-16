import { Document, Model, Types } from 'mongoose';
import { IWishlist } from '../wishlist/wishlist.interface';

export interface IReadlist extends Document {
    wishlist: Types.ObjectId | IWishlist;
    planToRead: boolean;
    isReading: boolean;
    isFinished: boolean;
}

export type ReadlistModel = Model<IReadlist, Record<string, unknown>>;
