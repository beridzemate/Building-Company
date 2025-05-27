"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serviceController_1 = require("../controllers/serviceController");
const router = express_1.default.Router();
// GET /api/services?lang=ru|en|ka
router.get('/', serviceController_1.getServices);
exports.default = router;
