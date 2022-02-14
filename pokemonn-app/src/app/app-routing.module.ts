import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaInformacoesComponent } from './pagina-informacoes/pagina-informacoes.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';
import { PaginaPokemonComponent } from './pagina-pokemon/pagina-pokemon.component';
import { PaginaFortesComponent } from './pagina-fortes/pagina-fortes.component';

const routes: Routes = [
{ path:'', redirectTo:'inicial', pathMatch:'full'},
{ path: 'inicial', component: PaginaInicialComponent },
{ path: 'informacoes', component: PaginaInformacoesComponent},
{ path: 'lista', component:PaginaListaComponent},
{ path: 'pokemon', component:PaginaPokemonComponent},
{ path: 'fortes', component:PaginaFortesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
