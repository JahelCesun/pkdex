import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi';

@Component({
  selector: 'app-list-pokemons',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './list-pokemons.page.html',
  styleUrls: ['./list-pokemons.page.scss'],
})
export class ListPokemonsPage implements OnInit {
  pokemons: any[] = [];
  loading = true;

  constructor(private pokeApi: PokeapiService, private router: Router) {}

  ngOnInit() {
    this.pokeApi.getPokemons(151).subscribe({
      next: (data) => {
        this.pokemons = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar Pokemons', err);
        this.loading = false;
      }
    });
  }

  openDetail(pokemon: any) {
    this.router.navigate(['/detail', pokemon.id]);
  }
  getTypeImage(type: string): string {
  const typeIcons: any = {
    normal: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/normal.svg',
    fire: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg',
    water: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/water.svg',
    grass: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/grass.svg',
    electric: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/electric.svg',
    ice: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ice.svg',
    fighting: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fighting.svg',
    poison: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/poison.svg',
    ground: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ground.svg',
    flying: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/flying.svg',
    psychic: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/psychic.svg',
    bug: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/bug.svg',
    rock: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/rock.svg',
    ghost: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/ghost.svg',
    dragon: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dragon.svg',
    dark: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/dark.svg',
    steel: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/steel.svg',
    fairy: 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fairy.svg',
  };
  return typeIcons[type] || '';
}
}

