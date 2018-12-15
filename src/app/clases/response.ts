import { Usuario } from './usuario';
export class Response {
  constructor(
    public user: Usuario,
    public estado: boolean,
    public mensaje: string,
    public lstUsuarios: Array<Usuario>
  ) {

  }
}
