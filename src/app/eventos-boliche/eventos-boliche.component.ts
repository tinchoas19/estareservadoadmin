import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-eventos-boliche',
  templateUrl: './eventos-boliche.component.html',
  styleUrls: ['./eventos-boliche.component.css']
})
export class EventosBolicheComponent implements OnInit {
  eventos: any = [];
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiService.traerEventosPorBoliche(id).subscribe(x => {
      this.eventos = JSON.parse(x["data"])["evento"];
    });

  }

  irAEditar(id){

  }

  borrarEvento(id){

  }

}
