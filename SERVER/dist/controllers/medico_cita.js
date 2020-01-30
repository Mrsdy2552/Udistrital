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
class medico_cita {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM medico_cita');
            res.json(games);
        });
    }
    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const games = await pool.query('SELECT * FROM medico_cita WHERE id = ?', [id]);
    //     console.log(games.length);
    //     if (games.length > 0) {
    //         return res.json(games[0]);
    //     }
    //     res.status(404).json({ text: "The game doesn't exits" });
    // }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO medico_cita set ?', [req.body]);
            // console.log(req.body);
            res.json({ message: 'medico_cita Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identificacion_pac } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE medico_cita set ? WHERE identificacion_pac = ?', [req.body, identificacion_pac]);
            res.json({ message: "medico_cita Actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identificacion_pac } = req.params;
            yield database_1.default.query('DELETE FROM medico_cita WHERE identificacion_pac = ?', [identificacion_pac]);
            res.json({ message: "medico_cita Eliminado" });
        });
    }
}
const medico_citacontroller = new medico_cita;
exports.default = medico_citacontroller;
