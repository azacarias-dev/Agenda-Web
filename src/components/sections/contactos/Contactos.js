import { itemContacto } from "../../common/itemContacto/ItemContacto.js";

let Contactos = () => {
    let sectionContactos = document.createElement("section");
    sectionContactos.className = "contactos";

    let h2 = document.createElement("h2");
    h2.textContent = "Contactos";
    sectionContactos.appendChild(h2);
    sectionContactos.appendChild(itemContacto("account.svg","Alessandro Zacarias","55854521"));

    return sectionContactos;
}

export { Contactos };
