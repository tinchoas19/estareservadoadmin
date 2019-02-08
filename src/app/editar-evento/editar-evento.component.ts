import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { BaseComponent } from '../base/base.component';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent  extends BaseComponent {
  evento: any = [];
  imagenactual: string;
  horas: any = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30"];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public toastmanager: ToastrManager) {
    super(toastmanager);
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.traerEventoDetalle(id).subscribe(x =>{
      console.log(JSON.parse(x["data"])["evento"][0]);
      this.evento = JSON.parse(x["data"])["evento"][0];
      this.imagenactual = this.apiService.API_URL + this.evento.foto;
      this.evento.foto = "";
    });
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
    this.evento.foto = reader.result;

  }

  editarEvento(){
    this.apiService.editarEvento(this.evento).subscribe(x=>{
      this.mensajeExito("Modificacion exitosa!", "El evento fue modificado con exito.");
      this.router.navigate(['/home/lista-evento']);
    })
  }
}
