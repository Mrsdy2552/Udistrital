"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class SaludhoyController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM medico');
            res.json(games);
        });
    }
    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const games = await pool.query('SELECT * FROM medico WHERE id = ?', [id]);
    //     console.log(games.length);
    //     if (games.length > 0) {
    //         return res.json(games[0]);
    //     }
    //     res.status(404).json({ text: "The game doesn't exits" });
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO medico set ?', [req.body]);
            res.json({ message: 'Medico Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE medico set ? WHERE identificacion_med = ?', [req.body, id]);
            res.json({ message: "Medico Actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identificacion_med } = req.params;
            yield database_1.default.query('DELETE FROM medico WHERE identificacion_med = ?', [identificacion_med]);
            res.json({ message: "Medico Eliminado" });
        });
    }
}
const saludController = new SaludhoyController;
exports.default = saludController;
