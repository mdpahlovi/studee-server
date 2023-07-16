import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IReadlist } from './readlist.interface';
import { Readlist } from './readlist.model';

const createReadlist = async (payload: IReadlist): Promise<IReadlist> => {
    const newReadlist = new Readlist(payload);
    const result = await newReadlist.save();
    return result;
};

const getAllReadlist = async (ids: string[]): Promise<IReadlist[]> => {
    const result = await Readlist.find({ wishlist: { $in: ids } }).populate({ path: 'wishlist', populate: { path: 'readlist' } });
    return result;
};

const updateReadlist = async (id: string, payload: Partial<IReadlist>): Promise<IReadlist> => {
    const isExist = await Readlist.findById(id);
    if (!isExist) {
        throw new ApiError(httpStatus.NOT_FOUND, "Readlist doesn't found");
    }

    const result = await Readlist.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to update readlist');
    }

    return result;
};

export const ReadlistService = {
    createReadlist,
    getAllReadlist,
    updateReadlist,
};
