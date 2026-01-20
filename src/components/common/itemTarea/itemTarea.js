import { TareaList, eliminarTarea, guardarTareas} from "../../sections/tareas/storage.js";

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

    let etiquetaFecha = document.createElement("p");
    etiquetaFecha.textContent = tarea.fecha;

    let etiquetaPrioridad = document.createElement("p");
    etiquetaPrioridad.textContent = tarea.prioridad;

    let etiquetaEliminar = document.createElement("button")
    etiquetaEliminar.className = "btn-eliminar";

    let imagenBoton = document.createElement("img");
    imagenBoton.src = `./assets/icons/delete_icon.svg`;

    etiquetaEliminar.appendChild(imagenBoton);

    etiquetaEliminar.addEventListener('click',function(){
        eliminarTarea(index);
    })
    
    itemTarea.appendChild(etiquetaEstado);
    itemTarea.appendChild(etiquetaNombre);
    itemTarea.appendChild(etiquetaFecha);
    itemTarea.appendChild(etiquetaPrioridad);
    itemTarea.appendChild(etiquetaEliminar);

    return itemTarea;
}

export {itemTarea};