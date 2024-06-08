import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeService } from './poke.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PokeService],
})
export class AppComponent {
  title = 'pokedex';
}
