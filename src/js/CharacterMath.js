export default class CharacterMath {
  constructor(name, distance, stoned, attack) {
    this.name = name;
    this.distance = distance;
    this.stoned = stoned;
    this.attack = attack;
  }

  set stoned(stoned) {
    this.dope = stoned;
  }

  get stoned() {
    return this.dope;
  }

  set attack(attack) {
    this.attackProp = attack;
    const newAttack = this.attackProp * (1 - (this.distance - 1) / 10);

    if (this.stoned) {
      newAttack -= Math.log2(this.distance) * 5;
    }

    if (newAttack > 100) {
      newAttack = 100;
    } else if (newAttack > 0) {
      newAttack = Math.round(newAttack);
    } else {
      newAttack = 0;
    }
  }

  get attack() {
    return this.attackProp;
  }
}
