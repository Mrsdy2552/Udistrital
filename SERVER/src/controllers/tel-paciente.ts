import { Request, Response } from 'express';


import pool from '../database';

class telpaciente {

    public async list(req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM telefono_paciente');
        res.json(games);
    }

    // public async getOne(req: Request, res: Response): Promise<any> {
    //     const { id } = req.params;
    //     const games = await pool.query('SELECT * FROM telefono_paciente WHERE id = ?', [id]);
    //     console.log(games.length);
    //     if (games.length > 0) {
    //         return res.json(games[0]);
    //     }
    //     res.status(404).json({ text: "The game doesn't exits" });
    // }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO telefono_paciente set ?', [req.body]);
        res.json({ message: 'telefono_paciente Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { cod_paciente } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE telefono_paciente set ? WHERE cod_paciente = ?', [req.body, cod_paciente]);
        res.json({ message: "telefono_paciente Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { cod_paciente } = req.params;
        await pool.query('DELETE FROM telefono_paciente WHERE cod_paciente = ?', [cod_paciente]);
        res.json({ message: "telefono_paciente Eliminado" });
    }
}

const telpacientecontroller = new telpaciente;
export default telpacientecontroller;