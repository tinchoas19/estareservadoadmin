import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from ".//app-routing.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { ListaBolicheComponent } from './lista-boliche/lista-boliche.component';
import { CrearBolicheComponent } from './crear-boliche/crear-boliche.component';
import { ListaEventoComponent } from './lista-evento/lista-evento.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EventosBolicheComponent } from './eventos-boliche/eventos-boliche.component';
import { ListaPatovaComponent } from './lista-patova/lista-patova.component';
import { CrearPatovaComponent } from './crear-patova/crear-patova.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarBolicheComponent } from './editar-boliche/editar-boliche.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { BaseComponent } from './base/base.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ListaBolicheComponent,
    CrearBolicheComponent,
    ListaEventoComponent,
    CrearEventoComponent,
    EventosBolicheComponent,
    CrearBolicheComponent,
    ListaPatovaComponent,
    CrearPatovaComponent,
    ListaUsuariosComponent,
    EditarBolicheComponent,
    EditarEventoComponent,
    ReporteGeneralComponent,
    EditarUsuarioComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
