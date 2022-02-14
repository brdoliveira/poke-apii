import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-fortes',
  templateUrl: './pagina-fortes.component.html',
  styleUrls: ['./pagina-fortes.component.scss']
})
export class PaginaFortesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.validar()
  }

  validar(){
    if(sessionStorage.getItem('usuario') == null){
      window.location.href = ""
    }
  }
}
