//variables
let a = 33; 
//guardo los divisores y pusheo a
let divisors = [];
divisors.push(a);
//funcion recursiva
function findDivisors(num) {
  //caso base
  if(num == 1){
    return 0;
  }
  //empiezo en 2 para otro divisores por el uno es divisor comun
  for (let i = 2; i <= num; i++) {
    //divido el numero por el divisor, resto 0 (CUANDO NO DA CON COMA)
  if (num % i == 0) {
    //hagarro la division y lo pusheo
        divisors.push(num/i);
    //busco los divores siguientes de manera recursiva 
        findDivisors(num/i);
          return divisors;
      }
    }
    
  }
//sumar esos divisores
 function calculateSum(cadena) {
   // reduce y suma todo los divisores
  return cadena.reduce((acc, current) => acc + current, 0);
    
}  

console.log(calculateSum(findDivisors(a)));
console.log(divisors);
  