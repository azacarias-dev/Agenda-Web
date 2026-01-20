import { TareaList } from "./storage.js";
import { itemTarea } from "../../common/itemTarea/itemTarea.js";

let tareas = () => {
    let sectionTareas = document.createElement("section");
    sectionTareas.className = "tareas";

    let h2 = document.createElement("h2");
    h2.textContent = "Lista de Tareas";
    sectionTareas.appendChild(h2);

    TareaList.forEach((tarea, index) => {
        sectionTareas.appendChild(itemTarea(tarea, index));
    });

    return sectionTareas;
};

export {tareas};