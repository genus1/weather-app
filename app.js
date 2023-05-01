import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

const address = process.argv[2]

//if (!address) {
//    console.log('Please provide an address.')
//} else {
//    geocode(address, (error, data) => {
//        if (error) {
//            return console.log(error)
//        }

//        forecast(data.latitude, data.longitude, (error, forecastData) => {
//            if (error) {
//                return console.log(error)
//            }
//            console.log(data.location)
//            console.log(forecastData)
//        })
//    })
//}
//destructured below
if (!address) {
    console.log('Please provide an address.')
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {  //the ={} is an empty default if needed
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}