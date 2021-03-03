var wrap = document.getElementsByClassName("wrapper")[0];

let dragonDamage = 10;
let userDamage = 5;

//this wile loop runs wile both are alive
while(dragonDamage > 0 && userDamage > 0){
  var damage = window.prompt("Enter the number of hits you are going to attempt to hit the dragon Max damage up to 5");
  
  //random damage genarator
  randDamage = Math.floor(Math.random() * damage) + 1;
  if(randDamage > 5){
    dragonDamage = dragonDamage - 1;
  }
  else{
    dragonDamage = dragonDamage - randDamage;
  }
  //if dragon dies
  if(dragonDamage > 0){
    dragRandDamage = Math.floor(Math.random() * 2) + 1;
    userDamage = userDamage - dragRandDamage;
  }

  else{
    wrap.innerHTML = "User Wins! " + "User Damage = " + userDamage + ", Dragon Damage = " + dragonDamage;
    break;
  }
  //if user dies
  if(userDamage <= 0){
     wrap.innerHTML = "Dragon Wins! " + "User Damage = " + userDamage + ", Dragon Damage = " + dragonDamage;
    break;
  }
}