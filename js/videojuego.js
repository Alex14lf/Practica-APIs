class Videojuego {
    constructor(imagen, nombre){
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

let getGames = async () => {
    let response = await fetch("https://api.rawg.io/api/games?key=858cfa0c1e47413fa7d2b2cf89961649");
    console.log(response);
    let responseJSON = await response.json();
    console.log(responseJSON);
    console.log(responseJSON.results)
    guardarEnLocalStorage("Videojuegos", responseJSON.results);
    let data = obtenerDeLocalStorage("Videojuegos");
    loadGames(data);
}

let games__container = document.getElementById("games__container");

loadGames = (results) => {
    let fragment = document.createDocumentFragment();
    results.forEach(element => {
        let videojuego = new Videojuego(element.background_image, element.name);
        let div = document.createElement("DIV");
        div.classList.add("data");
        let img = document.createElement("IMG");
        img.classList.add("data__image")
        img.src = videojuego.imagen;
        let p = document.createElement("P");
        p.classList.add("data__name")
        p.textContent = videojuego.nombre;
        div.append(img);
        div.append(p);
        fragment.append(div);
    });
    games__container.append(fragment);
}

document.addEventListener("DOMContentLoaded",getGames);