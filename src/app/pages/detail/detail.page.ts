import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  pokemon: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeapiService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokeApi.getPokemonById(id).subscribe({
        next: (data) => {
          this.pokemon = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error al cargar detalle', err);
          this.loading = false;
        }
      });
    }
  }

  close() {
    this.router.navigate(['/list-pokemons']);
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
