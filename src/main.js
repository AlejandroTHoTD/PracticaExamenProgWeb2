var aleatorio = Math.floor(Math.random() * 10) + 1;
var x = Math.floor(Math.random() * (100 - 50)) + 50;
var y = Math.floor(Math.random() * 50) + 1;
var vecescorrecto = 0;
var correcto = false;
var result = 0;
  
document.getElementById("botoninic").onclick = function () {
  location.href = "seleccion.html";
}

document.getElementById('num1').innerHTML = x;
document.getElementById('num2').innerHTML = y;

function niv1(){

//  while (entrada == resultados) {
    var entrada = prompt("Introduzca el Resultado de la Suma: ");
    if (entrada == null){
      return;
    }

    result = x + y;

    document.getElementById('num1').innerHTML = x;
    document.getElementById('num2').innerHTML = y;
    x = Math.floor(Math.random() * 50) + 1;
    y = Math.floor(Math.random() * 50) + 1;

    if(entrada == result){
      document.getElementById('num1').innerHTML = x;
      document.getElementById('num2').innerHTML = y;
      alert("¡Correcto!");
      correcto = true;
      vecescorrecto++;
      document.getElementById('correct').innerHTML = result;
      document.getElementById('intent').innerHTML = 'Correcto';
      document.getElementById('vecesc').innerHTML = vecescorrecto;
      
    }else
      {
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
        alert("¡Incorrecto!");
        document.getElementById('correct').innerHTML = result;
        document.getElementById('intent').innerHTML = 'Incorrecto';
        document.getElementById('vecesc').innerHTML = vecescorrecto;
        
      }
      document.getElementById('num1').innerHTML = x;
      document.getElementById('num2').innerHTML = y;
      
}
//}

function niv12(){

  //  while (entrada == resultados) {
      var entrada = prompt("Introduzca el Resultado de la Resta: ");
      if (entrada == null){
        return;
      }
  
      result = x - y;
  
      document.getElementById('num1').innerHTML = x;
      document.getElementById('num2').innerHTML = y;
      x = Math.floor(Math.random() * (100 - 50)) + 50;
      y = Math.floor(Math.random() * 50) + 1;
  
      if(entrada == result){
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
        alert("¡Correcto!");
        correcto = true;
        vecescorrecto++;
        document.getElementById('correct').innerHTML = result;
        document.getElementById('intent').innerHTML = 'Correcto';
        document.getElementById('vecesc').innerHTML = vecescorrecto;
        
      }else
        {
          document.getElementById('num1').innerHTML = x;
          document.getElementById('num2').innerHTML = y;
          alert("¡Incorrecto!");
          document.getElementById('correct').innerHTML = result;
          document.getElementById('intent').innerHTML = 'Incorrecto';
          document.getElementById('vecesc').innerHTML = vecescorrecto;
          
        }
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
        
  }

function niv2(){
  var entrada = prompt("Introduzca el Resultado de la División: ");
      if (entrada == null){
        return;
      }
  
      result = x * y;
  
      document.getElementById('num1').innerHTML = x;
      document.getElementById('num2').innerHTML = y;
      x = Math.floor(Math.random() * 50) + 1;
      y = Math.floor(Math.random() * 50) + 1;
  
      if(entrada == result){
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
        alert("¡Correcto!");
        correcto = true;
        vecescorrecto++;
        document.getElementById('correct').innerHTML = result;
        document.getElementById('intent').innerHTML = 'Correcto';
        document.getElementById('vecesc').innerHTML = vecescorrecto;
        
      }else
        {
          document.getElementById('num1').innerHTML = x;
          document.getElementById('num2').innerHTML = y;
          alert("¡Incorrecto!");
          document.getElementById('correct').innerHTML = result;
          document.getElementById('intent').innerHTML = 'Incorrecto';
          document.getElementById('vecesc').innerHTML = vecescorrecto;
          
        }
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
}

function niv3(){
  var entrada = prompt("Introduzca el Resultado de la Multiplicación: ");
      if (entrada == null){
        return;
      }
  
      result = x / y;
  
      document.getElementById('num1').innerHTML = x;
      document.getElementById('num2').innerHTML = y;
      x = Math.floor(Math.random() * 50) + 1;
      y = Math.floor(Math.random() * 50) + 1;
  
      if(entrada == result){
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
        alert("¡Correcto!");
        correcto = true;
        vecescorrecto++;
        document.getElementById('correct').innerHTML = result;
        document.getElementById('intent').innerHTML = 'Correcto';
        document.getElementById('vecesc').innerHTML = vecescorrecto;
        
      }else
        {
          document.getElementById('num1').innerHTML = x;
          document.getElementById('num2').innerHTML = y;
          alert("¡Incorrecto!");
          document.getElementById('correct').innerHTML = result;
          document.getElementById('intent').innerHTML = 'Incorrecto';
          document.getElementById('vecesc').innerHTML = vecescorrecto;
          
        }
        document.getElementById('num1').innerHTML = x;
        document.getElementById('num2').innerHTML = y;
  }
