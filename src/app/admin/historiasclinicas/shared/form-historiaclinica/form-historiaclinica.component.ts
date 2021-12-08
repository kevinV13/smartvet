import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HistoriaClinica } from '../historiaclinica.model';
import { HistoriaclinicaService } from '../historiaclinica.service';


@Component({
  selector: 'app-form-historiaclinica',
  templateUrl: './form-historiaclinica.component.html',
  styleUrls: ['./form-historiaclinica.component.css']
})
export class FormHistoriaclinicaComponent implements OnInit {

  form: FormGroup;

  @Input() historiaclinica: HistoriaClinica = new HistoriaClinica();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private historiaclinicaService: HistoriaclinicaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      
      numeroFicha:[this.historiaclinica.numeroFicha, [Validators.required]],
      observacion: [this.historiaclinica.observacion, [Validators.required, Validators.minLength(5),Validators.maxLength(700)]],
      diagnostico: [this.historiaclinica.diagnostico, [Validators.required, Validators.minLength(5),Validators.maxLength(700)]],
      tratamiento: [this.historiaclinica.tratamiento, [Validators.required, Validators.minLength(5),Validators.maxLength(700)]],
                                     
    });
  }

  save() {
    this.onSubmit.emit(this.form.value);
  }
}
