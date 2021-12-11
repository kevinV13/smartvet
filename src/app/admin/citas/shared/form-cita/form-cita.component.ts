import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mascota } from 'src/app/home/mascotas/shared/mascota.model';
import { MascotaService } from 'src/app/home/mascotas/shared/mascota.service';
import { Citas } from '../cita.model';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormCitaComponent implements OnInit {
  form: FormGroup;
  mascotas:Mascota[];
  myControlMascota = new FormControl(null,Validators.required);
  mascotaFiltrados$: Observable<Mascota[]>;
  mascota: Mascota;
  cita: Citas;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private mascotaService: MascotaService,
    private citaService: CitaService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
    ngOnInit(): void {
    this.form=new FormGroup({
      fechahora: new FormControl('',Validators.required),
      motivo: new FormControl('',Validators.required),
      idMascota:this.myControlMascota,
    });
      
    this.listarMascotas();
      
    this.mascotaFiltrados$ = this.myControlMascota.valueChanges.pipe(
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
      let cita = new Citas();
      //this.mascota=this.form.value['idMascota']
      cita.idMascota=this.form.value['idMascota']
      cita.fechahora=this.form.value['fechahora']
      cita.motivo=this.form.value['motivo']
      console.log(cita);
      this.onSave.emit(cita);
    }

  }

