import { Component } from '@angular/core';
import { PokecardComponent } from '../pokecard/pokecard.component';
import { CommonModule } from '@angular/common';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [CommonModule, PokecardComponent],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss',
})
export class PokelistComponent {
  constructor(public pokeService: PokeService) {}

  prevPage() {
    // prev();
  }

  nextPage() {
    // next();
  }
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
