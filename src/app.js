//section menu

import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { viewContacts, viewNewContacts, viewToDoList, viewNewTask } from "./components/layout/nav/NavControlers.js";


let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button(
    "Agenda",
    "agenda",
    "account.svg",
    viewContacts
));
nav.appendChild(Button(
    "+",
    "plus",
    "plus.svg", 
    viewNewContacts
));
nav.appendChild(Button(
    "Tareas",
    "toDoList",
    "toDo.svg",
    viewToDoList
));
nav.appendChild(Button(
    "Crear Tarea",
    "plus",
    "plus.svg",
    viewNewTask
));

let container = document.getElementById("container");

container.appendChild(Contactos());





