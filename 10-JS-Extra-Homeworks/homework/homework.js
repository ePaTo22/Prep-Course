// No cambies los nombres de las funciones.

const { SearchSource } = require("@jest/core");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var result = Object.entries(objeto);
  return result
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

const count = {};
string.split('').forEach(element => {
   count[element] = count[element] ?  (count[element] + 1) : 1;
  
});
return count
}
  



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí


  const mayusculaAdelante = (s = '') => {
     let indiceLetraMayuscula = 0;
     const nuevaString = [];
     for(let i = 0; i < s.length; i++){
        if(s[i] !== s[i].toLowerCase()){
          nuevaString.splice(indiceLetraMayuscula, 0, s[i]); //splice (point, valores a borrar, valores a agregar)
           indiceLetraMayuscula++;
        }else{
          nuevaString.push(s[i]);
        };
     };
     return nuevaString.join('');

    }

return mayusculaAdelante(s)
/*
      var separar = s.split('');
      var mayus = [];
      var minus = [];

      for(var i = 0; i < separar.length; i++){
        if(separar[i] == separar[i].toUpperCase()){
          mayus.push(separar[i])
        }
        if(separar[i] == separar[i].toLowerCase()){
          minus.push(separar[i]);
        }
      }
return mayus.join('').concat(minus.join(''));

*/
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   
 
    var espejo = ('');
      for(let i = str.length -1; i >= 0; i--) {
        espejo += str[i];
      };
     return espejo.split(' ').reverse().join(' ');
   
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

   if(numero.toString().split('').reverse().join('') == numero){
     return 'Es capicua'
   }
else return 'No es capicua'
   
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

 let caracteresProhibidos = ['a', 'b', 'c'];
 for(let caracteres of caracteresProhibidos){    //CICLO FOR OF!!
   cadena = cadena.split(caracteres).join('');
 }
 return cadena
}


/*
function removeForbiddenCharacters(input) {
let forbiddenChars = ['/', '?', '&','=','.','"']

for (let char of forbiddenChars){
    input = input.split(char).join('');
}
return input

--------------------------------
var nuevaCadena = ('');
for(let i = 0; i < cadena.length; i++){
  if(cadena[i] === 'a' || 'b'|| 'c'){
    return nuevaCadena + (cadena - cadena[i])
}
else if (cadena [i] !== 'a' || 'b' || 'c')
  return cadena

  */


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
   
  const desc = arr.sort((a,b) => a.length - b.length)
    return desc
  }





function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  const filteredArray = arreglo1.filter(value => arreglo2.includes(value));
  return filteredArray

}


  /*
let arreglo3 = [];
    for(let i = 0; i < arreglo1.length; i++){
     return arreglo1[i]
       }
    for(let i = 0; i < arreglo2.length; i++){
        return arreglo2[i]
       }

   if(arreglo1[i] === arreglo2[i]){
     return arreglo3.push(arreglo1[i])
   }

   return arreglo3

  }
*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

