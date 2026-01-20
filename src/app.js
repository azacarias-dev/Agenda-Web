//section menu

import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewNewContacts, viewToDoList, viewNewTask } from "./components/layout/nav/NavControlers.js";


let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Lista de Contactos",
    "agenda",
    "account.svg",
    viewContacts
));
nav.appendChild(Button(
    "Agregar Contacto",
    "plus",
    "plus.svg", 
    viewNewContacts
));
nav.appendChild(Button(
    "Lista de Tareas",
    "toDoList",
    "toDo.svg",
    viewToDoList
));
nav.appendChild(Button(
    "Agregar Tarea",
    "plus",
    "plus.svg",
    viewNewTask
));

let container = document.getElementById("container");

container.appendChild(Contactos());


async function tareas() {
    try {
        let datos = await fetch("https://jsonplaceholder.typicode.com/posts");
        let r = await datos.json();
        console.log(r);
    } catch (error) {
        
    }
}

tareas();

console.log("Completado")