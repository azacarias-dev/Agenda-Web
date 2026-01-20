import { TareaList } from "./storage.js";
import { itemTarea } from "../../common/itemTarea/itemTarea.js";

let tareas = () => {

    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let sectionLabel = document.createElement("section");
    sectionLabel.className = "label";

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    sectionTareas.appendChild(h2);

    let labelCheckList = document.createElement("h3");
    labelCheckList.textContent = "Listo";
    sectionLabel.appendChild(labelCheckList);

    let labelDescripcion = document.createElement("h3");
    labelDescripcion.textContent = "Descripcion";
    sectionLabel.appendChild(labelDescripcion);

    let labelFecha = document.createElement("h3");
    labelFecha.textContent = "Fecha";
    sectionLabel.appendChild(labelFecha);
    
    let labelPrioridad = document.createElement("h3");
    labelPrioridad.textContent = "Prioridad";
    sectionLabel.appendChild(labelPrioridad);

    sectionTareas.appendChild(sectionLabel);

    TareaList.forEach((tarea, index) => {
        sectionTareas.appendChild(itemTarea(tarea, index));
    });

    return sectionTareas;
};

export { tareas };