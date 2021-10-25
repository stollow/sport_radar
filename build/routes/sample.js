"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const tournament_1 = __importDefault(require("../controllers/tournament"));
const router = express_1.default.Router();
router.get("/ping", tournament_1.default.getTournament);
module.exports = router;
