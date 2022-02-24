const multiplicacion = () => {
  let num = prompt("ingrese un número entre 1 y 20");

  if (num <= 20) {
    console.log("Número correcto");
  } else {
    console.log("número fuera del rango");
    return;
  }
  let multiplication;
  for (let i = 1; i <= 10; i++) {
    multiplication = num * i;
    console.log(num + "x" + i + "=" + multiplication);
  }

  let numingresado = 1; 
 
  for (let i = 1; i <= num; i++) {
    numingresado = numingresado * i;

    console.log('Factorial de ' + i +  '='  + numingresado);
  }

};
multiplicacion();
