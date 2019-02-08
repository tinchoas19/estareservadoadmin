import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-lista-boliche',
  templateUrl: './lista-boliche.component.html',
  styleUrls: ['./lista-boliche.component.css']
})
export class ListaBolicheComponent implements OnInit {
  listboliches: any = [];
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
    this.apiService.traerBoliches().subscribe(x =>{
      this.listboliches = JSON.parse(x["data"])["stores"]; 
    });
  }
  irAEditar(id){
    this.router.navigate(['/home/editar-boliche',id]);
  }

  irAEventos(idd){
    this.router.navigate(['/home/eventos-boliche',idd]);
  }

  irAAdmin(id){
    let navigationExtras = {
      queryParams: {
          "usuarioid": id,
          "rolid": 3
      }
    };
    this.router.navigate(['/home/editar-usuario'],navigationExtras);
  }
}
