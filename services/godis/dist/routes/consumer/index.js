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
const auth_1 = require("../../middleware/auth");
exports.default = [
    {
        path: '/godisapi/consumer',
        method: 'post',
        handler: [
            auth_1.validateConsumer,
            controllers.createOrder,
        ],
    },
    {
        path: '/godisapi/consumer',
        method: 'get',
        handler: [
            auth_1.validateConsumer,
            controllers.getOrders,
        ],
    },
];
//# sourceMappingURL=index.js.map