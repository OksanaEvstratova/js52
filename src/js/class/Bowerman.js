import Character from '../class/Character';

export default class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowman');
        this.attack  = 25;
        this.defence  = 25;
    }
}
