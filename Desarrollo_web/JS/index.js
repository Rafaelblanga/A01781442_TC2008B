function findFirstNonRepeatedChar(str) {
    var arr = str.split('');
    var len = arr.length;
    var charCount = {};
    for (var i = 0; i < len; i++) {
      if (charCount[arr[i]]) {
        charCount[arr[i]]++;
      } else {
        charCount[arr[i]] = 1;
      }
    }
    for (var j in charCount) {
      if (charCount[j] === 1) {
        return j;
      }
    }
    return null;
  }

console.log(findFirstNonRepeatedChar('abacddbec'));

//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 2, 1, 4]));

//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function invertirArreglo(arr) {
    var nuevoArreglo = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      nuevoArreglo.push(arr[i]);
    }
    return nuevoArreglo;
  }
  
  // Ejemplo de uso
  var arr1 = [1, 2, 3, 4, 5, 6];
  var arrInvertido1 = invertirArreglo(arr1);
  console.log(arrInvertido1);

  function invertirArregloEnSitio(arr) {
    var inicio = 0;
    var fin = arr.length - 1;
    while (inicio < fin) {
      var temp = arr[inicio];
      arr[inicio] = arr[fin];
      arr[fin] = temp;
      inicio++;
      fin--;
    }
  }
  
  // Ejemplo de uso
  var arr2 = [1, 2, 3, 4, 5, 6];
  console.log("Antes de invertir: " + arr2);
  invertirArregloEnSitio(arr2);
  console.log("Después de invertir: " + arr2);

  //Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
    function capitalize(str) {
    var arr = str.split(' ');
    var nuevoArreglo = [];
    for (var i = 0; i < arr.length; i++) {
        nuevoArreglo.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        }
    return nuevoArreglo.join(' ');
    }
    console.log(capitalize('hola mundo'));

    //Escribe una función que calcule el máximo común divisor de dos números.
    function mcd(a, b) {
        console.log("Primer numero: "+ a + "\nSegundo numero: " + b);
        var divisor = 2, 
            maxDivisor = a > b ? a : b, 
            mcd = 1;
        while (a >= divisor && b >= divisor) {
            if (a % divisor == 0 && b % divisor == 0) {
                mcd = divisor;
            }
            divisor++;
        }
        console.log("El maximo comun divisor es: ");
        return mcd;
    }
    
    console.log(mcd(15, 5));

    //Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
    function hackerSpeak(str) {
        var arr = str.split('');
        var nuevoArreglo = [];
        for (var i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case 'a':
                    nuevoArreglo.push('4');
                    break;
                case 'e':
                    nuevoArreglo.push('3');
                    break;
                case 'i':
                    nuevoArreglo.push('1');
                    break;
                case 'o':
                    nuevoArreglo.push('0');
                    break;
                default:
                    nuevoArreglo.push(arr[i]);
            }
        }
        return nuevoArreglo.join('');
    }
    console.log(hackerSpeak('Rafael Blanga Hanono'));

    //Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
    function factoriza(num) {
        var arr = [];
        for (var i = 1; i <= num; i++) {
            if (num % i === 0) {
                arr.push(i);
            }
        }
        return arr;
    }
    console.log(factoriza(12));

    //Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
    function quitaDuplicados(arr) {
        var nuevoArreglo = [];
        console.log("Array original: " + arr);
        for (var i = 0; i < arr.length; i++) {
            if (nuevoArreglo.indexOf(arr[i]) === -1) {
                nuevoArreglo.push(arr[i]);
            }
        }
        return nuevoArreglo;
    }
    console.log(quitaDuplicados([1, 0, 1, 1, 0, 0]));

  // Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta y la cadena de texto en si.
    function cadenaMasCorta(arr) {
        var masCorta = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (masCorta.length > arr[i].length) {
                masCorta = arr[i];
            }
        }
        return [masCorta.length, masCorta];
    }
    console.log(cadenaMasCorta(['hola', 'mundo', 'de', 'javascript']));

    //Escribe una función que revise si una cadena de texto es un palíndromo o no.
    function esPalindromo(str) {
        var arr = str.split('');
        var nuevoArreglo = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            nuevoArreglo.push(arr[i]);
        }
        console.log(str);
        return nuevoArreglo.join('') === str;
    }
    console.log(esPalindromo('anitalavalatina'));


    //Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
    function ordenaAlfabeticamente(arr) {
        return arr.sort();
    }
    console.log(ordenaAlfabeticamente(['hola', 'mundo', 'de', 'javascript']));

    //Escribe una función que tome una lista de números y devuelva la mediana y la moda.
    function medianaYModa(arr) {
        var mediana = 0;
        var moda = 0;
        var frecuencia = 0;
        var nuevoArreglo = arr.sort();
        if (nuevoArreglo.length % 2 === 0) {
            mediana = (nuevoArreglo[nuevoArreglo.length / 2] + nuevoArreglo[nuevoArreglo.length / 2 - 1]) / 2;
        } else {
            mediana = nuevoArreglo[Math.floor(nuevoArreglo.length / 2)];
        }
        for (var i = 0; i < nuevoArreglo.length; i++) {
            var contador = 0;
            for (var j = 0; j < nuevoArreglo.length; j++) {
                if (nuevoArreglo[i] === nuevoArreglo[j]) {
                    contador++;
                }
            }
            if (contador > frecuencia) {
                moda = nuevoArreglo[i];
                frecuencia = contador;
            }
        }
        console.log("Array original:\n[" + arr + "]");
        return [mediana, moda];
    }
    console.log(medianaYModa([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

    //Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
    function cadenaMasFrecuente(arr) {
        var frecuencia = 0;
        var cadena = '';
        for (var i = 0; i < arr.length; i++) {
            var contador = 0;
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    contador++;
                }
            }
            if (contador > frecuencia) {
                cadena = arr[i];
                frecuencia = contador;
            }
        }
        return cadena;
    }
    console.log(cadenaMasFrecuente(['hola', 'mundo', 'de', 'javascript', 'de', 'javascript']));

//Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

    function esPotenciaDeDos(num) {
        var potencia = 1;
        while (potencia < num) {
            potencia *= 2;
        }
        return potencia === num;
    }
    console.log(esPotenciaDeDos(8));

    //Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente e imprime el array original.
    function ordenaDescendente(arr) {  
        console.log("Array original:\n[" + arr + "]");
        return arr.sort(function(a, b) {
            return b - a;
        });
    }
    console.log(ordenaDescendente([1, 9, 3, 1, 5, 3, 1, 8, 20, 10]));
