import { Component, Input } from '@angular/core';
import { Poke } from '../pokelist/pokelist.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokecard.component.html',
  styleUrl: './pokecard.component.scss',
})
export class PokecardComponent {
  @Input() poke: Poke | any;

  public addZero(str: string | number, size: number): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }
}
