function firstNonRepeatedChar(str) {
   let frequencyMap = {};
  
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

 
  for (let char of str) {
    if (frequencyMap[char] === 1) {
      return char;
    }
  }

  
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));  