"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medico_1 = __importDefault(require("../controllers/medico"));
const paciente_1 = __importDefault(require("../controllers/paciente"));
const medico_cita_1 = __importDefault(require("../controllers/medico_cita"));
const cita_1 = __importDefault(require("../controllers/cita"));
const tel_paciente_1 = __importDefault(require("../controllers/tel-paciente"));
class GameRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // medico
        this.router.get('/', medico_1.default.list);
        this.router.post('/', medico_1.default.create);
        // this.router.get('/:id', SaludhoyController.getOne);
        this.router.put('/:id', medico_1.default.update);
        this.router.delete('/:identificacion_med', medico_1.default.delete);
        ///paciente/////////
        this.router.get('/paciente/', paciente_1.default.list);
        this.router.post('/paciente/', paciente_1.default.create);
        this.router.put('/paciente/:identificacion_pac', paciente_1.default.update);
        this.router.delete('/paciente/:identificacion_pac', paciente_1.default.delete);
        ////// telefonopaciente///////
        this.router.get('/telpaciente/', tel_paciente_1.default.list);
        this.router.post('/telpaciente/', tel_paciente_1.default.create);
        this.router.put('/telpaciente/:cod_paciente', tel_paciente_1.default.update);
        this.router.delete('/telpaciente/:cod_paciente', tel_paciente_1.default.delete);
        // cita
        this.router.get('/cita/', cita_1.default.list);
        this.router.post('/cita/', cita_1.default.create);
        this.router.put('/cita/:cod_cita', cita_1.default.update);
        this.router.delete('/cita/:cod_cita', cita_1.default.delete);
        // medico_cita
        this.router.get('/cita_medico/', medico_cita_1.default.list);
        this.router.post('/cita_medico/', medico_cita_1.default.create);
        // this.router.get('/cita_medico/:id', medico_cita.getOne);
        this.router.put('/cita_medico/:id', medico_cita_1.default.update);
        this.router.delete('/cita_medico/:identificacion_med', medico_cita_1.default.delete);
    }
}
exports.default = new GameRoutes().router;
