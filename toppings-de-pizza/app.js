// getElementById
console.log("\nContenedor");
const contenedor = document.getElementById('contenedor')
console.log(contenedor);
console.log(contenedor.innerHTML);
console.log(typeof  contenedor.innerHTML);

console.log("\n\nTitulo");
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerHTML);
console.log(titulo.tagName);

// getElementByClassName
console.log("\n\ngetElementByClassName");
const topping = document.getElementsByClassName('topping');
console.log(topping)
console.log(typeof topping)
console.log(topping.length)

// getElementByTagName
console.log("\n\ngetElementByTagName");
const mistoppings = document.getElementsByTagName('li')
console.log(mistoppings);


// querySelector
// querySelectorAll
console.log("\n\nquerySelector and quertySelectorAll");
const aceitunas = document.querySelector("#aceitunas");
console.log(aceitunas);

// Puede tomar dos selectores
const cebollas = document.querySelector(".topping.fondo-naranja");
console.log(cebollas);
console.log(typeof cebollas)


// querySelectorAll
const fondoNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(fondoNaranja);
