import { Component, OnInit } from '@angular/core';
import {WSService} from '../../servicios/ws.service';
import {UserClass} from '../../clases/UserClass';
import {subscribeOn} from 'rxjs/operators';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {Router} from '@angular/router';
import {domRendererFactory3} from '@angular/core/src/render3/interfaces/renderer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public valor1: string;
  public valor2: string;
  public resultado: number;
  private userClasses: Array<UserClass>;
  private userClass: UserClass;

  private nombreUsuario: string;
  private passUsuario: string;
  private usuario: string;

  constructor(private wsService: WSService,
              public router: Router) { }

  ngOnInit() {
  }
  public sumar() {

    this.wsService.get<Array<UserClass>>('/usuario/getOneus/?nombre=luis', '')
      .subscribe(data => {
        this.userClasses = data;
       // this.username = this.userClasses.toString();
         console.log(this.userClasses);
      }, error => {
        console.log(error);
      });

    this.resultado =
      parseInt(this.valor1, 10) +
      parseInt(this.valor2, 10);
  }

  public login(){
    const direccion = '/usuario/getOneus/?nombre=' + this.nombreUsuario;
    console.log(direccion);
    this.wsService.get<UserClass>(direccion,'')
      .subscribe( data => {
        this.userClass = data;

        if (this.userClass.nombre === this.nombreUsuario && this.userClass.pass === this.passUsuario && this.userClass.estado  ){
          console.log('log');
          this.router.navigate(['main']);
        } else {
          console.log('no log');
        }
       }, error => {
        console.log('revento');
      });
  }

  public getAuser(){
    this.wsService.get<UserClass>('/usuario/getOneus/?nombre=luis', '')
      .subscribe(data => {
        //evita tipo array
        this.userClass = data;
       // this.username= this.userClass.nombre;
        // this.username = this.userClass.toString();
        console.log(this.userClass.nombre);
      }, error => {
        console.log(error);
      });
  }

  public restar() {
    this.wsService.post<Array<UserClass>>('/usuario/insert', { 'nombre': 'luis', 'usuario': 'us', 'pass': '1234'}, '')
      .subscribe(data => {
        console.log(data);
      });
   }

   public multiplicar() {
    this.wsService.update<Array<UserClass>>('/usuario/update', { 'nombre': 'luis', 'usuario': 'us', 'pass': '1234'}, '')
      .subscribe(

     );
   }
   public dividir() {

    }
}
