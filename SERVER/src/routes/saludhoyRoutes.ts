import express, { Router } from 'express';

import SaludhoyController from '../controllers/medico';
import pacientecontroller from '../controllers/paciente';
import medico_cita from '../controllers/medico_cita';
import citacontroller from '../controllers/cita';
import paciente_citacontroller  from '../controllers/paciente_cita';

import telpacientecontroller from '../controllers/tel-paciente';

class GameRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        // medico
        this.router.get('/medico/', SaludhoyController.list);
        this.router.post('/medico/', SaludhoyController.create);
        // this.router.get('/:id', SaludhoyController.getOne);
        this.router.put('/medico/:id', SaludhoyController.update);
        this.router.delete('/medico/:identificacion_med', SaludhoyController.delete);

        ///paciente/////////

        this.router.get('/paciente/', pacientecontroller.list);
        this.router.post('/paciente/', pacientecontroller.create);
        this.router.put('/paciente/:identificacion_pac', pacientecontroller.update);
        this.router.delete('/paciente/:identificacion_pac', pacientecontroller.delete);
        ////// telefonopaciente///////
        this.router.get('/telpaciente/', telpacientecontroller.list);
        this.router.post('/telpaciente/', telpacientecontroller.create);
        this.router.put('/telpaciente/:cod_paciente', telpacientecontroller.update);
        this.router.delete('/telpaciente/:cod_paciente', telpacientecontroller.delete);

        // cita

        this.router.get('/cita/', citacontroller.list);
        this.router.post('/cita/', citacontroller.create);
        this.router.put('/cita/:cod_cita', citacontroller.update);
        this.router.delete('/cita/:cod_cita', citacontroller.delete);

         // medico_cita
         this.router.get('/cita_medico/', medico_cita.list);
         this.router.post('/cita_medico/', medico_cita.create);
         this.router.get('/cita_medico/:id', medico_cita.getOne);
         this.router.put('/cita_medico/:id', medico_cita.update);
         this.router.delete('/cita_medico/:identificacion_med', medico_cita.delete);

        ///paciente_cita
        this.router.get('/cita_paciente/', paciente_citacontroller.list);
        this.router.post('/cita_paciente/', paciente_citacontroller.create);
        this.router.put('/cita_paciente/:cod_cita', paciente_citacontroller.update);
        this.router.delete('/cita_paciente/:cod_cita', paciente_citacontroller.delete);




    }

}

export default new GameRoutes().router;

