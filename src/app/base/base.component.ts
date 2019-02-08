import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  constructor(public toastr: ToastrManager) {}

  ngOnInit() {
  }

  mensajeExito(titulo, mensaje) {
    this.toastr.successToastr(mensaje,titulo);
  }

  mensajeError(titulo, mensaje) {
    this.toastr.errorToastr(mensaje,titulo);
  }

}
