import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-new-mascota',
  templateUrl: './new-mascota.component.html',
  styleUrls: ['./new-mascota.component.css']
})
export class NewMascotaComponent implements OnInit {
  constructor(public mascotaService: MascotaService, private router:Router) { }

  ngOnInit(): void {}

  createMascota(mascota: any) {
    this.mascotaService.create(mascota).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['mascotas']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
