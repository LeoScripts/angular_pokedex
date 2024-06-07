import { Component } from '@angular/core';
import { PokecardComponent } from '../pokecard/pokecard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [CommonModule, PokecardComponent],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss',
})
export class PokelistComponent {
  pokes: Poke[] = [
    {
      id: 1,
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/153.png',
      name: 'tiranosauro rex',
      types: [Type.dragon, Type.poison],
    },
    {
      id: 1,
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/153.png',
      name: 'tiranosauro rex',
      types: [Type.dragon, Type.poison],
    },
    {
      id: 1,
      img: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/153.png',
      name: 'tiranosauro rex',
      types: [Type.dragon, Type.poison],
    },
  ];
}

export interface Poke {
  id: number;
  name: string;
  img: string;
  types: Type[];
}

enum Type {
  bug = 'bug',
  dark = 'dark',
  dragon = 'dragon',
  electric = 'electric',
  fairy = 'fairy',
  fighting = 'fighting',
  fire = 'fire',
  flying = 'flying',
  ghost = 'ghost',
  grass = 'grass',
  ground = 'ground',
  ice = 'ice',
  normal = 'normal',
  poison = 'poison',
  psychic = 'psychic',
  rock = 'rock',
  steel = 'steel',
  water = 'water',
}
