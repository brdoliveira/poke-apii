import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-pokemon',
  templateUrl: './pagina-pokemon.component.html',
  styleUrls: ['./pagina-pokemon.component.scss']
})
export class PaginaPokemonComponent implements OnInit {
  cores  = [
    "#D3D3D3",
    "#CE2028",
    "#6699FF",
    "#339933",
    "#FFFF99",
    "#d47b4a",
    "#c0c6c7",
    "#c7bb3d",
    "#6f6261",
    "#555555",
    "#FF5349",
    "#e39ff6",
    "#FCAE1E",
    "#C5CDD8",
    "#A11B1B",
    "#c38575"];

  tipos = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ground",
    "steel",
    "bug",
    "rock",
    "dark",
    "dragon",
    "fairy",
    "psychic",
    "ghost",
    "fighting",
    "poison"];

  nome:any;
  peso:any;
  altura:any;
  habilidades:any;
  pose_1:any;
  pose_2:any;
  pose_3:any;
  pose_4:any;
  exp:any;
  locals:any;
  ataque:any;
  defesa:any;
  hp:any;
  tipo:any;
  x: number;
  
  slides =  [];
  constructor() {
  }
  
  ngOnInit(): void {
    this.slides = []
    this.validar()
    this.pokemon()
    this.x = 0;
  }

  validar(){
    if(sessionStorage.getItem('usuario') == null){
      window.location.href = ""
    }
  }

  pokemon(){
    this.x = 0;
    let id_gerado;
    if(sessionStorage.getItem("id") == undefined){
      let min = 1;
      let max = 898;

      id_gerado = Math.random() * (max - min + 1)
      id_gerado = Math.ceil(id_gerado)
    }else{
      id_gerado = sessionStorage.getItem("id")
    };
    this.verPokemon(id_gerado)
  }
  
  // Informações do Pokemon
  verPokemon(retorno_id:number) {  
    fetch('https://pokeapi.co/api/v2/pokemon/'+retorno_id, {
      method: "GET",
      mode: "cors"
    }).then((resposta)=>{
      // console.log(resposta);
      resposta.json().then((data)=>{
        console.log(data);
        this.nome = data.name;
        this.peso = data.weight;
        this.altura = data.height;
        this.exp = data.base_experience;

        this.pose_1 = data.sprites.front_default;
        this.pose_2 = data.sprites.other.home.front_default;
        this.pose_3 = data.sprites.other.dream_world.front_default;      
        this.pose_4 = data.sprites.other['official-artwork'].front_default;
        
        if(this.pose_1 != null){
          this.slides.push(this.pose_2)
        } 
        
        if(this.pose_2 != null){
          this.slides.push(this.pose_1)
        }
        
        if(this.pose_3 != null){
          this.slides.push(this.pose_3)
        }

        if(this.pose_4 != null){
          this.slides.push(this.pose_4)
        }

        this.habilidades = data.abilities;
        this.hp = data.stats[0].base_stat;
        this.corHp(this.hp)
        this.ataque = data.stats[1].base_stat;
        this.corAtaque(this.ataque)
        this.defesa = data.stats[2].base_stat;
        this.corDefesa(this.defesa)
        //console.log(this.habilidades)
        let local = data.location_area_encounters;
        this.verLocal(local)
        this.tipo = data.types[0].type.name
        this.corPokemon(this.tipo)
      });
    }).catch(function(erro){
      console.log(erro);    
    });
  }
  
  
  // Informaçoes do local
  verLocal(local){
    let url = local;
    
    fetch(url, {
      method: "GET",
      mode: "cors"
    }).then((resposta)=>{
      // console.log(resposta);
      resposta.json().then((data)=>{
        this.locals = data
      });
    }).catch(function(erro){
      console.log(erro);    
    });
  }

  // Gerar id de um Pokemon Aleatorio
  pokemonAleatorio(){
    this.slides = []
    sessionStorage.removeItem("id");
    this.pokemon()
  }

  // Cor da pagina
  corPokemon(tipo){
    for(let i = 0; i <= this.tipos.length; i++){
      if(this.tipos[i] == tipo){
        document.getElementById("cor-container").style.backgroundColor = this.cores[i];
      }
    }
  }

  corHp(hp){
    if(hp >= 0 && hp <= 25){
      document.getElementById("info-hp").style.backgroundColor = "red";
    }else if(hp >= 26 && hp <= 50){
      document.getElementById("info-hp").style.backgroundColor = "orange";
    }else if(hp >= 51 && hp <= 75){
      document.getElementById("info-hp").style.backgroundColor = "yellow";
    }else if(hp >= 76 && hp <= 99){
      document.getElementById("info-hp").style.backgroundColor = "green";
    }else if(hp >= 100){
      document.getElementById("info-hp").style.backgroundColor = "blue";
    }else{
      document.getElementById("info-hp").style.backgroundColor = "white";
    }
  }
  corAtaque(ataque){
    if(ataque >= 0 && ataque <= 25){
      document.getElementById("info-ataque").style.backgroundColor = "red";
    }else if(ataque >= 26 && ataque <= 50){
      document.getElementById("info-ataque").style.backgroundColor = "orange";
    }else if(ataque >= 51 && ataque <= 75){
      document.getElementById("info-ataque").style.backgroundColor = "yellow";
    }else if(ataque >= 76 && ataque <= 99){
      document.getElementById("info-ataque").style.backgroundColor = "green";
    }else if(ataque >= 100){
      document.getElementById("info-ataque").style.backgroundColor = "blue";
    }else{
      document.getElementById("info-ataque").style.backgroundColor = "white";
    }
  }
  corDefesa(defesa){
    if(defesa >= 0 && defesa <= 25){
      document.getElementById("info-defesa").style.backgroundColor = "red";
    }else if(defesa >= 26 && defesa <= 50){
      document.getElementById("info-defesa").style.backgroundColor = "orange";
    }else if(defesa >= 51 && defesa <= 75){
      document.getElementById("info-defesa").style.backgroundColor = "yellow";
    }else if(defesa >= 76 && defesa <= 99){
      document.getElementById("info-defesa").style.backgroundColor = "green";
    }else if(defesa >= 100){
      document.getElementById("info-defesa").style.backgroundColor = "blue";
    }else{
      document.getElementById("info-defesa").style.backgroundColor = "white";
    }
  }


showSlide(slides, x) {
    let slide = slides[x];
    return slide;
}

getPrev(slides) {
    this.x = this.x - 1;
    if(this.x < 0 ){
      this.x = (this.slides.length - 1)
    }
    this.showSlide(slides, this.x)

    
}

getNext(slides) {
  this.x = this.x + 1;
  if(this.x >= (this.slides.length - 1)){
    this.x = 0;
  }  
  this.showSlide(slides, this.x)

}
  }
