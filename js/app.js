let myLocation =  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    let lon = position.coords.longitude
    let lat = position.coords.latitude
    //console.log(lon);
    //console.log(lat);
    
    const API_key = '5554e7b0dbd700efa074fffd50a0a12d'
    const  API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    console.log(API_URL)
    
    fetch(API_URL).then((respose) =>{
        return respose.json()
    }).then((data) =>{
        var temp = document.getElementsByTagName("template")[0];
        var clon = temp.content.cloneNode(true);
        document.body.appendChild(clon);
        let currentLocation = document.querySelector('[data-current-location]')
        let currentTemp = document.querySelector('[data-current-temp]');
        let currentText = document.querySelector('[data-current-text]');
        console.log(currentLocation);
       // console.log(data)
        currentLocation.textContent = data.timezone
        currentTemp.textContent = data.current.temp
        currentText.textContent = data.current.weather[0].main
    });

});