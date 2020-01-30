import { Request, Response } from 'express';


import pool from '../database';

class Paciente {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM paciente');
        res.json(games);
    }

    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const games = await pool.query('SELECT * FROM paciente WHERE id = ?', [id]);
    //     console.log(games.length);
    //     if (games.length > 0) {
    //         return res.json(games[0]);
    //     }
    //     res.status(404).json({ text: "The game doesn't exits" });
    // }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO paciente set ?', [req.body]);
        // console.log(req.body);
        res.json({ message: 'paciente Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { identificacion_pac } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE paciente set ? WHERE identificacion_pac = ?', [req.body, identificacion_pac]);
        res.json({ message: "paciente Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { identificacion_pac } = req.params;
        await pool.query('DELETE FROM paciente WHERE identificacion_pac = ?', [identificacion_pac]);
        res.json({ message: "paciente Eliminado" });
    }
}

const pacientecontroller = new Paciente;
export default pacientecontroller;