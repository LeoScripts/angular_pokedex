import { Component } from '@angular/core';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-paginate',
  standalone: true,
  imports: [],
  templateUrl: './paginate.component.html',
  styleUrl: './paginate.component.scss',
})
export class PaginateComponent {
  constructor(public pokeService: PokeService) {}

  public nextPage = () => this.pokeService.nextPage();
  public prevPage = () => this.pokeService.prevPage();
}
