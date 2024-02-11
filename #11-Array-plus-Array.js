/*function arrayPlusArray(arr1, arr2) {
  let concate = [...arr1, ...arr2];
  let sum = 0;
  
  for(let i = 0; i < concate.length; i++){
    sum += concate[i]; 
  }
  return sum;
}*/

const arrayPlusArray = (arr1, arr2) => {
  let concate = [...arr1, ...arr2];
  let sum = 0;
  
  for(let i = 0; i < concate.length; i++){
    sum += concate[i]; 
  }
  return sum;
}
