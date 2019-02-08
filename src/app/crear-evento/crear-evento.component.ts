import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent extends BaseComponent {
  nombre: string;
  precio: string;
  fechadesde: Date;
  fechahasta: Date;
  entradas: string;
  horadesde: string;
  horahasta: string;
  imagen: string;
  horas: any = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30"];
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

  crearEvento(){
     this.apiService.crearEvento(this.nombre,this.precio,this.fechadesde,this.fechahasta,this.entradas,this.horadesde,this.horahasta,this.imagen).subscribe(x=>{
      this.mensajeExito("Creacion exitosa!", "El nuevo evento fue guardado con exito.");
      this.router.navigate(['/home/lista-evento']);
     });
  }

}
