"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const getTournament = async (req, res, next) => {
    const api_url = "https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17";
    const fetch_response = await (0, node_fetch_1.default)(api_url);
    const json = await fetch_response.json();
    res.json(fetch_response);
};
exports.default = { getTournament };
