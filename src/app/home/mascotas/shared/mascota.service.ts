import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mascota } from './mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiBase:string = environment.apiBase;
  
  constructor(private http:HttpClient) { }
  
  getAllMascotas(){
    return this.http.get<Mascota[]>(`${this.apiBase}/mascota`);
  }

  get(id:number) {
    return this.http.get(`${this.apiBase}/mascota/${id}`);
  }

  create(mascota: Mascota){
    return this.http.post(`${this.apiBase}/mascota`, mascota);
  }

  update(mascota: Mascota){
    return this.http.put(`${this.apiBase}/mascota`, mascota);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/mascota/${id}`);
  }

}
