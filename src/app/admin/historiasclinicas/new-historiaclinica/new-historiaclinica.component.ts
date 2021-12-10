import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaClinica } from '../shared/historiaclinica.model';
import { HistoriaclinicaService } from '../shared/historiaclinica.service';

@Component({
  selector: 'app-new-historiaclinica',
  templateUrl: './new-historiaclinica.component.html',
  styleUrls: ['./new-historiaclinica.component.css']
  
  
})
export class NewHistoriaclinicaComponent implements OnInit {
  constructor(public historiaclinicaService: HistoriaclinicaService, private router: Router) {}

  ngOnInit(): void {}

  createHistoriaclinica(historiaclinica: any) {
    this.historiaclinicaService.create(historiaclinica).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/HistoriaClinica']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
