import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { Mascota } from '../shared/mascota.model';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-edit-mascota',
  templateUrl: './edit-mascota.component.html',
  styleUrls: ['./edit-mascota.component.css']
})
export class EditMascotaComponent implements OnInit {
  idMascota : number;
  idcliente : number;
  public mascota:Mascota;
  public cliente:Cliente;
  @Input() mascotaEdit: Mascota = new Mascota();

  constructor(public mascotaService: MascotaService,private router:Router,
    private activeRoute: ActivatedRoute, public clienteService: ClienteService, private formBuilder: FormBuilder) { 
      this.activeRoute.paramMap.subscribe(paramMap =>{
        this.idMascota = Number(paramMap.get('id'));
        this.mascotaService.get(this.idMascota).subscribe((data:any)=>{
          this.mascota=data;
          console.log(this.mascota);
        });
        this.activeRoute.paramMap.subscribe((paramMap) =>{
          this.idcliente = Number(paramMap.get('id'));
          this.clienteService.get(this.idcliente).subscribe((data:any)=>{
            this.cliente=this.mascota.cliente;
            console.log(this.cliente);
          })
        })
      })
    }

  ngOnInit(): void {
  }

  update(mascota:any){
    this.mascotaService.update(mascota).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/mascotas'])
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  form=new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(70)]),
    especie: new FormControl('',Validators.required),
    raza: new FormControl('',Validators.required),
    sexo: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    
  });

  save(form: Mascota){
    form.idMascota = this.idMascota;
    form.cliente = this.cliente;
    this.mascotaService.update(form).subscribe(()=>{
      this.router.navigate(['/mascotas']);
    },(error:any)=>{

    })
  }


}
