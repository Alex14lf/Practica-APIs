class Avatar {
    constructor(imagen, nombre) {
        this.imagen = imagen;
        this.nombre = nombre;
    }

    getImagen() {
        return this.imagen;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
}

let getAvatars = async () => {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response);
    let responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.results);
    guardarEnLocalStorage("Avatars", responseJSON.results);
    let data = obtenerDeLocalStorage("Avatars");
    loadAvatars(data);
}

let avatars__container = document.getElementById("avatars__container");

loadAvatars = (results) => {
    let fragment = document.createDocumentFragment();
    results.forEach(element => {
        let avatar = new Avatar(element.image, element.name);
        let div = document.createElement("DIV");
        div.classList.add("data");
        let img = document.createElement("IMG");
        img.classList.add("data__image")
        img.src = avatar.imagen;
        let p = document.createElement("P");
        p.classList.add("data__name")
        p.textContent = avatar.nombre;
        div.append(img);
        div.append(p);
        fragment.append(div);
    });
    avatars__container.append(fragment);
}

document.addEventListener("DOMContentLoaded",getAvatars);