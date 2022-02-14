import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaInformacoesComponent } from './pagina-informacoes/pagina-informacoes.component';
import { MenuComponent } from './menu/menu.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { PaginaFortesComponent } from './pagina-fortes/pagina-fortes.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PaginaInformacoesComponent,
    MenuComponent,
    PaginaListaComponent,
    PaginaPokemonComponent,
    PaginaFortesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
