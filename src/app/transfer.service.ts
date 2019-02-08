import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TransferService {
  constructor(private router: Router) {}

  data: string;

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  // clearData() {
  //   this.data = undefined;
  // }
}
