import { Component, OnInit } from '@angular/core';
import { galeria } from '../../core/models/galeria.models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public var_seccion: string;
  lista_galeria: galeria[]= [];
  public menus;

  constructor( private apiService: ApiService ) { 
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  leerdesdebanner(variable){
    if(variable=="salidaDeCampo"){
      this.var_seccion="salio de la zona";
    }else{
      this.var_seccion=variable;
    }
  }

  getCharacters(){
    this.apiService.getAllCharacters()
    .subscribe( characters=>{
      var mientras= characters.data.results;
      console.log(characters.data.results);
      this.menus = mientras;
      console.log(this.menus);
    })
  }
}
