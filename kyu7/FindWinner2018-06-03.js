/**
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
 */

 //My solution
function declareWinner(fighter1, fighter2, firstAttacker) {
  while (fighter1.health > 0 && fighter2.health > 0){
    if(firstAttacker == fighter1.toString()){
      fighter2.health -= fighter1.damagePerAttack
      firstAttacker = fighter2.toString()
    }
    else{
      fighter1.health -= fighter2.damagePerAttack
      firstAttacker = fighter1.toString()
    }
  }
  return fighter1.health <= 0 ? fighter2.toString() : fighter1.toString()
}

//Best answer
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}