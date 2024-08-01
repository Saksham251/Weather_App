// const API_KEY = "168771779c71f3d64106d8a88376808a";


// function renderWeatherInfo(data){
//     let newPara = document.createElement('p');
//     newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;
//     document.body.appendChild(newPara);
// }
// async function fetchWeatherDetails(){
//     try{
//         let city="goa";
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
//         const data = await response.json();
//         console.log("Weather data:-> ",data);

//         renderWeatherInfo(data);
//     }
//     catch{

//     }
// }


// async function getCustomWeatherDetails(){
//     let latitude=15.33;
//     let longitude=17.33;
//     const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
//     const data = await result.json();

//     console.log(data);
// }



// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else{
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position){
//     let lat= position.coords.longitude;
//     let longi= position.coords.latitude;
//     console.log(lat);
//     console.log(longi);
// } 





// JSON String to JSON Object
// To convert a JSON string to a JSON object, use JSON.parse():

// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.name); // Output: John
// console.log(jsonObject.age);  // Output: 30
// console.log(jsonObject.city); // Output: New York