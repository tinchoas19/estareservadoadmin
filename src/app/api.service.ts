import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Data } from "@angular/router";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  API_URL = "http://ctrlztest.com.ar/estareservado/";

  data: Observable<any>;
  localid: number = 1;
  constructor(private httpClient: HttpClient, private httpPost: Http) { }

  traerBoliches() {
    return this.httpClient.get(
      this.API_URL + "traerlocales.php"
    );
  }


  traerEventosPorBoliche(bolicheid) {
    return this.httpClient.get(
      this.API_URL + "traereventosxlocal.php?localid=" + bolicheid
    );
  }

  traerEventoDetalle(eventoid) {
    return this.httpClient.get(
      this.API_URL + "traereventodetalle.php?eventoid=" + eventoid
    );
  }

  traerMisEventos() {
    return this.httpClient.get(
      this.API_URL + "traereventosxlocal.php?localid=" + this.localid
    );
  }

  traerBolicheDetalle(bolicheid){
    return this.httpClient.get(
      this.API_URL + "traerlocaldetalle.php?localid=" + bolicheid
    );
  }

  traerUsuarioDetalle(usuarioid){
    return this.httpClient.get(
      this.API_URL + "traerusuariodetalle.php?usuarioid=" + usuarioid
    );
  }

  traerUsuarioDetallePorLocalyRol(localid,rolid){
    return this.httpClient.get(
      this.API_URL + "traerusuarioporlocalyrol.php?localid=" + localid + "&rolid=" + rolid
    );
  }

  traerMisPatovas() {
    return this.httpClient.get(
      this.API_URL + "traerpatovasporlocal.php?localid=" + this.localid
    );
  }

  traerUsuariosRegistrados() {
    return this.httpClient.get(
      this.API_URL + "traerusuarioregistrados.php"
    );
  }

   crearBoliche(nombre,apellido,email,password,nombreboliche,direccion,descripcion,imagen,logo): Observable<any> {
    let addNewsUrl = this.API_URL + "crearlocal.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({
      nombre:nombre,
      apellido:apellido,
      email:email,
      password:password,
      nombreboliche:nombreboliche,
      direccion:direccion,
      descripcion:descripcion,
      imagen:imagen,
      logo:logo
    });
    console.log("body crearlocal",body);
    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }

  
  crearEvento(nombre,precio,fechadesde,fechahasta,entradas,horadesde,horahasta,foto): Observable<any> {
    let addNewsUrl = this.API_URL + "crearevento.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({
      nombre:nombre,
      precio:precio,
      foto: foto,
      fechadesde:fechadesde,
      fechahasta:fechahasta,
      cantidadentradas:entradas,
      horariodesde:horadesde,
      horariohasta:horahasta,
      localid: this.localid
    });

    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }

  crearPatova(nombre,apellido,email,password, telefono, dni): Observable<any> {
    let addNewsUrl = this.API_URL + "crearpatova.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({
      nombre:nombre,
      apellido:apellido,
      email:email,
      password:password,
      telefono:telefono,
      dni:dni,
      localid: this.localid
    });

    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }

  editarEvento(evento): Observable<any> {
    let addNewsUrl = this.API_URL + "crearevento.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({
      eventoid: evento.id,
      nombre:evento.nombre,
      precio:evento.precio,
      foto: evento.foto,
      fechadesde:evento.fechadesde,
      fechahasta:evento.fechahasta,
      cantidadentradas:evento.entradas,
      horariodesde:evento.horadesde,
      horariohasta:evento.horahasta
    });

    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }

  editarLocal(local): Observable<any> {
    let addNewsUrl = this.API_URL + "editarlocal.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({    
      nombre:local.nombre,
      direccion:local.direccion,
      descripcion:local.descripcion,
      imagen:local.foto,
      logo:local.logo,
      activo:local.activo,
      localid: local.id
    });
    console.log("editar local", body);
    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }

  editarUsuario(usuario): Observable<any> {
    let addNewsUrl = this.API_URL + "editarusuario.php";

    var headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
    headers.append("Accept", "application/json");
    headers.append("content-type", "application/json");

    const requestOptions = new RequestOptions({ headers: headers });

    var body = JSON.stringify({
      nombre:usuario.nombre,
      apellido:usuario.apellido,
      email:usuario.email,
      password:usuario.password,
      telefono:usuario.telefono,
      dni:usuario.dni,
      activo:usuario.activo,
      usuarioid:usuario.usuarioid
    });

    return this.httpPost.post(addNewsUrl, body, { headers: headers, withCredentials: true });
  }


  // getFaqs() {
  //   return this.httpClient.get(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/traerfaq.php"
  //   );
  // }

  // getPhones() {
  //   return this.httpClient.get(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/traertelefonos.php"
  //   );
  // }

  // getNews() {
  //   return this.httpClient.get(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/traernoticias.php"
  //   );
  // }

  // getTerms() {
  //   return this.httpClient.get(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/traerterminos.php"
  //   );
  // }

  // // ***********************************************************
  // // ---------------- CREATE
  // // ***********************************************************

  // createPhone(
  //   nombre: string,
  //   detalle: string,
  //   numero: string
  // ): Observable<any> {
  //   let addNewsUrl =
  //     "http://ctrlztest.com.ar/mila-admin/apirest/creartelefono.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     nombre: nombre,
  //     detalle: detalle,
  //     numero: numero
  //   });

  //   return this.httpPost.post(addNewsUrl, body, {
  //     headers: headers,
  //     withCredentials: true
  //   });
  // }

  // createNews(titulo: string, detalle: string, fecha: string): Observable<any> {
  //   let addNewsUrl =
  //     "http://ctrlztest.com.ar/mila-admin/apirest/crearnoticia.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     titulo: titulo,
  //     detalle: detalle,
  //     fecha: fecha
  //   });

  //   return this.httpPost.post(addNewsUrl, body, {
  //     headers: headers,
  //     withCredentials: true
  //   });
  // }

  // createFaq(
  //   pregunta: string,
  //   respuesta: string,
  //   orden: string
  // ): Observable<any> {
  //   let addNewsUrl = "http://ctrlztest.com.ar/mila-admin/apirest/crearfaq.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     pregunta: pregunta,
  //     respuesta: respuesta,
  //     orden: orden
  //   });

  //   return this.httpPost.post(addNewsUrl, body, {
  //     headers: headers,
  //     withCredentials: true
  //   });
  // }

  // // ***********************************************************
  // // ---------------- EDIT
  // // ***********************************************************

  // editPhone(
  //   telefonoid: any,
  //   nombre: any,
  //   detalle: any,
  //   numero: any
  // ): Observable<any> {
  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     telefonoid: telefonoid,
  //     nombre: nombre,
  //     detalle: detalle,
  //     numero: numero
  //   });
  //   console.log("body", body);

  //   return this.httpPost.post(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/editartelefono.php",
  //     body,
  //     { headers: headers, withCredentials: true }
  //   );
  // }

  // editNews(
  //   noticiaid: any,
  //   titulo: any,
  //   detalle: any,
  //   fecha: any
  // ): Observable<any> {
  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     noticiaid: noticiaid,
  //     titulo: titulo,
  //     detalle: detalle,
  //     fecha: fecha
  //   });
  //   console.log("body", body);

  //   return this.httpPost.post(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/editarnoticia.php",
  //     body,
  //     { headers: headers, withCredentials: true }
  //   );
  // }

  // editFaqs(
  //   faqid: any,
  //   pregunta: any,
  //   respuesta: any,
  //   orden: any
  // ): Observable<any> {
  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     faqid: faqid,
  //     pregunta: pregunta,
  //     respuesta: respuesta,
  //     orden: orden
  //   });

  //   return this.httpPost.post(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/editarfaq.php",
  //     body,
  //     { headers: headers, withCredentials: true }
  //   );
  // }

  // editTerms(parametroid: any, valor: any): Observable<any> {
  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     parametroid: parametroid,
  //     valor: valor
  //   });

  //   console.log("ASD", body);

  //   return this.httpPost.post(
  //     "http://ctrlztest.com.ar/mila-admin/apirest/editarparametro.php",
  //     body,
  //     { headers: headers, withCredentials: true }
  //   );
  // }

  // // ***********************************************************
  // // ---------------- DELETE
  // // ***********************************************************

  // deleteNews(noticiaid: string): Observable<any> {
  //   let url = "http://ctrlztest.com.ar/mila-admin/apirest/borrarnoticia.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     noticiaid: noticiaid
  //   });

  //   if (confirm("Se borrará el item Nº " + noticiaid)) {
  //     return this.httpPost.post(url, body, {
  //       headers: headers,
  //       withCredentials: true
  //     });
  //   } else {
  //     console.log("Cancelado");
  //   }
  // }

  // deletePhones(telefonoid: string): Observable<any> {
  //   let url = "http://ctrlztest.com.ar/mila-admin/apirest/borrartelefono.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     telefonoid: telefonoid
  //   });

  //   if (confirm("Se borrará el item Nº " + telefonoid)) {
  //     return this.httpPost.post(url, body, {
  //       headers: headers,
  //       withCredentials: true
  //     });
  //   } else {
  //     console.log("Cancelado");
  //   }
  // }

  // deleteFaqs(faqid: string): Observable<any> {
  //   let url = "http://ctrlztest.com.ar/mila-admin/apirest/borrarfaq.php";

  //   var headers = new Headers();
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
  //   headers.append("Accept", "application/json");
  //   headers.append("content-type", "application/json");

  //   const requestOptions = new RequestOptions({ headers: headers });

  //   var body = JSON.stringify({
  //     faqid: faqid
  //   });

  //   if (confirm("Se borrará el item Nº " + faqid)) {
  //     return this.httpPost.post(url, body, {
  //       headers: headers,
  //       withCredentials: true
  //     });
  //   } else {
  //     console.log("Cancelado");
  //   }
  // }
}
