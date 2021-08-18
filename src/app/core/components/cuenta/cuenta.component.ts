import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../services/api.service';
import { usuarios } from '../../models/galeria.models';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  lista_Usuarios: usuarios[]= [];

  constructor(private apiService: ApiService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.fetchGetUsers();
  }

  fetchGetUsers(){
    this.route.params.subscribe((params: Params)=>{
      console.log(params);
      const interar = params.id;
      console.log(interar);
      this.apiService.getXUser(interar)
      .subscribe(userX=>{
        this.lista_Usuarios=userX;
        console.log(userX)
      });
    });
  }

  updateUsers(){
    const editUser: Partial<usuarios>={
      name : "cambioNombre",
      identification  : "cambioIdentification"
    }
    this.apiService.updateUser('2',editUser)
    .subscribe(editUser=>{
      console.log(editUser)
    });
  }

  crearUsuario(){
    const newUser: usuarios = {
      name : "newUser",
      identification  : "newIdentification",
      email : "newEmail@gmail.com",
      password : "cla000",
    }
    this.apiService.createUser(newUser)
    .subscribe(newUserX=>{
      console.log(newUserX);
    })
    console.log("vas a crear usuarios");
  }
}
