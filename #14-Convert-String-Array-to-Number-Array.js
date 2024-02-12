/*function toNumberArray(stringarray){
  let numberArray = [];
  for(let i = 0; i < stringarray.length; i++){    
    numberArray.push(Number(stringarray[i])); 
  }
  return numberArray;
}*/

/*const toNumberArray = (stringarray) => {
  let numberArray = [];
  for(let i = 0; i < stringarray.length; i++){    
    numberArray.push(Number(stringarray[i])); 
  }
  return numberArray;
}*/

const toNumberArray = (stringarray) =>{
  return stringarray.map(Number);
}

console.log(toNumberArray(["1.2", "3.2", "2.4"])); // [1.2, 3.2, 2.4]
