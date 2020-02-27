export interface medico {
    identificacion_med: number;
    tipo_identificacion_med: string;
    nombre_med: string;
    apellido_med: string;
    municipio_med: string;
    dirección_med: string;
    especialidad: number;


}
export interface cita_medico{
    cod_medico: number,
    cod_cita:number
}

