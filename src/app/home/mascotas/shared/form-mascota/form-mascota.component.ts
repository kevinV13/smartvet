import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Mascota } from '../mascota.model';
import { MascotaService } from '../mascota.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-form-mascota',
  templateUrl: './form-mascota.component.html',
  styleUrls: ['./form-mascota.component.css']
})

export class FormMascotaComponent implements OnInit {
  form: FormGroup;
  clientes:Cliente[];
  myControlCliente = new FormControl(null,Validators.required);
  clientesFiltrados$: Observable<Cliente[]>;
  cliente: Cliente;
  mascota: Mascota;
  @Output() onSave: EventEmitter<any>= new EventEmitter();
  constructor(
    private mascotaService: MascotaService,
    private clienteService: ClienteService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
    ngOnInit(): void {
    this.form=new FormGroup({
      nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(70)]),
      especie: new FormControl('',Validators.required),
      raza: new FormControl('',Validators.required),
      sexo: new FormControl('',Validators.required),
      edad: new FormControl('',Validators.required),
      cliente:this.myControlCliente,
    });
      
    this.listarClientes();
      
    this.clientesFiltrados$ = this.myControlCliente.valueChanges.pipe(
      map((val) => this.filtrarClientes(val))
      );
    }
      
    listarClientes(){
      this.clienteService.getAllClientes().subscribe((data:any)=> {
        console.log(data['body']);
        this.clientes=data['body'];
      });
    }
      
    filtrarClientes(val: any){
      if (val != null && val.idcliente>0){
        return this.clientes.filter((el) =>
            el.nombreCliente.toLowerCase().includes(val.nombreCliente.toLowerCase())
        );
      }
      return this.clientes.filter((el) =>
          el.nombreCliente.toLowerCase().includes(val?.toLowerCase())
      );
    }
  
    mostrarCliente(val:Cliente){
      return val ? `${val.nombreCliente}` : val;
    }

    save(){
      let mascota = new Mascota();
      this.cliente=this.form.value['cliente']
      mascota.cliente=this.cliente;
      mascota.nombre=this.form.value['nombre']
      mascota.especie=this.form.value['especie']
      mascota.raza=this.form.value['raza']
      mascota.sexo=this.form.value['sexo']
      mascota.edad=this.form.value['edad']
      console.log(mascota);
      this.onSave.emit(mascota);
    }
  }



