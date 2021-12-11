import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Citas } from '../shared/cita.model';
import { CitaService } from '../shared/cita.service';

@Component({
  selector: 'app-new-cita',
  templateUrl: './new-cita.component.html',
  styleUrls: ['./new-cita.component.css']
})
export class NewCitaComponent implements OnInit {
  constructor(public citaService: CitaService, private router: Router) {}

  ngOnInit(): void {}

  createCita(cita: Citas) {
    this.citaService.create(cita).subscribe(
      () => {
        this.router.navigate(['admin/citas']);
      },
      (error: any) => {}
    );
  }
}
