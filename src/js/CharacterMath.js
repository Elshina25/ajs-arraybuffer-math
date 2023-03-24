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
  }

  get attack() {
    let newAttack = this.attackProp * (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      newAttack -= Math.log2(this.distance) * 5;
    }
    return newAttack;
  }
}
