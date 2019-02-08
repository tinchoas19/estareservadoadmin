import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lista-patova',
  templateUrl: './lista-patova.component.html',
  styleUrls: ['./lista-patova.component.css']
})
export class ListaPatovaComponent implements OnInit {
  listPatovas: any = [];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.traerMisPatovas().subscribe(x =>{
      console.log(x["data"]);
      this.listPatovas =x["data"];
    })
     
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

  irABorrar(id){

  }
}
