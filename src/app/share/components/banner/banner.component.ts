import { 
  Component, 
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Output() salida:EventEmitter<string>= new EventEmitter();

  menu=[];
  public salidaDeCampo : string;

  constructor(
    // private router:Router
    ) {
    this.menu= ["Characters", "Comics", "Movies"];
    this.salidaDeCampo= "fuera";
  }

  ngOnInit(): void {
  }

  seleccion(valor: string){
    this.salida.emit(valor);
  }

  menu2(valor: string ){
    if(valor=="Characters"){
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Characters");
    }
    if(valor=="Comics"){
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Comics");
    }
    if(valor=="Movies"){
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Movies");
    }
      console.log("mensaje de prueba de click "+ valor);
  }

}
