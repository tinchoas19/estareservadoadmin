import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ListaBolicheComponent } from "./lista-boliche/lista-boliche.component";
import { EventosBolicheComponent } from "./eventos-boliche/eventos-boliche.component";
import { CrearBolicheComponent } from "./crear-boliche/crear-boliche.component";
import { ListaEventoComponent } from "./lista-evento/lista-evento.component";
import { ListaPatovaComponent } from "./lista-patova/lista-patova.component";
import { CrearPatovaComponent } from "./crear-patova/crear-patova.component";
import { CrearEventoComponent } from "./crear-evento/crear-evento.component";
import { EditarEventoComponent } from "./editar-evento/editar-evento.component";
import { EditarBolicheComponent } from "./editar-boliche/editar-boliche.component";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { ReporteGeneralComponent } from "./reporte-general/reporte-general.component";
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "lista-boliche", component: ListaBolicheComponent },
      { path: "lista-evento", component: ListaEventoComponent },
      { path: "lista-patova", component: ListaPatovaComponent },
      { path: "lista-usuarios", component: ListaUsuariosComponent },
      { path: "reporte-general", component: ReporteGeneralComponent },
      { path: "crear-boliche", component: CrearBolicheComponent },
      { path: "crear-patova", component: CrearPatovaComponent },
      { path: "crear-evento", component: CrearEventoComponent },
      { path: "editar-evento/:id", component: EditarEventoComponent },
      { path: "editar-boliche/:id", component: EditarBolicheComponent },
      { path: "editar-usuario", component: EditarUsuarioComponent },

      { path: "eventos-boliche/:id", component: EventosBolicheComponent }

    ]
  },
  { path: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
