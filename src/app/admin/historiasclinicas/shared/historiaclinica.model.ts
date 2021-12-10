import { Mascota } from "src/app/home/mascotas/shared/mascota.model";

export class HistoriaClinica {
    idHistoriaClinica:number;
    numeroFicha:number;
    observacion: string;
    diagnostico: string;
    tratamiento: string;
    idMascota:Mascota;  
}
  