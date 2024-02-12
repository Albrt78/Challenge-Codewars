/*function grow(x){
  let product = 1;
  
  for(let i = 0; i < x.length; i++){
    product *= x[i];    
  }
  return product;
}*/

const grow = x => {
  let product = 1;
  
  for(let i = 0; i < x.length; i++){
    product *= x[i];    
  }
  return product;
}

console.log(grow([1, 2, 3])); // 6
    
