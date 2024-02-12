/*function countSheeps(sheep) {
  let countTrue = 0;
  for(let i = 0; i < sheep.length; i++){
    if(sheep[i] === true){
      countTrue += sheep[i];
    } else {
      sheep[i] = 0;
    }
  }
  return countTrue;
}*/

/* Python */
/* def count_sheeps(sheep):
  count_true = 0

  for i in range(len(sheep)):
    if sheep[i] == True:
        count_true += sheep[i]
    else:
        sheep[i] = 0
        
  return count_true*/

const countSheeps = (sheep) => {
  let countTrue = 0;
  for(let i = 0; i < sheep.length; i++){
    (sheep[i] === true) ? countTrue += sheep[i] : sheep[i] = 0;
  }
  return countTrue;
}
 
console.log(countSheeps([undefined, false])); // 0
console.log(countSheeps([true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true])); // 17
 