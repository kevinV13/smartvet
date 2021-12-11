import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/home/mascotas/shared/mascota.model';
import { MascotaService } from 'src/app/home/mascotas/shared/mascota.service';
import { Citas } from '../shared/cita.model';
import { CitaService } from '../shared/cita.service';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {

  id : number;
  idMascota : number;
  public cita:Citas;
  public mascota: Mascota;
  dataSource:Citas;

  @Input() historia: Citas = new Citas();

  constructor(public citaService: CitaService, private router: Router,
   private activeRoute: ActivatedRoute, public mascotaService: MascotaService,   private formBuilder: FormBuilder,) {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.id = Number(paramMap.get('id'));
      this.citaService.get(this.id).subscribe((data:any)=>{
        this.cita=data;
        console.log(this.cita);
      });
      this.activeRoute.paramMap.subscribe((paramMap) => {
        this.idMascota = Number(paramMap.get('id'));
        this.mascotaService.get(this.idMascota).subscribe((data: any) => {
          this.mascota=this.cita.idMascota;
          console.log(this.mascota);
        });
      });
   })
  }
getCita(){
  const params=this.activeRoute.snapshot.params;
  console.log('para', params['id']);
  this.citaService.get(params['id']).subscribe(
    (data:any)=>{
      this.dataSource=data;
      console.log('parapara', data);
  
  })
  
}
  ngOnInit(): void {
    this.getCita()
  }

  update(cita: any) {
    this.citaService.update(cita).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/Citas']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  form=new FormGroup({
    fechahora: new FormControl('',[Validators.required ]),
    motivo: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
  });



  save(form: Citas) {
    form.id = this.id;
    form.idMascota = this.mascota;
    this.citaService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/Citas']);
    }, (error: any) => {
      
    })
  }
}

