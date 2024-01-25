let listaGenerica = [2];
console.log(listaGenerica);
listaGenerica.push(5);
console.log(listaGenerica.length);
//elemento en la lista en posicion 0 o sea el primer elemento
console.log(listaGenerica[0]);
listaGenerica.push(7);
console.log(listaGenerica.length);
//ultimo elemento de la lista
console.log(listaGenerica[listaGenerica.length - 1]);

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

function mostrarLista() {
    console.log(lenguajesDeProgramacion)
}

mostrarLista();
