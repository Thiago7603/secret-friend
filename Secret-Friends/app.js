// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue añadido.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista visible en la página
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un nombre de la lista
        const eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "❌";
        eliminarBtn.setAttribute("aria-label", `Eliminar ${amigo}`);
        eliminarBtn.onclick = () => eliminarAmigo(index);

        li.appendChild(eliminarBtn);
        lista.appendChild(li);
    });
}

// Función para eliminar un nombre de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Por favor, añade al menos un nombre.");
        return;
    }

    const resultado = document.getElementById("resultado");
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${ganador}</strong> 🎉</p>`;
}
