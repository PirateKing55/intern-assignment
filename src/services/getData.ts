import {users} from '../data/data';
import { User } from '../data/types';

export const getAllUsers = (): User[] => {
    return users;
}

export const getUserById = (userId: number): User | undefined => {
    return users.find(user => user.userId === userId);
};