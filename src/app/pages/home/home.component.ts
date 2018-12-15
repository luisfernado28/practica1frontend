import { Component, OnInit } from '@angular/core';
import {WSService} from '../../servicios/ws.service';
import {UserClass} from '../../clases/UserClass';

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

  private username: string;
  constructor(private wsService: WSService) { }

  ngOnInit() {
  }
  public sumar() {

    this.wsService.get<Array<UserClass>>('/usuario/getOneus/?nombre=luis', '')
      .subscribe(data => {
        this.userClasses = data;
        this.username = this.userClasses.toString();
         console.log(this.userClasses);
      }, error => {
        console.log(error);
      });

    this.resultado =
      parseInt(this.valor1, 10) +
      parseInt(this.valor2, 10);
  }

  public getAuser(){
    this.wsService.get<UserClass>('/usuario/getOneus/?nombre=luis', '')
      .subscribe(data => {
        //evita tipo array
        this.userClass = data;
        this.username= this.userClass.nombre;
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
