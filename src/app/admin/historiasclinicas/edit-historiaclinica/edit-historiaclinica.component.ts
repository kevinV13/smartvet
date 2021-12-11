import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/home/mascotas/shared/mascota.model';
import { MascotaService } from 'src/app/home/mascotas/shared/mascota.service';
import { HistoriaClinica } from '../shared/historiaclinica.model';
import { HistoriaclinicaService } from '../shared/historiaclinica.service';
import { FormBuilder,Validators , FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-historiaclinica',
  templateUrl: './edit-historiaclinica.component.html',
  styleUrls: ['./edit-historiaclinica.component.css']
})
export class EditHistoriaclinicaComponent implements OnInit {
  idHistoriaClinica : number;
  idMascota : number;
  public historiaClinica:HistoriaClinica;
  public mascota: Mascota;

  @Input() historia: HistoriaClinica = new HistoriaClinica();

  constructor(public historiaclinicaService: HistoriaclinicaService, private router: Router,
   private activeRoute: ActivatedRoute, public mascotaService: MascotaService,   private formBuilder: FormBuilder,) {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.idHistoriaClinica = Number(paramMap.get('id'));
      this.historiaclinicaService.get(this.idHistoriaClinica).subscribe((data:any)=>{
        this.historiaClinica=data;
        console.log(this.historiaClinica);
      });
      this.activeRoute.paramMap.subscribe((paramMap) => {
        this.idMascota = Number(paramMap.get('id'));
        this.mascotaService.get(this.idMascota).subscribe((data: any) => {
          this.mascota=this.historiaClinica.idMascota;
          console.log(this.mascota);
        });
      });
   })
  }

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

  form=new FormGroup({
    numeroFicha: new FormControl('',[Validators.required ]),
    observacion: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
    diagnostico: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
    tratamiento: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
  });



  save(form: HistoriaClinica) {
    form.idHistoriaClinica = this.idHistoriaClinica;
    form.idMascota = this.mascota;
    this.historiaclinicaService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/HistoriaClinica']);
    }, (error: any) => {
      
    })
  }
}

