function invert(array) {
   const invertArray = [];
   
   for(let i = 0; i < array.length; i++){
        if(array[i] === -array[i]){
          invertArray.push(array[i]);
        } else {
          invertArray.push(-array[i]);
        }
   }
   return invertArray;
}
