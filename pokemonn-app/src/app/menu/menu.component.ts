import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sair(){
    sessionStorage.clear();
    window.location.href = ""
  }
  
  pokemonAleatorio(){
    console.log(sessionStorage);
    sessionStorage.removeItem("id");
    console.log(sessionStorage);
  }
}
