let weather = {
    "apiKeys":"37b77442910339623b869841756a2b02",
    fetchWeather:function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKeys}`)
        .then((Response)=>Response.json())
        .then((data)=>{
            this.displayWeather(data)

        })
    },
    displayWeather: function(data){
        const {name}= data;
       const{icon, description}=data.weather[0];
       const{temp,humidity}=data.main
       const{speed}= data.wind
    //    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector('.city').innerText= "Weather in " + name;
    document.querySelector('.icon').src=`https://openweathermap.org/img/wn/${icon}.png`
    document.querySelector('.description').innerText= description;
    document.querySelector('.temp').innerText="Temp: " +temp + "℃";
    document.querySelector('.humidity').innerText="Humidity: "+ humidity + " %";
    document.querySelector('.speed').innerText="Wind Speed: " + speed + " Km/hr";
    document.body.style.backgroundImage=`url("https://source.unsplash.com/720x600/? ${name}")`
    },
    search:function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
};
document.querySelector('.search button').addEventListener('click',function(){
weather.search();
})
document.querySelector('.search-bar').addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        weather.search();
    }
})
