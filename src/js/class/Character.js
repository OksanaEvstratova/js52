export default class Character {
  
    constructor(name, type) {
        let defaultTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !defaultTypes.includes(type)) {
            throw new Error('Некорректные данные');    
        }  
   
        this.name = name;
        this.type = type;
        this.health  = 100;
        this.level  = 1;
        this.attack  = 0;
        this.defence  = 0;
    
    }
}

Character.prototype.levelUp = function() {
    if (this.health <= 0) {
        throw new Error('Dead');  
    } 
    else {
    this.level += 1;
    this.health = 100;
    this.attack +=  this.attack*0.2;
    this.defence += this.defence*0.2;                
    }            
  
}

Character.prototype.damage = function(points) {
    if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);      
    } 
    
}

