import { Component } from '@angular/core';
import { PokecardComponent } from '../pokecard/pokecard.component';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [PokecardComponent],
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss',
})
export class PokelistComponent {}
