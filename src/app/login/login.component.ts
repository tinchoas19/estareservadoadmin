import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "../base/base.component";
import { ToastrManager } from "ng6-toastr-notifications";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent extends BaseComponent {
  constructor(private router: Router, public toastmanager: ToastrManager) {
    super(toastmanager);


  }

  ngOnInit() {}

  email: string;
  password: string;

  login() {
    //var user = this.email.toUpperCase();
    
    if (this.email == "mila" && this.password == "123") {
      this.router.navigate(["/home/reporte-general"]);
      console.log("Es mila");
    } else {
      this.mensajeError("Error", "Usuario y/o contrasenia incorrecta");
    }
  }
}
