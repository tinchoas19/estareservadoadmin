import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {

  }
}
