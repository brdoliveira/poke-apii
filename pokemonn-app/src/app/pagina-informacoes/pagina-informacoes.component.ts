import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-informacoes',
  templateUrl: './pagina-informacoes.component.html',
  styleUrls: ['./pagina-informacoes.component.scss']
})
export class PaginaInformacoesComponent implements OnInit {
  nome = sessionStorage.getItem('usuario');

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
