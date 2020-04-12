"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers = __importStar(require("../../controllers/ProducerControllers"));
const AuthControllers_1 = require("../../controllers/AuthControllers");
exports.default = [
    {
        path: '/godisapi/producer',
        method: 'get',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.getProducts,
        ],
    },
    {
        path: '/godisapi/producer',
        method: 'post',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.createProduct,
        ],
    },
    {
        path: '/godisapi/producer/:id',
        method: 'put',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.updateProduct,
        ],
    },
    {
        path: '/godisapi/producer/:id',
        method: 'delete',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.deleteProduct,
        ],
    },
    {
        path: '/godisapi/producer/deal',
        method: 'post',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.createDeal,
        ],
    },
    {
        path: '/godisapi/producer/deal/:id',
        method: 'delete',
        handler: [
            AuthControllers_1.validateProducer,
            controllers.deleteDeal,
        ],
    },
];
//# sourceMappingURL=index.js.map