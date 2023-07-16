import { Schema, model } from 'mongoose';
import { IReadlist, ReadlistModel } from './readlist.interface';

const readlistSchema = new Schema<IReadlist>(
    {
        wishlist: { type: Schema.Types.ObjectId, ref: 'Wishlist', required: true },
        planToRead: { type: Boolean },
        isReading: { type: Boolean },
        isFinished: { type: Boolean },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const Readlist = model<IReadlist, ReadlistModel>('Readlist', readlistSchema);
