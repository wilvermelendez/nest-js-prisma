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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ProductService = class ProductService {
    constructor(databaseServioce) {
        this.databaseServioce = databaseServioce;
    }
    create(createProductDto) {
        return this.databaseServioce.product.create({ data: createProductDto });
    }
    findAll() {
        return this.databaseServioce.product.findMany();
    }
    findOne(id) {
        return this.databaseServioce.product.findUnique({ where: { id } });
    }
    update(id, updateProductDto) {
        return this.databaseServioce.product.update({
            data: updateProductDto,
            where: { id },
        });
    }
    remove(id) {
        return this.databaseServioce.product.delete({ where: { id } });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ProductService);
//# sourceMappingURL=product.service.js.map