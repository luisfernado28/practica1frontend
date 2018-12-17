import { Component, OnInit } from '@angular/core';
import {WSService} from '../../servicios/ws.service';
import {UserClass} from '../../clases/UserClass';
import {computeStyle} from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private userClass: UserClass;

  private  nombre: string;
  private  ci: string;
  private  pass: string;
  private  email: string;
  private  fecha: string;

  constructor(private wsService: WSService) { }

  ngOnInit() {
  }

  public insertUser() {
    const obj: any = {
      'nombre': this.nombre, 'ci' : this.ci, 'pass': this.pass,
       'email': this.email , 'fecha': this.fecha,  'estado': 'true'
    };
    console.log(obj);


    this.wsService.post<UserClass>('/usuario/insert/', obj, '').subscribe();
  }

  public deleteUser() {
    const direccion: string = '/usuario/delete/?nombre=' + this.nombre;

    this.wsService.delete<UserClass>(direccion, '').subscribe();
  }

  public updateUser() {
    const direccion: string = '/usuario/update/?nombre=' + this.nombre;

    const obj: any = {
      'ci' : this.ci, 'pass': this.pass,
      'email': this.email , 'fecha': this.fecha,  'estado': 'true'
    };
    this.wsService.update(direccion, obj,''  ) .subscribe();
  }

  public getUser(){
    const direccion: string = '/usuario/getOneus/?nombre=' + this.nombre;

    this.wsService.get<UserClass>(direccion, '')
      .subscribe(data => {
        this.userClass = data;
      }, error1 => {
        console.log(error1);
      })
  }

}
