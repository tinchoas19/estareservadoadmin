import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {
  eventos: any = [];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.apiService.traerMisEventos().subscribe(x => {
      this.eventos = JSON.parse(x["data"])["evento"];
    });
  }

  irAEditar(id){
    this.router.navigate(['/home/editar-evento',id]);
  }
 
}
