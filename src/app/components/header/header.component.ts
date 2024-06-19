import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokeService } from '../../poke.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [PokeService],
})
export class HeaderComponent {
  onInput(event: any) {
    const inputValue = event.target.value;
  }
}
