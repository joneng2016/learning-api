"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const User_1 = require("./models/User");
const sequelize_1 = require("@nestjs/sequelize");
let AppService = class AppService {
    constructor(user) {
        this.user = user;
    }
    async selectUser(name) {
        return name
            ? this.user.findAll({
                where: {
                    name,
                },
            })
            : this.user.findAll();
    }
    createUser(body) {
        console.log(body);
        this.user.create(body);
    }
    updateUser(body, id) {
        console.log(id);
        this.user.update(body, {
            where: {
                id,
            },
        });
    }
    deleteUser(id) {
        this.user.destroy({
            where: {
                id,
            },
        });
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(User_1.User)),
    __metadata("design:paramtypes", [Object])
], AppService);
//# sourceMappingURL=app.service.js.map