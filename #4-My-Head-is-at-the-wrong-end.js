const fixTheMeerkat = (arr) => {
  const reversedArray = [];
  for(let i = arr.length - 1; i >= 0; i--){
     reversedArray.push(arr[i]);
  }
  return reversedArray;
}

/*function fixTheMeerkat(arr){
  const reversedArray = [...arr].reverse();
  return reversedArray;
}*/

console.log(["tail", "body", "head"]); // ["head", "body", "tail"]
