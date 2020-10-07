/******************
 * YOUR CODE HERE *
 ******************/
function xify(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str = str + 'x';
  }
  return str;
}
xify('hello');
xify('hi there')

function smilify(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str = str + '😊';
  }
  return str;
}
smilify('goodness');
smilify('oh hello');

function yellingChars(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += input[i] + '!';
  }
  return str;
}
yellingChars('goodness');
yellingChars('oh hello');

function indexedChars(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += str.indexOf(str[i]) + input[i]; 
  }
  return str;
}
// let result = indexedChars('hello');
// result;
indexedChars('hello');
indexedChars('bye');


function numberedChars(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    let numb = '(' + str.indexOf(str[i]) + ')';
    str += numb + input[i];
  }
  return str
}
// let result = numberedChars('hello');
// result;
numberedChars('hello');
numberedChars('bye');

function exclaim(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str = str.replace('?', '!') + input[i];

  }
  return str;
}
// let result = exclaim('What are you doing? Are you a fool?')
// result;
exclaim('What are you doing? Are you a fool?');
exclaim('This is fine.');

function repeatIt(input, n) {
  var str = '';
  while (n > 0) {
    str += input;
    n--;
  }
  return str;
}
// let result = repeatIt('beetlejuice', 3)
// result;
repeatIt('beetlejuice', 3);
repeatIt('oh hi!', 8);

// function truncate(input){
//   let str = '';
//   let long = input.length;
//   for(let i = 15; i < long; i++){
//     str += input[i];
//   }
//   return str;
// }
function truncate(input){
  let str = input.indexOf('', 15);
    if(str == -1)
      return input;
  return input.substring(0, str) + '...';
}
// let result = truncate('hello');
// let result = truncate('The fault, dear Brutus, is not in our stars, but in ourselves.');
// let result = truncate("Well, that's just, like, your opinion man.")
// result;
truncate('The fault, dear Brutus, is not in our stars, but in ourselves.')
truncate("Well, that's just, like, your opinion man.")

function ciEmailify(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str = str.toLowerCase().replace(' ', '.') + input[i];
  }
  return str + '@codeimmersives.com';
}
// let result = ciEmailify('colin jaffe');
// let result = ciEmailify('Anthony DeRosa');
// result
ciEmailify('colin jaffe');
ciEmailify('Anthony DeRosa');

function reverse(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += input[i];
  }
  return str.toLowerCase().split('').reverse().join('');
}
// let result = reverse('colin');
// let result = reverse('mesuara');
// result;
reverse('colin');
reverse('mesuara');

// function onlyVowels(input){
//   let vowels = 0;
//   let str = '';
//   for(let i = 0; i < input.length; i++){
//     if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u"){
//       vowels += 1;
//       // str += input[i];
//     }
//     // str += input[i];
//   }
//   return vowels;
// }
function onlyVowels(input) {
  // console.log(input)
  let inputVow = input.toLowerCase();
  // console.log(inputVow)
  let vowels = 1;
  let i = 0;
  let str = '';
  while(i < inputVow.length && vowels < 6) {
      if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
      str += input[i];
      vowels++ 
      }
  i++
  }
  return str;
}
// let result = onlyVowels('Colin Jaffe');
// let result = onlyVowels('quickly')
// let result = onlyVowels('Anthony DeRosa')
// result;
onlyVowels('Colin Jaffe');
onlyVowels('quickly');
onlyVowels('Anthony DeRosa');

function crazyCase(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += input[i];
  }
  return str;
}
// let result = crazyCase('hello');
// let result = crazyCase('multiple words here');
// let result = crazyCase('YELLING');
// result;

function titleCase(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += input[i];
  }
  return str;
}
// let result = titleCase('return of the king');
// let result = titleCase('cOde immerSives');
// result;

function camelCase(input){
  let str = '';
  for(let i = 0; i < input.length; i++){
    str += input[i];
  }
  return str.split(' ').join('');
}
// let result = camelCase('oh Hello');
let result = camelCase('well yeah of course');
// let result = camelCase('Boy howdy');
result;

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
