let weather = document.getElementById("weather");
let weather_card = document.getElementById("weather_card");
let loading_skeleton = document.getElementById("loading_skeleton");
let temp = document.getElementById("temp");
let Name = document.getElementById("name");
let weather_type = document.getElementById("weather_type");
let img_weather = document.getElementsByClassName("img_weather")[0];
let humidity = document.getElementById("humidity");
let wind = document.getElementById("Wind");
let wind_img = document.getElementsByClassName("wind_img")[0];
let search = document.getElementById("search");
let search_icon = document.getElementById("search_Icon");
let humidity_img = document.getElementById("humidity_img");
let Message = document.getElementById("message");
let windspeed = document.getElementById("windspeed");
let Humidity = document.getElementById("Humidity");
let bottom = document.getElementById("bottom");
let cont = document.getElementById("cont");
let weather_type_img = document.getElementById("weather_type_img")
// let weather_type_img = document.getElementById("weather_type_img");
// weather_card.style.display="none";
// weather_card.style.visibility="hidden";

bottom.style.display = "none";
weather_type.style.display = "none";
// cont.style.display="none";
async function fetchdata(city) {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7cfaae22d2ff44f638509451a8e96359`).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res);
        if (res.message) {
            Message.style.display = "block";
            bottom.style.display = "none";
            temp.style.display = "none";
            Name.style.display = "none";
            weather_type_img.style.display = "none";
            Message.innerText = res.message;
        }
        if (res) {
            loading_skeleton.style.display = "none";
            weather_card.style.display = "block";
            // weather_type.style.display="block";
            weather_card.style.visibility = "visible";
            if (res.name) {
                Message.style.display = "none";
                bottom.style.display = "flex";
                temp.style.display = "block";
                Name.style.display = "block";
                weather_type_img.style.display = "block";
                weather_type.style.display = "flex";
                temp.innerText = res.main.temp.toFixed() + "°C";
                Name.innerText = res.name;
                console.log(res.name);
                Humidity.innerText = "Humidity";
                humidity.innerText = res.main.humidity;
                windspeed.innerText = "Wind Speed";
                wind.innerText = `${res.wind.speed}`;
                wind_img.src = "/weather-app/images/wind.png";
                humidity_img.src = "/weather-app/images/humidity.png";
                console.log(res.main.humidity)
                if (res.weather[0].main == "Clouds") {
                    weather_type_img.src = "/weather-app/images/cloud.png";
                    console.log(weather_type_img)

                } else if (res.weather[0].main == "Clear") {
                    weather_type_img.src = "/weather-app/images/clear.png";
                } else if (res.weather[0].main == "Rain") {
                    weather_type_img.src = "/weather-app/images/rain.png";
                } else if (res.weather[0].main == "Humidity") {
                    weather_type_img.src = "/weather-app/images/humidity.png";
                } else if (res.weather[0].main == "Snow") {
                    weather_type_img.src = "/weather-app/images/snow.png";
                } else if (res.weather[0].main == "Wind") {
                    weather_type_img.src = "/weather-app/images/wind.png";
                } else if (res.weather[0].main == "Drizzle") {
                    weather_type_img.src = "/weather-app/images/drizzle.png";
                }
            }
        }

    }).catch((error) => {
        console.log(error);
    })

}
// fetchdata(search);
search_icon.addEventListener("click", () => {
    loading_skeleton.style.display = "block";
    weather_card.style.display = "none";
    Message.style.display = "none";
    console.log("clicked");
    fetchdata(search.value);
    console.log(search.value);
});
 if(outerWidth<=920){
        console.log("resizing");

    }
    console.log(outerWidth);



