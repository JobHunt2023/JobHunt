"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const homepageRoutes_1 = __importDefault(require("./routes/homepageRoutes"));
const connect_1 = __importDefault(require("./config/connect"));
const app = (0, express_1.default)();
const port = parseInt(process.env.PORT || '8000', 10);
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, connect_1.default)();
//all pages routes --->
app.use(homepageRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// *** important notes *** =======>
//npm run dev (to run the server) **************************
//npm run build or tsc (to convert it from ts to javascript)
