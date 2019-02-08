import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-editar-boliche',
  templateUrl: './editar-boliche.component.html',
  styleUrls: ['./editar-boliche.component.css']
})
export class EditarBolicheComponent extends BaseComponent {

  local: any = [];
  fotoactual: string;
  logoactual: string;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public toastmanager: ToastrManager) {
    super(toastmanager);
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.apiService.traerBolicheDetalle(id).subscribe(x =>{
      this.local = JSON.parse(x["data"])["store"][0];
      this.logoactual = this.apiService.API_URL + this.local.logo;
      this.local.logo = "";
      this.fotoactual = this.apiService.API_URL + this.local.foto;
      this.local.foto = "";
      console.log(this.fotoactual);
      console.log(this.local)
    });
  }
  
  editarLocal(){
    this.apiService.editarLocal(this.local).subscribe(x =>{
      this.mensajeExito("Modificacion exitosa!", "El local fue modificado con exito.");
      this.router.navigate(['/home/lista-boliche']);
    })
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
    this.local.foto = reader.result;

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
    this.local.logo = reader.result;

  }
}
