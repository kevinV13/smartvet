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

  createHistoriaclinica(historiaclinica: HistoriaClinica) {
    this.historiaclinicaService.create(historiaclinica).subscribe(
      () => {
        this.router.navigate(['admin/HistoriaClinica']);
      },
      (error: any) => {}
    );
  }
}
