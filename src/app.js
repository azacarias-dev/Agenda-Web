//section menu

import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";
import { nuevoContacto } from "./components/sections/nuevosContactos/NuevoContacto.js";
import { viewContacts, viewNewContacts } from "./components/layout/nav/NavControlers.js";

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
nav.appendChild(Button("ToDoList","toDoList","toDo.svg"));
nav.appendChild(Button("Crear Tarea","plus","plus.svg"));

let container = document.getElementById("container");

container.appendChild(Contactos());

//container.appendChild(nuevoContacto());




