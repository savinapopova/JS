function attachEvents() {

    let btn = document.getElementById('submit');
    btn.addEventListener('click', displayForecast);

    let forecastSection = document.getElementById('forecast');
    let currentSection = document.getElementById('current');
    let upcomingSection = document.getElementById('upcoming');
    let locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

    let symbols = {
        'Sunny': '&#x2600',
        'Partly sunny':	'&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    async function displayForecast(event) {
        event.preventDefault();

        let location = document.getElementById('location').value;
        let code;
        let currentForecastUrl = `http://localhost:3030/jsonstore/forecaster/today/`;
        let upcomingForecastUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

        try {
            code = await getCode(location);
            let currentForecast = await getForecast(currentForecastUrl + code);
            let upcomingForecast = await getForecast(upcomingForecastUrl + code);
            createCurrentElement(currentForecast);
            createUpcomingElement(upcomingForecast)

        } catch (error) {
        forecastSection.style.display = 'block';
        forecastSection.innerHTML = 'Error';
    }



    }

    async function getCode(location) {
            let response = await fetch(locationsUrl);
            let data = await response.json();
            let code = data.find(o => o.name === location).code;
            console.log(code);
            if (!code) {
                throw new Error();
            }
            return code;
    }

    async function getForecast(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    function createCurrentElement(currentForecast) {
        forecastSection.style.display = 'block';
        currentSection.innerHTML = '<div class="label">Current conditions</div>';
        let forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecasts');
        let symbolSpan = document.createElement('span');
        symbolSpan.classList.add('condition', 'symbol');
        symbolSpan.innerHTML = symbols[currentForecast.forecast.condition];
        forecastDiv.appendChild(symbolSpan);
        let dataSpan = document.createElement('span');
        dataSpan.classList.add('condition');
        let locationSpan = document.createElement('span');
        locationSpan.classList.add('forecast-data');
        locationSpan.textContent = currentForecast.name;
        dataSpan.appendChild(locationSpan);
        let tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.innerHTML =
            `${currentForecast.forecast.low}${symbols.Degrees}/${currentForecast.forecast.high}${symbols.Degrees}`;
        dataSpan.appendChild(tempSpan);
        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = currentForecast.forecast.condition;
        dataSpan.appendChild(conditionSpan);

        forecastDiv.appendChild(dataSpan);
        currentSection.appendChild(forecastDiv);

    }

    function createUpcomingElement(upcomingForecast) {
        upcomingSection.innerHTML = '<div class="label">Three-day forecast</div>';
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('forecast-info');
        upcomingForecast.forecast.forEach(e => infoDiv.appendChild(createDailyForecast(e)));

        upcomingSection.appendChild(infoDiv);
    }

    function createDailyForecast(entry) {
        let span = document.createElement('span');
        span.classList.add('upcoming');
        let symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        symbolSpan.innerHTML = symbols[entry.condition];
        span.appendChild(symbolSpan);
        let tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.innerHTML =
            `${entry.low}${symbols.Degrees}/${entry.high}${symbols.Degrees}`;
        span.appendChild(tempSpan);
        let conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = entry.condition;
        span.appendChild(conditionSpan);

        return span;
    }
}

attachEvents();
