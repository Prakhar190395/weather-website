const request = require('request');
const geocode = (address , callback) => {
    var geocodeURL ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicHJha2hhcjE5IiwiYSI6ImNqdzEwMnRhdjA0Mm00OG9iZWFuN2h5dDgifQ.K-VNGSNcKiOEWzuwnVQWUQ&limit=1&country=IN";
    request({url:geocodeURL, json:true},function(error,response,body){
        if(error){
            callback("Gecode connection url error", undefined)
        }
        else if(response.statusCode != 200){
            callback('Geocode request error',undefined)
        }
        else if(body.features.length == 0){
            callback('Try with another location',undefined)
        }
        else {
             var geocodeDetails={
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
             }
            callback(undefined,geocodeDetails);
        }

    })


}

module.exports = geocode;