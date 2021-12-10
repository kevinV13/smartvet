import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Citas } from '../shared/cita.model';
import { CitaService } from '../shared/cita.service';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.css']
})
export class CitaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'fechahora','motivo', 'idMascota','acciones'];
  dataSource: MatTableDataSource<Citas>;

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
    this.getAllCitas();
  }

  getAllCitas() {
    this.citaService.getAllCitas().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la Cita?');
    if (ok) {
      this.citaService.delete(id).subscribe(() => {
        this.getAllCitas();
      });
    }
  }

}