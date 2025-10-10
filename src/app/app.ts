import { Component, signal } from '@angular/core';
import { PlayingCards } from './components/playing-cards/playing-cards';
import { Monster } from './models/monster';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  imports: [PlayingCards, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  monster1!: Monster;
  monster2!: Monster;
  count: number = 0;
  inrCount() {
    this.count += 1;
  }
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = "Dragon";
    this.monster1.hp = 200;
    this.monster1.figureCaption = "N 0001 DRAGON";
    this.monster1.attackName = "Fire Breath";
    this.monster1.attackDamage = 50;
    this.monster1.attckDescription = "The dragon breathes a powerful stream of fire, dealing massive damage to all enemies in its path.";
    this.monster2 = new Monster();
  }
}
