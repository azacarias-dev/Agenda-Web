
let LOCAL_STORAGE_KEY = "tareas";

let TareaList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
    { estado: false, nombre: "Comprar alimentos", prioridad: "alta" },
];

let guardarTareas = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(TareaList));
}

export { TareaList, guardarTareas };