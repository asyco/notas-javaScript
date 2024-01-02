let usuario = {
    nombre: 'Juan'
};
let cliente =usuario;
cliente.nombre = 'camilo'

usuario.edad = 15

// Creación de Strings

// Usando comillas simples, dobles y Template Literals
// Concatenación usando símbolo +
const name = 'Brian'
const apellido = 'Barreto'
const nombreCompleto = 'Mi nombre completo es: ' + name + ' ' + apellido

// 2. Usando template literals
const presentacion = `Mi nombre es ${name} y mi apellido ${apellido}`
// 3. Usando join
const personas = ['Felipe', 'Santiago', 'Ana']
const personas_unidas = personas.join(' ') 
//4. Usando la función concat()
const presentacion_2 = 'Mi nombre completo es: '.concat(name, ' ', apellido)

// Clase 10 - caracteres de escape
// Si quisiera usar el apostrofe de esta manera tendriamos un error
// const whatDoIDo = 'I'm software Engineer'

//1. Escape alternativo
const escapeAlternativo = "I'm software Engineer"
// 2. Usando una barra invertida
const barraInvertida = 'I\'m Software Engineer'
// 3. Usando template literals (usando comilla invertida)
const comillaInvertida = `I'm software Engineer`
// Escritura de Strings Largos
const poema = 'Las rosas son rojas,\n' + 
              'Los arboles verdes,\n' + 
              'Y el agua azul'

const poema_2 = 'Las rosas son rojas,\n\
Los arboles verdes,\n\
Y el agua azul'              

const poema_3 = `Las rosas son rojas,
Los arboles verdes,
Y el agua azul`

//  Clase 11 - Manipulación String
// Strings Primitivos: Son inmutables (Paso por valor)
const stringPrimitivo = 'Soy un string primitivo'
const stringPrimitivoTambien = String('Soy un string primitivo')

// String Object: Son mutables (Paso por referencia?)
const stringObject = new String('Soy un string objeto')

// Acceder a caracteres
const saludo = 'Hola, ¿Cómo estás?'
// console.log(saludo[1]) 
//console.log(saludo.chartAt(2))
//console.log(saludo.indexOf('o')) -> Me da el índice de la o dentro del string saludo
//console.log(saludo.indexOf('como')) -> Me da el índice de donde comienza'como' dentro del string saludo
//console.log(saludo.lastIndexOf('o')) -> Me da el último índice de la o dentro del string saludo
// saludo.slice(3,5) -> Para recortar la cadena
// saludo.length --> da la longitud
// saludo.toLocaleLowerCase() -> Minuscula
// saludo.toLocaleUpperCase() -> Mayuscula
// saludo.split(' ') -> Dividir segun se quiera (Por espacio por ejemplo)
// saludo.trim() -> Elimina los espacios del comienzo y del final y si tiene repetidos en el medio
// saludo.replace('Hola', 'Hey') -> Para reemplazar


// Tipo de dato primitivo: numberClase 12 / 79

// 1. Tipo entero y decimal
const entero = 12
const pi = 3.14159
// console.log(typeof entero) y console.log(typeof decimal) Dan el mismo tipo: number

//2. Numeros con notación científica
const cientifico = 5e3
//3. Inifinitos y NaN
// const infinito = Infinity
// const notANumber = NaN

// Operaciones básicas: +,-,*,/
// Módulo (Resto): 15 % 8 -->7
//Exponenciación: 2 ** 3

// Precisión
const resultado = 0.1 + 0.2 //0.3000000000000000000000
// Para quitar esos decimales usamos .tofixed(1)
const resultadoSinDec = resultado.toFixed(1) //0.3
// resultado === 0.3 Nos da false porque no tienen el mismo valor? los 3 signos = verifican equivalencia de tipo y valor de dato

// operaciones avanzadas
const raizCuadr = Math.sqrt(16)
const valorAbsol = Math.abs(-5)
const valorRandom = Math.random()

// Conversión a BooleanosClase 13 / 79

const isActive = true // Buena practica empezar los nombres de variables bool como is...
const hasPermisson = false // Igualmente, ¿Tiene Permisos? ¿Está activo?

// Conversión implicita
const result = 10 > 2 // true

const namePerson = 'Carlos' 
// Para saber si la variable name_person tiene un valor console.log(!!namePerson)


// Conversión Explícita
const value = 0
const explicitBoolean = Boolean(value)
//console.log(explicitBoolean)

// Tipos de datos primitivos: null, undefined, symbol y bigintClase 14 / 79

const snoopy =null
// Esta variable tiene un valor null y tipo object esto es un error pero no tiene una solución

// undefined
let name_2
console.log(name_2) //Nos da un tipo de dato primitivo: undefined

// Symbol 
const uniqueId = Symbol('id')

// aunque los defina igual, por el tipo de dato estos se tomarán como distintos
const dato1 = Symbol(1)
const dato2 = Symbol(1)
console.log(dato1 === dato2) // false

// otro ejemplo de uso del Symbol
const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user) //{Symbol('id'): '1234'} Para evitar colisiones

// BigInt -> Enteros muy grandes
const numeroGrande = 100000000000000000000000000000000000000000000000000000000000000000000n


// Conversión de tipos: Type Casting y CoercionClase 15 / 79
const numeroPrueba = '32'
const numeroPruebaConversion = parseInt(numeroPrueba)

const numeroEnBinario = 10010
const numeroEnDecimal = parseInt(numeroEnBinario, 2)

function precioConDescuento(precio, descuento) {
    const resultado = 'El descuento por el Black Friday es: ' +'$'+ precio*(1-descuento/100)
    return resultado
}

// Funciones vs MétodosClase 20 / 79

// 1. Pasar funciones como argumentos (Callback: Es una función que se pasa como argumento)

function a () {} // (Esto se conoce como declaración de función)
function b (a) {}
b(a) //callback

// Retornar funciones
function c () {
    function d () {}
    return d
}

// Asignar funciones a variables (Expresión de función)
const f = function () {}

// Tener propiedades y métodos
 function g () {}
 const obj = {}
 g.call(obj) // obj se convierte en el contexto de ejecución de la función

 // Anidar funciones (Nested functions)
/*
 function h () {
    function i () {
        function j () {

        }
    j()    
    }
    i()
 }
 h()
*/

 // ¿Es posible almacenar funciones en objetos?

 const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('Fire')
    }
 }

 // Funciones puras e impurasClase 21 / 79

 /* Funciones puras: 1. Para una misma entrada siempre dan 
 la misma salida y 2. no producen efectos secundarios (Side Effects)*/

 /* Side Effects
 1. Modificar cariables globales  
 2. Modificar parámetros
 3. Solicitudes HTTP
 4. Imprimir mensajes en pantalla o consola
 5. Manipulación del DOM
 6. Obtener la hora actual*/

// Identificador thisClase 22 / 79

// Enlace implícito (Implicit binding)
const house = {
    dogName: 'Fido',
    dogGreeting: function () {
        console.log(`Hola, soy ${this.dogName} y mis hijos son: ` + this.dogHijos.join(', '))
    },
    dogHijos: ['Juan', 'Pedro', 'Maria']
    
}


// Implicaciones de duplicar códigoClase 25 / 79

/*
1. Mantenimiento difícil
2. Aumento de complejidad
3. Mayor probabilidad de errores
4. Dificultad de escalar
5. Tiempo y recursos
6. Violación de principios de diseño (Don't repeat yourself)
7. Dificultad en la identificación de errores
 */


// Funciones constructorasClase 26 / 79

const personalizedMessage = () => 'Goodbye Everybody, see you soon!'

function Rocket (name, ownMessage) { // La función constructora empieza por mayuscula
    this.name = name
    this.launchMessageRocket = () => ownMessage
}

// Creamos un objeto apartir de la función Rocket
const falcon9Rocket = new Rocket('Falcon 9', 'Ignition...')
const falconHeavyRocket = new Rocket('Falcon Heavy', personalizedMessage)

// Construir objetos por medio de Arrow function

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
  });
  
// Instanciamos (sin usar la palabra reservada new como en una función tradicional constructora)
const RocketAmerican = RocketWithArrowFunction('F35 Rocket', 'Fire!!!')
//Podemos crear una función fuera del objeto también
const personalizedMessageArrowFunction = () => 'Successful Launch'
// Instanciamos de nuevo con la función personalizada
const RocketWithPersonalizedMessage = RocketWithArrowFunction('F19 Rocket 3000', personalizedMessageArrowFunction)


// Qué quiere decir que las funciones declarativas en javascript Pueden ser referenciadas antes de su declaración. Dame ejemplos?

console.log(suma(2,8))
function suma(a, b) {
    return a +b
}

// Objeto window y modo estrictoClase 28 / 79
/*
Window Binding:
Ocurre cuando ninguna de las reglas anteriores se aplica y this se vincula al objeto global (por ejemplo, window en el navegador).

Ejemplo (ejecutar en el navegador):

function showName() {
  console.log(this.name);
}

window.name = 'Adam';
showName(); // Output: Adam
*/

// Expresiones vs Sentencias (o declaraciones)Clase 30 / 79

/* En las expresiones se produce un valor y las declaraciones dan una instrucción 
para hacer algo (pueden ir acompañadas de expresiones) (declaracion de variables, cons)*/

// Proyecto: Crea biografías de personajes con JavaScriptClase 31 / 79

function AvisoGotera (ubicacion, personaReporta, fechaGotera, detallesGotera) {
    this.id = 'ID_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
    this.ubicacion = ubicacion,
    this.personaReporta = personaReporta,
    this.fechaGotera =fechaGotera,
    this.detallesGotera = detallesGotera,
    this.estaSolucionada = false
    // Actualizar estado del aviso
    this.cerrarAviso = () => {this.estaSolucionada = true}
    this.resumenGotera = function () {
        console.log(`
        ID: ${this.id}
        UBICACIÓN: ${this.ubicacion} 
        REPORTA: ${this.personaReporta}
        FECHA: ${this.fechaGotera}
        DETALLES: ${this.detallesGotera}
        ${this.estaSolucionada ? 'SOLUCIONADA: Sí' : 'SOLUCIONADA: No'}
        `)
    }
    
}

const avisoGotera_1 = new AvisoGotera('B7', 'Andres Barreto', '21/12/2023', 'lorem ipsum')

function mostrarTiempoActual () {
    document.getElementById('tiempoActual').innerHTML = Date()
}
function borrarTiempoActual () {
    document.getElementById('tiempoActual').innerHTML = ""
}

// Operadores de comparaciónClase 32 / 79

/* == Nos permite comparar la igualdad entre valores 
   === Nos permite comparar la igualdad (exacta) entre valores y tipos de datos 
   != Operador de diferente de (compara valores)
   !== Operador exactamente diferente de (Compara valor y tipo)
   > Mayor que y < menor que. Por otro lado, >= y <= equivalentes pero con el igual

*/


// Operadores lógicosClase 33 / 79

/*
 and: &&
 Or: ||
 Not: !
 */

 // Ejecución condicional: ifClase 34 / 79 --> Estructuras de control
 let numeroDePrueba = 10
 function condicionales () {
    if (numeroDePrueba < 0 ) {
        console.log('El numero es negativo')
    } else if (numeroDePrueba == 0) {
        console.log('El numero es cero')
    } else {
        console.log('El número es Positivo')
    }

 }

var secretNumber = Math.floor(Math.random()*10)

function resultadoAdivinanza () {
    var numeroInput = parseInt(document.getElementById('numeroEntrada').value); // Convertir a número
    if (numeroInput === secretNumber){
        document.getElementById('resultado').innerHTML = "Has acertado!!!" 
    }else {
        document.getElementById('resultado').innerHTML = "No has acertado :c Intentalo de nuevo"
    }

}

function reiniciarJuego () {
    secretNumber = Math.floor(Math.random()*10);
    document.getElementById('resultado').innerHTML = ""
}

function traerPrecio () {
    var frutaConsulta = document.getElementById('frutaEntrada').value.toLowerCase();
    let precio;
    switch (frutaConsulta) {
        case 'manzana':
            precio = 'La manzana cuesta $700'
            break
        case 'mango':
            precio = 'El mango cuesta $1000'
            break
        case 'banano':
            precio = 'El banano cuesta $400'
            break
        default:
            precio = `no contamos con ${frutaConsulta}s`
    }
    const respuesta = document.getElementById('precioBusqueda')
    respuesta.textContent = precio
}

// Loop: forClase 38 / 79
function mostrarMeses () {
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    for (let i = 0; i < meses.length; i++) {
    console.log(meses[i])
    }
}
/*
for (variable; condición; incremento) {
    código a ejecutar
}
*/

// Loop: forEachClase 39 / 79

/* Ejemplo de uso (sintáxis)
miArreglo.forEach((item) => {
    código a ejecutar
})
*/
let numerosLista = [0, 2, 4, 6, 8, 10];
let sumaNumeros = 0
numerosLista.forEach((numero) => {
    sumaNumeros += numero;

});

// Loop: for ofClase 40 / 79

/*
Sobre elementos iterables -> arrays, string
for (item of iterable) {
    código a ejecutar
}
*/

let notasMusicaless = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']
function imprimirNotas () {
    for (nota of notasMusicaless) {
        console.log(nota)
    }
}

const miNombre = 'Andres'
function imprimirLetras () { 
    for (letraEnNombre of miNombre){
        console.log(letraEnNombre)
    }
    
}

// Loop: for inClase 41 / 79

/*
Se utiliza para iterar sobre objetos enumerables (Es decir, objetos)

for (variable in objeto) {
    código
}

*/

const bandaSombreroDePaja = {
    numeroIntegrantes: 10,
    capitan: 'Luffy',
    barco: 'Sunny Go'
}

function propiedadesSombreroPaja () {
    for (propiedad in bandaSombreroDePaja) {
        console.log(`${propiedad}: ${bandaSombreroDePaja[propiedad]}, Type: ${typeof bandaSombreroDePaja[propiedad]}`)
    }
}

/*
La forma de poder usar el for of sería:


for (fruta of Object.values(listaDeCompras)){
 console.log(fruta)}  // 5, 3, 2, 1

```ya que el Object.values transforma los valores en una lista iterable
```js
Object.values(listaDeCompras) // [5,3,2,1]
 */

// Loop: whileClase 42 / 79
 
/**
 while (condicion) {
    código
 }
 */

 let contador = 0;
function cicloWhile () {
    while (contador < 100) {
        contador += 1;
        console.log(contador)
     }

}

// Loop: do whileClase 43 / 79

/**
 
do {
    código a ejecutar
} while (condición)

 */

do {
    console.log(contador);
    contador++;
}   while(contador < 10)

// Proyecto: Juego adivina la palabraClase 44 / 79

const palabraSecreta = 'violin';
let intentosPermitidos = 3;
function comprobarPalabra () {
    let palabraUsuario = document.getElementById('palabraEntrada').value.toLowerCase();
    let respuestaComprobacion = document.getElementById('respuesta');
    if (palabraUsuario === palabraSecreta && intentosPermitidos>0) {
        respuestaComprobacion.textContent = `${palabraUsuario} es la palabra secreta ¡felicidades!`
    } else {
        intentosPermitidos -= 1
        respuestaComprobacion.textContent = `${palabraUsuario} no es la palabra secreta.
        Número de intentos disponibles: ${intentosPermitidos}`

    }

}

let miArray = [];
for (let i = 0; i < 10; i++) {
    miArray.push(i)
}
miArray.push(10, 11, 12)


let libros = [
    'El señor de los anillos',
    'Cien años de soledad',
    '1984',
    'Orgullo y prejuicio',
    'Harry Potter y la piedra filosofal'
  ];
function addNewBook (book) {
    bookStore[0] = book;
}

function removeBook (book) {
    bookStore
}

// Iteración con map() y forEach()Clase 53 / 79

const numberExample = [1, 2, 3, 4, 5, 6, 7];
const squaredNumbers = numberExample.map(num => num ** 2)