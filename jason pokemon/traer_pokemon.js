function Traer_pokemon_kakuna(){

var UrlApi = "https://pokeapi.co/api/v2/pokemon/kakuna"
console.log(UrlApi)
fetch(UrlApi)
.then(response => response.json())
.then(data => 
    {
     var imagen;
     imagen = document.createElement("img");
     imagen.src = data.sprites.front_default;
     salida = imagen.src;
     document.getElementById("imagen_kakuna").innerHTML = "<img.src=" +salida+">";
    }

    )
}

function Imprimir_pokemon(){

    var UrlApi = "https://pokeapi.co/api/v2/pokemon"
    console.log(UrlApi)
    fetch(UrlApi)
    .then(response => response.json())
    .then(data => 
        {
         for(let i of data["results"])
         {
             console.log(data)
             document.write(i.name+"<br>")
         }
        }
    
        )
    }

function Escribir_pokemon(){
var pokemon = document.getElementById("pokemon_name").value;
console.log(pokemon)

var UrlApi = "https://pokeapi.co/api/v2/pokemon/"+pokemon
console.log(UrlApi)
fetch(UrlApi)
.then(response => response.json())
.then(data => 
    {
     var imagen;
     imagen = document.createElement("img");
     imagen.src = data.sprites.front_default;
     salida = imagen.src;
     document.getElementById("imagen_pokemon").innerHTML = "<img.src =" +salida+">";
    }

    )
}