"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers = __importStar(require("../../controllers/ConsumerControllers"));
const AuthControllers_1 = require("../../controllers/AuthControllers");
exports.default = [
    {
        path: '/godisapi/consumer',
        method: 'post',
        handler: [
            AuthControllers_1.validateConsumer,
            controllers.createOrder,
        ],
    },
    {
        path: '/godisapi/consumer',
        method: 'get',
        handler: [
            AuthControllers_1.validateConsumer,
            controllers.getOrders,
        ],
    },
    {
        path: '/godisapi/consumer/:id',
        method: 'delete',
        handler: [
            AuthControllers_1.validateConsumer,
            controllers.deleteOrder,
        ],
    },
    {
        path: '/godisapi/consumer/:id',
        method: 'put',
        handler: [
            AuthControllers_1.validateConsumer,
            controllers.updateOrder,
        ],
    },
];
//# sourceMappingURL=index.js.map