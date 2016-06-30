var searchWeather = ({query}, callback) => {
  $.get("http://api.openweathermap.org/data/2.5/forecast",
        {q: query,
         APPID:WEATHER_API_KEY},
         function(data){
         	if(callback){
            callback(data);
            } 
            console.log(data)       
         }
    )
};

window.searchWeather = searchWeather;
//api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=6c0102bbec2e4f265ce4a437a7da3ea9