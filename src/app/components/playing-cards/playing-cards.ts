import { Component, input, Input, InputSignal, OnChanges, OnInit } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterProperties } from '../../utils/monster-utils';

@Component({
  selector: 'app-playing-cards',
  imports: [],
  templateUrl: './playing-cards.html',
  styleUrl: './playing-cards.css'
})
export class PlayingCards implements OnChanges {
  monster = input(new Monster());

  monterTypeIconUrl: string = 'assets/icons/elec-energy.png';
  monsterColor: string = '#FFEB3B';

    ngOnChanges() {
    this.monterTypeIconUrl= MonsterProperties[this.monster().type].imageUrl;
    this.monsterColor= MonsterProperties[this.monster().type].color;
  }

}
