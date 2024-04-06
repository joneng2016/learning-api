import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUsers(name: any): Promise<import("./models/User").User[]>;
    createUser(body: any): object;
    updateUser(body: any, id: any): object;
    deleteUser(id: any): object;
    getUsersXML(name: any): Promise<string>;
}
