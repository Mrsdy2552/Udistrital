import { Request, Response } from 'express';


import pool from '../database';

class SaludhoyController {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT identificacion_med FROM medico');
        res.json(games);
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

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO medico set ?', [req.body]);
        res.json({ message: 'Medico Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE medico set ? WHERE identificacion_med = ?', [req.body, id]);
        res.json({ message: "Medico Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { identificacion_med } = req.params;
        await pool.query('DELETE FROM medico WHERE identificacion_med = ?', [identificacion_med]);
        res.json({ message: "Medico Eliminado" });
    }
}

const saludController = new SaludhoyController;
export default saludController;