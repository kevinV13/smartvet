import { Cliente } from "./cliente.model";

export class Mascota{
    idMascota: number;
    nombre: string;
    especie: string;
    raza: string;
    sexo: string;
    edad: string;
    cliente: Cliente;
   
}