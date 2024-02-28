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
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_service_1 = require("./product.service");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const update_product_input_1 = require("./dto/update-product.input");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(createProductInput) {
        return this.productService.create(createProductInput);
    }
    findAll() {
        return this.productService.findAll();
    }
    findOne(id) {
        return this.productService.findOne(id);
    }
    updateProduct(updateProductInput) {
        return this.productService.update(updateProductInput.id, updateProductInput);
    }
    removeProduct(id) {
        return this.productService.remove(id);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: 'products' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: 'product' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('updateProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_input_1.UpdateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "removeProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map