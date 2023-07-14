import { SortOrder } from 'mongoose';

type IOptions = {
    sortBy?: string;
    sortOrder?: SortOrder;
};

export const isFilterOption = (options: IOptions): IOptions => {
    const sortBy = options.sortBy || 'createdAt';
    const sortOrder = options.sortOrder || 'desc';

    return {
        sortBy,
        sortOrder,
    };
};

export const filterOptionConstant = ['sortBy', 'sortOrder'];
