import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoriaClinica } from './historiaclinica.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaclinicaService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {}

  getAllHistoriaClinica() {
    return this.http.get<HistoriaClinica[]>(`${this.apiBase}/historiasClinicas`);
  }

  get(id: number) {
    return this.http.get(`${this.apiBase}/historiasClinicas/${id}`);
  }

  create(historiaclinica: HistoriaClinica) {
    return this.http.post(`${this.apiBase}/historiasClinicas`, historiaclinica);
  }

  update(historiaclinica: HistoriaClinica) {
    return this.http.put(`${this.apiBase}/historiasClinicas`, historiaclinica);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiBase}/historiasClinicas/${id}`);
  }
}
