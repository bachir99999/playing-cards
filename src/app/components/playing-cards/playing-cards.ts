import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-playing-cards',
  imports: [],
  templateUrl: './playing-cards.html',
  styleUrl: './playing-cards.css'
})
export class PlayingCards {
  monster: InputSignal<Monster> = input.required() ; 
}
