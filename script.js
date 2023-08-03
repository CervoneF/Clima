
let enviar = document.querySelector("button");
let ciudad = document.querySelector("input");
let icono = document.querySelector("#wicon")

function cargarCiudad() {
    
    document.querySelector(".container").style.visibility = "visible";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad.value + "&appid=fdd533266e28101881f610f2b8f1ebe1" + "&units=metric"
    , function (data) {

        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").innerHTML = parseInt(data.main.temp) + "<sup> °C</sup>"
        icono.src = "https://openweathermap.org/img/wn/10d@2x.png";
        document.querySelector("#descripcion").textContent = data.weather[0].description
            
        console.log(data)

        ciudad.value = " ";


        })
        
    
    }    



enviar.addEventListener("click", cargarCiudad)

ciudad.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
    cargarCiudad();
    }
}
)

