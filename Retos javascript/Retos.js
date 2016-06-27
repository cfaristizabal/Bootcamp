//Retos JavaScript

//1. Suma de dos números
var suma = function(a,b) {
  return a+b;
}
suma(1,2)
prom
//2. Longitud de cadena de palabras

var longitud = function(sentence) {
  return sentence.length();
}

// 3. Múltiplos

var fizzbuzz = function(number){
  if(number%3===0 && number%5===0){
    return "fizzbuzz";
  }
  else if (number%3===0) {
    return "fizz";
  }
  else if (number%5===0){
    return "buzz";
  }
  else{
    return number;
  }
}

//4. Fibonacci

var fibonacci = function(number){
  var f0  = 0;
  var f1 = 1;
  if (number === 0) {
    alert (f0);
  };
  else if (number === 1) {
    alert (f1);
  };
  else{
    var r1 = f0;
    var r2 = f1;
    var r = 0
    for (var i = 2; i < number + 1; i++) {
      r = r1 + r2
      r1 = r2
      r2 = r
    };
    alert (r);
  };
};

//5. Multiplicacion de un vector

var multiplier = function(vect,mult){
  var mul = vect.map(function(num){
    return num*mult;
  });
return mul
};

//6. Par o impar
for (var i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i+" es número par.")
  }
  else{
    console.log(i+" es número impar.")
  }
}

//7. Tabla de multiplicar
for (var i = 1; i < 11; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(j + " x "+ i +" = " + i*j)
  }
}

//8. Suma de valores del vector
var sumame = function(vect){
  var s = 0;
  for (var i = 0; i < vect.length; i++) {
    s += vect[i];
  }
  return s;
}

//9. promedio de valores del vector
var promediame = function(vect){
  var suma = 0;
  for (var i = 0; i < vect.length; i++) {
    suma += vect[i];
  }
  return suma/vect.length;
}

//10. type extractor

var typeExtractor = function(vect){
  var numb = [];
  var stri = [];
  var boo = [];
  var obj = {};
  for (var i = 0; i < vect.length; i++) {
    if (typeof vect[i] == "number") {
      numb.push(vect[i]);
    }
    else if (typeof vect[i]== "boolean") {
      if(boo.length == 0){
        boo.push(vect[i]);
      }
      else if (boo.length == 1) {
        if (boo[0] != vect[i]) {
          boo.push(vect[i]);
        }
      }
    }
    else if (typeof vect[i]== "string") {
      stri.push(vect[i]);
    }
  }
  if (numb.length > 0) {
    obj.number = numb;
  }
  if (boo.length > 0) {
    obj.boolean = boo;
  }
  if (stri.length > 0) {
    obj.string = stri;
  }
  console.log(obj);
};
typeExtractor([true,1,"dfa",126,15,false,true,"dafda","fgafd",15]);var typeExtractor = function(vect){
  var numb = [];
  var stri = [];
  var boo = [];
  var obj = {};
  for (var i = 0; i < vect.length; i++) {
    if (typeof vect[i] == "number") {
      numb.push(vect[i]);
    }
    else if (typeof vect[i]== "boolean") {
      if(boo.length === 0){
        boo.push(vect[i]);
      }
      else if (boo.length == 1) {
        if (boo[0] != vect[i]) {
          boo.push(vect[i]);
        }
      }
    }
    else if (typeof vect[i]== "string") {
      stri.push(vect[i]);
    }
  }
  if (numb.length > 0) {
    obj.number = numb;
  }
  if (boo.length > 0) {
    obj.boolean = boo;
  }
  if (stri.length > 0) {
    obj.string = stri;
  }
  console.log(obj);
};
typeExtractor([true,1,"dfa",126,15,false,true,"dafda","fgafd",15]);