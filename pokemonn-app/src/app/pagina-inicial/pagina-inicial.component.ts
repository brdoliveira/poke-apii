import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  
  senhaIn:string = "";
  usuarioIn:string = "";

  verificacao(){
    let usuario = "bruno"
    let senha = "abc"


    let verificacao_usuario = (usuario == this.usuarioIn);
    let verificacao_senha = (senha == this.senhaIn);

    if((verificacao_usuario) && (verificacao_senha)){
      console.log("Senha Correta");
      window.location.href = "informacoes";
      sessionStorage.setItem('usuario', usuario);
    }else{
      alert("Usuário e/ou Senha Incorreto!")
    }
  }
}