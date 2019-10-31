let vowels = ['A','I','U','E','O'];
let input = 'Hi, Human'.toUpperCase();
let result = '';
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      if (input[i] === 'U' || input[i] === 'E'){
            result += input[i] + input[i]
          }
      else {
            result += input[i]
      }
    }
    else {
      continue;
    }
  }
}
console.log(result)