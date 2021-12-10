import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaClinica } from '../shared/historiaclinica.model';
import { HistoriaclinicaService } from '../shared/historiaclinica.service';

@Component({
  selector: 'app-edit-historiaclinica',
  templateUrl: './edit-historiaclinica.component.html',
  styleUrls: ['./edit-historiaclinica.component.css']
})
export class EditHistoriaclinicaComponent implements OnInit {
  constructor(public historiaclinicaService: HistoriaclinicaService, private router: Router) {}

  ngOnInit(): void {}

  update(historiaclinica: any) {
    this.historiaclinicaService.update(historiaclinica).subscribe(
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

