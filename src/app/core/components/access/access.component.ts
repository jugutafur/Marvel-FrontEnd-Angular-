import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { usuarios } from '../../models/galeria.models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  registro : usuarios; 
  public registros;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  crearUsuario(){
    this.apiService.loginAcount()
    .subscribe(newUserX=>{
      var registros= newUserX;
      console.log(newUserX);
      console.log("aca")
      console.log(registros['name']);
    })
    alert("usuario create");
  }

  formularioLogin = new FormGroup({
    email : new FormControl("", [
      Validators.required, 
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(100)]),
    password : new FormControl("", [
      Validators.required,
      Validators.minLength(4)])
  })

}
