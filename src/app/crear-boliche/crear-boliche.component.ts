import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-crear-boliche',
  templateUrl: './crear-boliche.component.html',
  styleUrls: ['./crear-boliche.component.css']
})
export class CrearBolicheComponent extends BaseComponent {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  repetirpassword: string;
  nombreboliche: string;
  direccion: string;
  descripcion: string;
  imagen: string;
  logo: string;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public toastmanager: ToastrManager) {
    super(toastmanager);
   }

  ngOnInit() {

  }

  onFileChanged(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imagen = reader.result;

  }

  onFileChangedLogo(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoadedLogo.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoadedLogo(e) {
    let reader = e.target;
    this.logo = reader.result;
  }

  crearboliche(){
    this.apiService.crearBoliche(this.nombre,this.apellido,this.email,this.password,this.nombreboliche,this.direccion,this.descripcion,this.imagen,this.logo).subscribe(x => {
      console.log(x);
      this.mensajeExito("Creacion exitosa!", "El nuevo local fue guardado con exito.");
      this.router.navigate(['/home/lista-boliche']);
    })
  }
}
