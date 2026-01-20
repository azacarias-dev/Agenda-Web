import { ContactList, guardarContactos} from "../contactos/db.js";

let nuevoContacto = () => {
    let nuevoContacto = document.createElement("form");
    nuevoContacto.className = "nuevoContacto-padre";

    let h3 = document.createElement("h3");
    h3.className = "nuevoContacto-titulo";
    h3.innerHTML = "Nuevo Contacto";

    let userName = document.createElement("input");
    userName.className = "name-input";
    userName.type = "text";
    userName.placeholder = "Ingresa el nombre";

    let telefono = document.createElement("input");
    telefono.className = "telefono-input";
    telefono.type = "tel";
    telefono.placeholder = "Ingresa el telefono";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Guardar";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    nuevoContacto.appendChild(h3);
    nuevoContacto.appendChild(userName);
    nuevoContacto.appendChild(telefono);
    nuevoContacto.appendChild(btnSubmit);
    nuevoContacto.appendChild(btnCancel);

    // Programacion de formulario

    nuevoContacto.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!userName.value || !telefono.value) return;

        let contacto = {
            nombre: userName.value,
            telefono: telefono.value
        };

        console.log(contacto);
        alert("Contacto agregado con exito");
        ContactList.push(contacto);
        guardarContactos();
        userName.value = "";
        telefono.value = "";

    });

    return nuevoContacto;
}

export { nuevoContacto };