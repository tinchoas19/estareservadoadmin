import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-crear-patova',
  templateUrl: './crear-patova.component.html',
  styleUrls: ['./crear-patova.component.css']
})
export class CrearPatovaComponent extends BaseComponent {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  dni: string;
  repetirpassword: string;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public toastmanager: ToastrManager) {
    super(toastmanager);
  }

  ngOnInit() {
  }

  crearPatova(){
    this.apiService.crearPatova(this.nombre,this.apellido,this.email,this.password, this.telefono, this.dni).subscribe(x=> {
      this.mensajeExito("Creacion exitosa!", "El nuevo patova fue guardado con exito.");
      this.router.navigate(['/home/lista-patova']);
    })
  }

}
