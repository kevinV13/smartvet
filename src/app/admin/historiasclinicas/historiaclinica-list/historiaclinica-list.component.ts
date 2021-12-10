import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HistoriaClinica } from '../../historiasclinicas/shared/historiaclinica.model';
import { HistoriaclinicaService } from '../../historiasclinicas/shared/historiaclinica.service';

@Component({
  selector: 'app-historiaclinica-list',
  templateUrl: './historiaclinica-list.component.html',
  styleUrls: ['./historiaclinica-list.component.css']
})
export class HistoriaclinicaListComponent implements OnInit {

  displayedColumns: string[] = ['idHistoriaClinica', 'numeroFicha','observacion', 'diagnostico', 'tratamiento','idMascota','nombre','acciones'];
  dataSource: MatTableDataSource<HistoriaClinica>;

  constructor(private historiaclinicaService: HistoriaclinicaService) {}

  ngOnInit(): void {
    this.getAllHistoriaClinica();
  }

  getAllHistoriaClinica() {
    this.historiaclinicaService.getAllHistoriaClinica().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la Historia Clinica?');
    if (ok) {
      this.historiaclinicaService.delete(id).subscribe(() => {
        this.getAllHistoriaClinica();
      });
    }
  }

}
