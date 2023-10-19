"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Habilitar CORS para permitir solicitudes desde http://localhost:4000
app.use((0, cors_1.default)({ origin: 'http://localhost:4000' }));
app.use((0, morgan_1.default)('dev'));
app.use('/api', index_1.default);
app.use('*', (_req, res) => {
    res.status(404).json({ error: "Oops! Not found" });
});
app.listen(PORT, () => {
    console.log('Server raised on port', PORT);
});
