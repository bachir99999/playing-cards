import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCards } from './components/playing-cards/playing-cards';
import { Monster } from './models/monster';
import { MonsterType } from './utils/monster-utils';

@Component({
  selector: 'app-root',
  imports: [PlayingCards],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  monsters!: Monster[];
  search: string = '';

  selectedMonsterIndex = signal(0);
  selectedMonster = computed(() => this.monsters[this.selectedMonsterIndex()]);

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  }


  constructor() {

    effect(() => {
      console.log("Selected Monster:", this.selectedMonster());
    });

    const monster1 = new Monster();
    monster1.name = "Dragon";
    monster1.hp = 200;
    monster1.image = "assets/monsters/fire-monster.jpg";
    monster1.type = MonsterType.FIRE;
    monster1.figureCaption = "N 0001 DRAGON";
    monster1.attackName = "Fire Breath";
    monster1.attackDamage = 50;
    monster1.attckDescription = "The dragon breathes a powerful stream of fire, dealing massive damage to all enemies in its path.";
    const monster2 = new Monster();
    this.monsters = [monster1, monster2];
  }
}
