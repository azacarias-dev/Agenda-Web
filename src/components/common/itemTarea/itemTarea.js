import { TareaList, guardarTareas } from "../../sections/tareas/storage.js";

let itemTarea = (tarea, index) => {
    let itemTarea = document.createElement("div");
    itemTarea.className = "item_tarea";

    let etiquetaEstado = document.createElement("input");
    etiquetaEstado.type = "checkbox";
    etiquetaEstado.checked = tarea.estado;

    etiquetaEstado.addEventListener("change", () => {
        TareaList[index].estado = etiquetaEstado.checked;
        guardarTareas();
    });

    let etiquetaNombre = document.createElement("p");
    etiquetaNombre.textContent = tarea.nombre;

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = tarea.prioridad;

    itemTarea.appendChild(etiquetaEstado);
    itemTarea.appendChild(etiquetaNombre);
    itemTarea.appendChild(etiquetaPrioridad);

    return itemTarea;
}

export {itemTarea};