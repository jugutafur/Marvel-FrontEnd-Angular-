import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private apiService: ApiService ) { }

  ngOnInit(): void {
  }
/*
  crearUsuario(){
    this.apiService.createUser(this.miformulario.value)
    .subscribe(newUserX=>{
      console.log(newUserX);
    })
    alert("usuario create");
  }*/

  miformulario = new FormGroup({
    name : new FormControl('',Validators.required),
    identification : new FormControl('',Validators.required),
    email : new FormControl('',[
      Validators.email,
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]),
    password : new FormControl('',
    [Validators.required,
    Validators.minLength(4)])
  })

  validar(){
    alert("enviar a ingreso");
  }
}
