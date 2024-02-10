function strCount(str, letter){  
  let word = str.split("");
  let count = 0;

  for(let i = 0; i < str.length; i++){
      if(word[i] === letter){
        count++;
      } else {
        count += 0;
      }
  }
  return count
}

console.log(strCount("hello","l")); // 2
