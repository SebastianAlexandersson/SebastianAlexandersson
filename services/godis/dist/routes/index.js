"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producer_1 = __importDefault(require("./producer"));
const consumer_1 = __importDefault(require("./consumer"));
exports.default = [
    ...producer_1.default,
    ...consumer_1.default
];
//# sourceMappingURL=index.js.map