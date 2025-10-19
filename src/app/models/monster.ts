import { MonsterType } from "../utils/monster-utils";

export class Monster {
         name: string = 'My monster';
         hp: number = 50;
         image: string = 'assets/monsters/elec-monster.png';
         type: MonsterType = MonsterType.ELECTRIC;
         figureCaption: string = 'N 0000 MONSTER';
         attackName: string = 'Attack name';
         attackDamage: number = 10;
         attckDescription: string = 'This is a description of the attack. It can be very long and take multiple lines.';
    }   