export interface pacientes{
    identificacion_pac: number ;
        tipo_identificacion_pac:  string;
        nombre_pac: string;
        apellido_pac?: string;
        municipio_pac: string;
        direccion_pac?: string;
        fecha_nacimiento_pac: Date;
}
export interface cita_pacientes{
    ingreso: number;
cod_paciente: number;
cod_cita: number;

}