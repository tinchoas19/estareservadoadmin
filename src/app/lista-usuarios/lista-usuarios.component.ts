import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any = [];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.traerUsuariosRegistrados().subscribe(x => {
      console.log(x["data"]);
      this.usuarios = x["data"];
    });
  }

  irAEditar(id){
    let navigationExtras = {
      queryParams: {
          "usuarioid": id,
          "rolid": 0
      }
    };
    this.router.navigate(['/home/editar-usuario'],navigationExtras);
  }

}
