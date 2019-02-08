import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { BaseComponent } from '../base/base.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent extends BaseComponent {
  usuario: any = [];
  id: string;
  rolid: string;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public toastmanager: ToastrManager) {
    super(toastmanager);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params["usuarioid"];
      this.rolid = params["rolid"];
      if (parseInt(this.rolid) > 0) {
        this.apiService.traerUsuarioDetallePorLocalyRol(this.id, this.rolid).subscribe(x => {
          console.log(x["data"][0]);
          this.usuario = x["data"][0];
          this.usuario.repetirpassword = this.usuario.password;
        });
      }
      else {
        this.apiService.traerUsuarioDetalle(this.id).subscribe(x => {
          console.log(x["data"][0]);
          this.usuario = x["data"][0];
          this.usuario.repetirpassword = this.usuario.password;
        });
      }
    });

  }

  edtiarUsuario() {
    this.apiService.editarUsuario(this.usuario).subscribe(x=>{
      this.mensajeExito("Modificacion exitosa!", "El usuario fue modificado con exito.");
      this.router.navigate(['/home']);
    })
  }

}
