import { TUser } from '../User/user.interface';
import { User } from '../User/user.model';

const registerUserIntoDB = async (payload: TUser) => {
    const user = await User.create(payload);

    const result = await User.findById(user._id)
        .select('_id name email isBlocked role')
        .lean();
    return result;
};

export const AuthServices = {
    registerUserIntoDB
};
