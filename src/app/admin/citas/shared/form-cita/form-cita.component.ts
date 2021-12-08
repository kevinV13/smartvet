import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Citas } from '../cita.model';
import { CitaService } from '../cita.service';

@Component({
  selector: 'app-form-cita',
  templateUrl: './form-cita.component.html',
  styleUrls: ['./form-cita.component.css']
})
export class FormCitaComponent implements OnInit {

  form: FormGroup;

  @Input() cita: Citas = new Citas();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private citaService: CitaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      
      fechahora:[this.cita.fechahora, [Validators.required]],
      motivo: [this.cita.motivo, [Validators.required]],
      idmascota: [this.cita.idmascota, [Validators.required]],
                                     
    });
  }

  save() {
    this.onSubmit.emit(this.form.value);
  }
}
