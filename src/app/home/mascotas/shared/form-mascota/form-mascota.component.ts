import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mascota } from '../mascota.model';
import { MascotaService } from '../mascota.service';

@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})
export class FormMascotaComponent implements OnInit {

  form: FormGroup;
  @Input() mascota: Mascota=new Mascota();
  @Output() onSubmit: EventEmitter<any>= new EventEmitter();

  constructor(
    private mascotaService: MascotaService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      nombre:[
        this.mascota.nombre,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(70),
        ]
      ],
      especie:[this.mascota.especie,[
        Validators.required,
      ]],
      raza:[this.mascota.raza,[
        Validators.required,
      ]],
      sexo:[this.mascota.sexo,[
        Validators.required,
      ]],
      edad:[this.mascota.edad,[
        Validators.required,
      ]],
      cliente:[this.mascota.cliente,[
        Validators.required,
      ]],
    });
  }
  
  save(){
    this.onSubmit.emit(this.form.value);
  }
}
