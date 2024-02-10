/*function cubeChecker(volume, side) {
  if(volume <= 0){
    return false;
  } else if (side**3 === volume){
    return true;
  } else {
    return false;
  }
}*/

const cubeChecker = (volume, side) => {
  return (volume <= 0) ? false
         : (side**3 === volume) ? true
         : false;
}



console.log(cubeChecker(8, 2)); // True
console.log(cubeChecker(0, 0)); // False
console.log(cubeChecker(125, 5)); // True


