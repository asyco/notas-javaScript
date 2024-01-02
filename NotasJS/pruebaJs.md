# PRUEBA DE JAVASCRIPT

## Variables y operaciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
#### ¿Qué es una variable y para qué sirve?
Respuesta: Una variable es una representación de un espacio en memoria que nos sirve para
almacenar datos (información), también posee un nombre que describe lo que deseamos guardar en ella.
#### ¿Cuál es la diferencia entre declarar e inicializar una variable?
Respuesta: En el primer caso no específicamos que valor tiene o almacena esta variable, 
solamente expresamos su existencia y cuando inicializamos, le estamos dando un valor inicial a
la variable.
#### ¿Cuál es la diferencia entre sumar números y concatenar strings?
Respuesta: sumar números corresponde a una operación aritmética y concatenar strings es una operación
entre cadenas de caracteres que consiste en generar una nueva cadena compuesta por dos o mas cadenas yuxtapuestas
#### ¿Cuál operador me permite sumar o concatenar?
Respuesta: El operador +
### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre
nombre (string)
Apellido
apellido (string)
Nombre de usuario en Platzi
nombreUsuarioPlatzi (string)
Edad
edad (Number)
Correo electrónico
correo (string)
Mayor de edad
esMayorDeEdad (Boolean)
Dinero ahorrado
dineroAhorrado (Number)
Deudas
deudas (Number)
### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre;
let apellido;
let dineroAhorrado;
let deudas;
### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto)
Dinero real (dinero ahorrado menos deudas)
let dineroReal = dineroAhorrado - deudas
console.log(dineroReal)
## Funciones
### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Una función es un bloque de código que realiza una acción específica, puede o no recibir argumentos y entregar un resultado.
¿Cuándo me sirve usar una función en mi código?
Respuesta: Cuando una tarea se realizará más de una vez se puede agrupar en una función o cuando es una acción particular que necesito aislar del resto del código. Cuando no quiero duplicar código
¿Cuál es la diferencia entre parámetros y argumentos de una función?
Los parámetros de una función son aquellas variables que usamos para definir la función mientras que los argumentos son los valores reales que le pasamos a esta función cuando la invocamos, estos valores serán asignados
a los parámetros de la función.
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

Respuesta:

function presentacion (completeName, nickname) {
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickName}.`);

}

Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
Es una expresión que nos sirve de verificación de que se cumple cierta condición para continuar o no con un código
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if () {}
else if () {}
else
-----
switch () {
    case 1:
        code
        break
    case 2:
        code
        break
    default:
        code
        break
    
}
¿Puedo combinar funciones y condicionales?
Sí se puede
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion = "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
let mensajeFree =  tipoDeSuscripcion === "Free" ? "Solo puedes tomar los cursos gratis" : (tipoDeSuscripcion === "Free" ? "Puedes tomar casi todos los cursos de Platzi durante un mes" : "nada" ) ...

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es un proceso iterativo por el cual se evalua una condición y dependiendo de su valor de verdad se repite la ejecución de un fragmento de código
¿Qué tipos de ciclos existen en JavaScript?
for
for each
for in
while
do while
¿Qué es un ciclo infinito y por qué es un problema?
Es un ciclo en el que la condición siempre es True, es un problema porque si no es lo que deseamos que haga el ciclo, este consumirá más recursos de lo que esperamos y será muy ineficiente nuestro programa.
¿Puedo mezclar ciclos y condicionales?
Sí es posible 
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
------
let i = 0
while (i<5) {
    console.log("El valor de i es: " + i);
    i++;
}
------

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

------
let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
------
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
function acertijo () {
    respuesta = false;
    while (!respuesta) {
        usuarioRespuesta = parseInt(prompt('¿Cuánto es 2 + 2?'));
        if (usuarioRespuesta === 4) {
            respuesta = true;
        }
    }
    alert ('¡Felicidades, acertaste!')
}
Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es un tipo de estructura de datos que nos sirve para indexar información
¿Qué es un objeto?
Es un tipo de datos que tiene propiedades y valores
¿Cuándo es mejor usar objetos o arrays?
--
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Sí
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const imprimePrimer = (miArray) => miArray[0] 
function imprimePrimerElemento (miArray) {
    console.log(miArray[0])
}
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function imprimir2 (miArray) {
    for(elemento in miArray) {
        console.log(elemento);
    }
}
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes. Y tú deberías de saberlo también.

¡Te espero en la siguiente clase para comenzar!