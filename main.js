const apiKeyWeather = "c73e90da9c4acc4657040807bce3d7a8";
const apiURLWeather = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const iconURLWeather = "http://openweathermap.org/img/wn/";
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=montreal&appid=c73e90da9c4acc4657040807bce3d7a8

async function setWeatherCard(){
    getWeatherByName(".card_MTL", ".temperature_MTL" ,".iconMeteo_MTL", "montreal");
    getWeatherByPosition(".card_loc", ".temperature_loc", ".iconMeteo_loc");
}

// Function to get current location
function getWeatherByPosition(card, sectionTemp ,sectionIcon) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
        getWeatherByCoords(card, sectionTemp ,sectionIcon, position.coords.latitude, position.coords.longitude);   
        },
        function(error) {
          getWeatherByName
    (".card_loc", ".temperature_loc", ".iconMeteo_loc", "Antarctica");
        }
      );
    } else {
      getWeatherByName
(".card_loc", ".temperature_loc", ".iconMeteo_loc", "Antarctica");
    }
}
  

//put the color, temperature and icon on both card
function getWeather(card, data, sectionTemp ,sectionIcon){    

    setColorOnCard(document.querySelector(card), 
        getColorCardWeather(
            setWeather(data,sectionTemp ,sectionIcon)
        )
    );

}

//Change the name of the city of the second card 
function setCityName(name){
    document.querySelector(".cityName").innerHTML = `In ${name}`;
}

async function getWeatherByCoords(card, sectionTemp ,sectionIcon, lat, lon){
    try {
        const response = await fetch(apiURLWeather + `&lat=${lat}&lon=${lon}&appid=${apiKeyWeather}`);
        const data = await response.json();

        setCityName(data.name);

        getWeather(card, data ,sectionTemp ,sectionIcon);
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

//get JSON file from api of the weather and call the function to place the different element to go on the card.
async function getWeatherByName(card, sectionTemp ,sectionIcon, location){

    try {
        const response = await fetch(apiURLWeather + `&appid=${apiKeyWeather}&q=${location}`);
        const data = await response.json();

        setCityName(data.name);

        getWeather(card, data ,sectionTemp ,sectionIcon);
        

    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

//put icon and temperature on the card
function setWeather(data, sectionTemp ,sectionIcon){

    const icon = data.weather[0].icon;
    const iconImageUrl = iconURLWeather + icon + `@2x.png`;

    document.querySelector(sectionTemp).innerHTML = data.main.temp + " °C";
    document.querySelector(sectionIcon).innerHTML = `<img src="${iconImageUrl}" alt="Weather icon">`;

    return icon;

}

//Put the color on the selected card
function setColorOnCard(card,color){
    card.style.background = color;
    
}

//find the color depending on the icon
function getColorCardWeather(icon){

    switch (icon) {
        case "01n":
        case "01d":
            return 'linear-gradient(135deg, white, rgb(143,224,255))';
        break;

        case "02n":
        case "02d":
            return'linear-gradient(135deg, white, rgb(143,224,255))';
        break;

        case "03n":
        case "03d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;

        case "04n":
        case "04d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;

        case "09n":
        case "09d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;

        case "10n":
        case "10d":
            return 'linear-gradient(135deg, white, rgb(117,180,227))';
        break;

        case "11n":
        case "11d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;

        case "13n":
        case "13d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;

        case "50n":
        case "50d":
            return 'linear-gradient(135deg, white, rgb(84,65,109))';
        break;
    
        default:
            return 'linear-gradient(135deg, yellow, white)';
        break;
    }


}



function titleName() {
    document.addEventListener('DOMContentLoaded', function() {
        const itemElements = document.querySelectorAll('.MenuItem');
        const homeElement = document.querySelector('.home');
        const titleElement = document.querySelector('.title');
        const itemList = document.querySelector('.itemList');

        function showHome(content) {
            homeElement.textContent = content;
            homeElement.classList.add('show');
        }

        function hideHome() {
            homeElement.classList.remove('show');
            setTimeout(() => {
                homeElement.textContent = '';
            }, 0); // Match the duration of the CSS transition
        }

        titleElement.addEventListener('mouseenter', function() {
            showHome("Home");
        });

        titleElement.addEventListener('mouseleave', function() {
            hideHome();
        });

        itemElements.forEach(function(itemElement) {
            itemElement.addEventListener('mouseenter', function() {
                showHome(itemElement.textContent);
            });
        });

        itemList.addEventListener('mouseleave', function() {
            hideHome();
        });
    });
}




setWeatherCard();
titleName();


document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading content with a timeout
    setTimeout(function() {
        const cardLoc = document.querySelector('.card_loc');
        cardLoc.classList.remove('loading');
    }, 2000); // Adjust the timeout as needed
});

document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading content with a timeout
    setTimeout(function() {
        const cardLoc = document.querySelector('.card_MTL');
        cardLoc.classList.remove('loading');
    }, 2000); // Adjust the timeout as needed
});

// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the meteoLine div
    const meteoLineDiv = document.querySelector('.meteoLine');
    
    // Check if the element exists (defensive programming)
    if (meteoLineDiv) {


        const numb = Math.floor(Math.random() * 10);

        const jokes = [
            ["Why did the snowman move to Montreal?", "He heard it's a cool place to chill out!"],
            ["How do Montrealers stay cool in the summer?", "They just stand in the shade of their own parking tickets!"],
            ["Why do Montrealers never trust the weather in spring?", "Because it likes to change faster than a traffic light on St. Catherine Street!"],
            ["How do you know it's fall in Montreal?", "When you see the squirrels putting on their parkas!"],
            ["Why don't Montrealers bother with the weather forecast?", "Because they know it’ll be wrong five minutes later anyway!"],
            ["How can you tell when it's springtime in Montreal?", "When the potholes start to bloom!"],
            ["Why did the Montrealer bring a ladder to the snowstorm?", "To climb over the snowbanks to find their car!"],
            ["How do Montrealers train for winter?", "By trying to walk on the sidewalks in January!"],
            ["Why did the Montrealer install air conditioning in their igloo?", "Because even the igloos can't handle the summer humidity!"],
            ["What do Montrealers and the weather have in common?", "They both change dramatically in a matter of minutes!"]
        ];

        const joke = jokes[numb];
        const jokeText = joke[0] + "<br>"+ "<br>" + joke[1];
            
        meteoLineDiv.innerHTML = jokeText; // Use innerHTML to insert HTML tags like <br>
    } 
});
