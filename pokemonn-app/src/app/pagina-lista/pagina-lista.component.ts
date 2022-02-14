import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.scss']
})
export class PaginaListaComponent implements OnInit {
  lista = [];

  
  constructor() { }
  
  ngOnInit(): void {
    this.validar()
    this.pokemon()
  }
  
  validar(){
    if(sessionStorage.getItem('usuario') == null){
      window.location.href = ""
    }
  }
  
  pokemon(){
    let lista_id = []     
    let min = 1;
    let max = 898;

    for(let i = 1; i <= 10; i++){ 
      let id_aleatorio = Math.random() * (max - min + 1)
      id_aleatorio = Math.ceil(id_aleatorio)
      lista_id.push(id_aleatorio)
    }

    this.listaPokemon(lista_id)
  }
  
  // Informações do Pokemon
  listaPokemon(lista){
    for(let id of lista){
    fetch('https://pokeapi.co/api/v2/pokemon/'+ id, {
      method: "GET",
      mode: "cors"
    }).then((resposta)=>{
      // console.log(resposta);
      resposta.json().then((data)=>{
        //console.log(data);
        let id = data.id;
        let nome = data.name;
        let pose_1 = data.sprites.front_default;
        let hp = data.stats[0].base_stat;
        let ataque = data.stats[1].base_stat;
        let defesa = data.stats[2].base_stat;
        let pokemon = {
          "id": id,
          "nome" : nome,
          "pose" : pose_1,
          "hp" : hp,
          "ataque" : ataque,
          "defesa" : defesa
        }
        this.lista.push(pokemon)
        //console.log(pose_1)
      });
    }).catch(function(erro){
      console.log(erro);    
    });
    }
  console.log(this.lista)
  }

  procurarPokemon(){
    this.lista = []

    let nome_pokemon = (document.getElementById("pokemon") as HTMLInputElement).value;
    nome_pokemon = nome_pokemon.toLowerCase()
    fetch('https://pokeapi.co/api/v2/pokemon/'+ nome_pokemon, {
      method: "GET",
      mode: "cors"
    }).then((resposta)=>{
      // console.log(resposta);
      resposta.json().then((data)=>{
        //console.log(data);
        let id = data.id;
        let nome = data.name;
        let pose_1 = data.sprites.front_default;
        let hp = data.stats[0].base_stat;
        let ataque = data.stats[1].base_stat;
        let defesa = data.stats[2].base_stat;
        let pokemon = {
          "id": id,
          "nome" : nome,
          "pose" : pose_1,
          "hp" : hp,
          "ataque" : ataque,
          "defesa" : defesa
        }
        this.lista.push(pokemon)
        //console.log(pose_1)
      });
    }).catch(function(erro){
      console.log(erro);    
    });
  }

  pokemonDetalhes(id){
    sessionStorage.setItem('id',id)
    window.location.href = "pokemon"
  }
}