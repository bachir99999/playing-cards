export enum  MonsterType {
    PLANT = 'Plant',
    ELECTRIC = 'Electric',
    FIRE = 'Fire',
    WATER = 'Water',
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterProperties: {[key : string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/icons/plant-energy.png',
        color: '#4CAF50'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'assets/icons/elec-energy.png',
        color: '#FFEB3B'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/icons/fire-energy.png',
        color: '#F44336'
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/icons/water-energy.png',
        color: '#2196F3'
    }
}