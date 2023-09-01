let word = "YOHELOGRADOENCENDERUNACERILLA";
let mat = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Clave de desplazamientos
let key = "23"; 
// longitud de la key 
let N = key.length;

let words = word.split(""); // transforma un string a arreglo
let coded = [];

for (let i = 0; i < word.length; i++) {
  let char = words[i];
  let ind = mat.indexOf(char);
  let desplazamiento = Number(key[i % key.length]);
  let newChar = mat[(ind + desplazamiento) % 27];
  coded.push(newChar);
}

console.log(coded.join(''));