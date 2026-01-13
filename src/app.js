//section menu

import { Button } from "./components/common/button/button.js";
import { Contactos } from "./components/sections/contactos/Contactos.js";

let app = document.getElementById("app");

let nav = document.getElementById("nav");

nav.appendChild(Button("Agenda", "agenda", "account.svg"));
nav.appendChild(Button("+","plus","plus.svg"));
nav.appendChild(Button("ToDoList","toDoList","toDo.svg"));
nav.appendChild(Button("Crear Tarea","plus","plus.svg"));

let container = document.getElementById("container");
container.appendChild(Contactos());


