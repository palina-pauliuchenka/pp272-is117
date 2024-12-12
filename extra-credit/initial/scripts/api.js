function weatherData (locationID, setInfo) {
    const apiKey = 'f2eeb5cb5e32b5a64944302ab90a6c44';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + locationID + '&appid=' + apiKey;

    fetch(url)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            printWeather(data);
            if (!setInfo) return;
            setWeatherInfo(data.name, data.sys.country);
        })
        .catch(errors => {
            console.log('error')
        });
}

function printWeather(data) {
    // Extract the city and country names
    const cityName = data.name;
    const countryName = data.sys.country;

    // Convert temperature to Celsius
    const tempCelsiusScale = (data.main.temp - 273.15).toFixed(2);
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;

    // Get the list of existing locations
    const list = document.querySelector('.locations');
    const existingCities = Array.from(list.querySelectorAll('.location-name'));

    // Check if the city already exists
    const isDuplicate = existingCities.some(
        city => city.textContent === `${cityName}, ${countryName}`
    );

    if (isDuplicate) {
        alert(`Weather card for ${cityName}, ${countryName} is already added.`);
        return; // Exit the function without adding the duplicate
    }

    // Create and append a new weather card if no duplicate is found
    const li = document.createElement("li");
    li.classList.add('location');
    li.innerHTML = `
        <h2 class="location-name">${data.name}, ${data.sys.country}</h2>
        <p class="location-temperature">${tempCelsiusScale}<span>°C</span></p>
        <img src="${weatherIcon}" alt="${data.weather[0].main}">
        <p class="location-description m-0">${data.weather[0].description}</p>
        <button class="btn btn-danger btn-sm remove-btn">Remove</button>
    `;

    list.appendChild(li);

    // Attach event listener to remove the weather card
    li.querySelector('.remove-btn').addEventListener('click', () => {
        li.remove(); // Remove the weather card
    });
}

window.onload = function () {
    document.getElementById('searchBtn').addEventListener('click', event => {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput')
        const searchForm = document.getElementById('searchForm');
        weatherData(searchInput.value, true);
        searchForm.reset();
        searchInput.focus();
    })
}