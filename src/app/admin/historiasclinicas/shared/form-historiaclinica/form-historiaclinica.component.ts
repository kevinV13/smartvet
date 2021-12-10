import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mascota } from 'src/app/home/mascotas/shared/mascota.model';
import { MascotaService } from 'src/app/home/mascotas/shared/mascota.service';
import { HistoriaClinica } from '../historiaclinica.model';
import { HistoriaclinicaService } from '../historiaclinica.service';


@Component({
  selector: 'app-form-historiaclinica',
  templateUrl: './form-historiaclinica.component.html',
  styleUrls: ['./form-historiaclinica.component.css']
})
export class FormHistoriaclinicaComponent implements OnInit {
  form: FormGroup;
  mascotas:Mascota[];
  myControlMascota = new FormControl(null,Validators.required);
  mascotasFiltrados$: Observable<Mascota[]>;
  mascota: Mascota;
  historiaclinica: HistoriaClinica;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private historiclinicaService: HistoriaclinicaService,
    private mascotaService: MascotaService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
    ngOnInit(): void {
    this.form=new FormGroup({
      numeroFicha: new FormControl('',[Validators.required ]),
      observacion: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
      diagnostico: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
      tratamiento: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
      idMascota:this.myControlMascota,
    });
      
    this.listarMascotas();
      
    this.mascotasFiltrados$ = this.myControlMascota.valueChanges.pipe(
      map((val) => this.filtrarMascotas(val))
      );
    }
      
    listarMascotas(){
      this.mascotaService.getAllMascotas().subscribe((data:any)=> {
        console.log(data['body']);
        this.mascotas=data['body'];
      });
    }
      
    filtrarMascotas(val: any){
      if (val != null && val.idMascota>0){
        return this.mascotas.filter((el) =>
            el.nombre.toLowerCase().includes(val.nombre.toLowerCase())
        );
      }
      return this.mascotas.filter((el) =>
          el.nombre.toLowerCase().includes(val?.toLowerCase())
      );
    }
  
    mostrarMascota(val:Mascota){
      return val ? `${val.nombre}` : val;
    }

    save(){
      let historiaclinica = new HistoriaClinica();
      this.mascota=this.form.value['idMascota']
      historiaclinica.idMascota=this.mascota;
      historiaclinica.numeroFicha=this.form.value['numeroFicha']
      historiaclinica.observacion=this.form.value['observacion']
      historiaclinica.diagnostico=this.form.value['diagnostico']
      historiaclinica.tratamiento=this.form.value['tratamiento']
      this.onSave.emit(historiaclinica);
    }
  }
  