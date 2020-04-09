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
const auth_1 = require("../../middleware/auth");
exports.default = [
    {
        path: '/godisapi/producer',
        method: 'get',
        handler: [
            auth_1.validateProducer,
            controllers.getProducts,
        ],
    },
    {
        path: '/godisapi/producer',
        method: 'post',
        handler: [
            auth_1.validateProducer,
            controllers.createProduct,
        ],
    },
    {
        path: '/godisapi/producer/:id',
        method: 'put',
        handler: [
            auth_1.validateProducer,
            controllers.updateProduct,
        ],
    },
    {
        path: '/godisapi/producer/:id',
        method: 'delete',
        handler: [
            auth_1.validateProducer,
            controllers.deleteProduct,
        ],
    },
];
//# sourceMappingURL=index.js.map