import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Citas } from './cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllCitas() {
    return this.http.get<Citas[]>(`${this.apiBase}/citas`);
  }

  get(id: number) {
    return this.http.get<Citas>(`${this.apiBase}/citas/${id}`);
  }

  create(cita: Citas) {
    return this.http.post(`${this.apiBase}/citas`, cita);
  }

  update(cita: Citas) {
    return this.http.put(`${this.apiBase}/citas`, cita);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/citas/${id}`);
  }
}
