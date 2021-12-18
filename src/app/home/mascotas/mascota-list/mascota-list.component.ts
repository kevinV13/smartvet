import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  displayedColumns: string[] = ['idMascota', 'nombre', 'especie', 'raza','sexo','edad','idcliente','cliente','acciones'];
  dataSource : MatTableDataSource<Mascota>;

  constructor(private mascotaService:MascotaService) { }

  ngOnInit(): void {
    this.getAllMascotas();
  }
  
  getAllMascotas(){
    this.mascotaService.getAllMascotas().subscribe((data:any)=>{
          this.dataSource=new MatTableDataSource(data['body']);
        });
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  eliminar(id: number) {
    const ok = confirm('¿Estás seguro de eliminar la mascota?');
    if (ok) {
      this.mascotaService.delete(id).subscribe(() => {
        this.getAllMascotas();
      });
    }
  }
}
