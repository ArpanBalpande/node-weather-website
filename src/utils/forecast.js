const request = require('request')
const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/5c4e8d0cdc93d354ff77acd11abc772b/' + longitude + ',' + latitude
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. With Highest Temperature as: ' + body.daily.data[0].temperatureHigh + ' and the Lowest Temperature as: ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast