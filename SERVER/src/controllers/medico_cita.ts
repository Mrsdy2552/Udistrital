import { Request, Response } from 'express';


import pool from '../database';

class medico_cita {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM medico_cita');
        res.json(games);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('SELECT DATEDIFF(CURDATE(),fecha_cita ) as dias  ,fecha_cita , cita.id_cita,id_especialidad,cod_paciente         FROM cita inner JOIN paciente_cita on id_cita = cod_cita         INNER JOIN medico_cita on id_cita = medico_cita.cod_cita         INNER JOIN medico on medico.identificacion_med = medico_cita.cod_medico        INNER JOIN   especialidad_medica  on medico.especialidad = especialidad_medica.id_especialidad        where cod_paciente = ?        ORDER BY fecha_cita DESC LIMIT 1', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO medico_cita set ?', [req.body]);
        // console.log(req.body);
        res.json({ message: 'medico_cita Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { identificacion_pac } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE medico_cita set ? WHERE identificacion_pac = ?', [req.body, identificacion_pac]);
        res.json({ message: "medico_cita Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { identificacion_pac } = req.params;
        await pool.query('DELETE FROM medico_cita WHERE identificacion_pac = ?', [identificacion_pac]);
        res.json({ message: "medico_cita Eliminado" });
    }
}

const medico_citacontroller = new medico_cita;
export default medico_citacontroller;