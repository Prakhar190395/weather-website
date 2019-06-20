const request = require('request');
const weatherForecast = ({latitude,longitude},callback) => {
    var weatherURL ='https://api.darksky.net/forecast/b1612b6bf0e4079b54370e1bd77f74e4/'+ encodeURIComponent(latitude) +','+ encodeURIComponent(longitude) +'?units=si';
    request({url : weatherURL,json:true},function(error,response,body){
        if(error){
            callback("weatherForecast connection url error", undefined)
        }
        else if(response.statusCode != 200){
            callback('weatherForecast request error',undefined)
        }
        else{
            callback(undefined,"It is currently "+ body.currently.temperature+" degree out. There is a "+body.currently.precipProbability+"% chance of rain")
        }                
                
                })

}

module.exports=weatherForecast;