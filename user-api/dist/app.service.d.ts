import { User } from './models/User';
export declare class AppService {
    private user;
    constructor(user: typeof User);
    selectUser(name: any): Promise<User[]>;
    createUser(body: any): void;
    updateUser(body: any, id: any): void;
    deleteUser(id: any): void;
}
