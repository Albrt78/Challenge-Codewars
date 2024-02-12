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

/* Python */
/*def to_float_array(arr): 
     for i in range(0, len(arr)):
         arr[i] = int(arr[i])
     return arr

  def to_float_array(arr):
      float_array = []
      for i in range(0, len(arr)):
         arr[i] = int(arr[i])
         float_array.append(arr[i])
      return arr
*/

const toNumberArray = (stringarray) =>{
  return stringarray.map(Number);
}

console.log(toNumberArray(["1.2", "3.2", "2.4"])); // [1.2, 3.2, 2.4]
