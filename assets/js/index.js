
// Operaciones
function Ejercicio2() {
    // INICIO SUMA
    // Input
    var numero1 = parseInt(prompt("Ingrese número 1"));
    // Input
    var numero2 = parseInt(prompt("Ingrese número 2"));
    // Proceso
    var resultado = numero1 + numero2; 
    // Output 
    document.write("La suma de " + numero1 + " y " + numero2 + " es " + resultado);
    document.write("<br/>")

    
    // INICIO RESTA
    // Proceso
    var resultado = numero1 - numero2; 
    // Output 
    document.write("La resta de " + numero1 + " y " + numero2 + " es " + resultado);
    document.write("<br/>")


    // INICIO DIVISION
    // Proceso
    var resultado = numero1 / numero2; 
    // Output 
    document.write("La división de " + numero1 + " y " + numero2 + " es " + resultado);
    document.write("<br/>")


    // INICIO MULTIPLICACIÓN
    // Proceso
    var resultado = numero1 * numero2; 
    // Output 
    document.write("La multiplicación de " + numero1 + " y " + numero2 + " es " + resultado);
    document.write("<br/>")


    // INICIO MODULO
    // Procesos
    var division_entera = Math.floor(numero1  / numero2);
    var multiplo = numero2 * division_entera
    var resultado = numero1 - multiplo
    // Output 
    document.write("El módulo de la división entre " + numero1 + " y " + numero2 + " es " + resultado);
    document.write("<br/>")
} 

// Temperaturas
function Ejercicio3() {
    // Input
    var temperatura = parseFloat(prompt("Ingrese la temperatura en °C"));

    // Proceso
    var kelvin = temperatura + 273.15;
    // Proceso
    var fahrenheit =  (temperatura * 9/5) + 32;

    // Output
    document.write(temperatura + "°C en Kelvin = " + kelvin);
    document.write("<br/>")

    // Output
    document.write(temperatura + "°C en °Fahrenheit = " + fahrenheit);
    document.write("<br/>")
}

// años, semanas y días
function Ejercicio4() {
    // Input
    var dias = parseInt(prompt("Ingrese el número de días"));

    // proceso
    var años = Math.floor(dias / 365) // division entera
    // proceso
    var dias_sobran_del_año = dias % 365 // módulo
    // proceso
    var semanas = Math.floor(dias_sobran_del_año / 7) // division entera
    // proceso
    var dias_sobran_de_semana = dias_sobran_del_año % 7 // módulo

    // output
    document.write(años + " años, ")
    document.write(semanas + " semanas y ")
    document.write(dias_sobran_de_semana + " días")
}

// suma y promedio
function Ejercicio5() {
    // Input
    var numero1 = parseInt(prompt("Ingrese número 1"));
    var numero2 = parseInt(prompt("Ingrese número 2"));
    var numero3 = parseInt(prompt("Ingrese número 3"));
    var numero4 = parseInt(prompt("Ingrese número 4"));
    var numero5 = parseInt(prompt("Ingrese número 5"));
    // Proceso
    var suma = numero1 + numero2 + numero3 + numero4 + numero5;
    // output 
    document.write("La suma de los 5 números es: " + suma);
    document.write("<br/>")

    var promedio = suma / 5;
    document.write("El promedio de los 5 números es: " + promedio);
}