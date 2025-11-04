import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full'
  },
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module').then(m => m.ListPokemonsPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module').then( m => m.ListPokemonsPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
