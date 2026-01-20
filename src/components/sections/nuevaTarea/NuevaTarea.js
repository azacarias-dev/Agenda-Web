import { guardarTareas, TareaList } from "../tareas/storage.js";

let NuevaTarea = () => {

    let nuevaTareaForm = document.createElement("form");
    nuevaTareaForm.className = "nueva-tarea-form";

    let h3 = document.createElement("h3");
    h3.textContent = "Nueva Tarea";

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.placeholder = "Descripcion de la tarea";

    let inputPrioridad = document.createElement("input");
    inputPrioridad.type = "text";
    inputPrioridad.placeholder = "Prioridad";

    let btnSubmit = document.createElement("button");
    btnSubmit.type = "submit";
    btnSubmit.textContent = "Agregar Tarea";

    let btnCancel = document.createElement("button");
    btnCancel.type = "button";
    btnCancel.textContent = "Cancelar";

    nuevaTareaForm.appendChild(h3);
    nuevaTareaForm.appendChild(inputNombre);
    nuevaTareaForm.appendChild(inputPrioridad);
    nuevaTareaForm.appendChild(btnSubmit);
    nuevaTareaForm.appendChild(btnCancel);

    // Programacion del formulario
    nuevaTareaForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!inputNombre.value || !inputPrioridad.value) return;

        let nuevaTarea = {
            estado: false,
            nombre: inputNombre.value,
            prioridad: inputPrioridad.value
        };

        console.log(nuevaTarea);
        alert("Tarea agregada con exito");
        TareaList.push(nuevaTarea);
        guardarTareas();
        inputNombre.value = "";
        inputPrioridad.value = "";
    });

    return nuevaTareaForm;
};

export { NuevaTarea };