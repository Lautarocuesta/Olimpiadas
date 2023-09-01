let p = [11, 22, 33, 44, 55, 66, 77, 80, 88, 99];
let t = [];

function binarySearch(arr, num) {
    if (arr.length === 0) {
        return false;  // primer caso de recursion 
    }

    const posMedia = Math.floor(arr.length / 2); //agarra el arreglo y lo divide en dos

    if (arr[posMedia] === num) {
        return true;  // Encontramos el número en el arreglo
    } else if (arr[posMedia] < num) {
        return binarySearch(arr.slice(posMedia + 1), num);  // Buscar en la mitad derecha
    } else {
        return binarySearch(arr.slice(0, posMedia), num);  // Buscar en la mitad izquierda
    }
}

const num = 78;  // Número que quieres buscar en el arreglo
const found = binarySearch(p, num);
console.log(found);