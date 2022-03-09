import { generate_weather_data } from "../../emulator/src/weather_output";

/* 
    The data points (and their realistic value ranges) are as follows:
     - ambient temperature (0 - 50°C)
     - track temperature (0 - 100°C)
     - humidity (0 - 1)
     - precipitation (0 - 200 mm)
     - wind speed (0 - 100 km/h)
     - wind direction (0 - 360°)
*/
let prev = {
    "ambient_temp" : 0,
    "track_temp" : 0,
    "humidity" : 0,
    "precipitation" : 0,
    "wind_speed" : 0,
    "wind_dir" : 0,
};

function sanitisedData() {
    let data = generate_weather_data();
    if (data.ambient_temp < 0 || data.ambient_temp > 50) {
        data.ambient_temp = prev.ambient_temp;
    }
    if (data.track_temp < 0 || data.track_temp > 100) {
        data.track_temp = prev.track_temp;
    }
    if (data.humidity < 0 || data.humidity > 1) {
        data.humidity = prev.humidity;
    }
    if (data.precipitation < 0 || data.precipitation > 200) {
        data.precipitation = prev.precipitation;
    }
    if (data.wind_speed < 0 || data.wind_speed > 100) {
        data.wind_speed = prev.wind_speed;
    }
    if (data.wind_dir < 0 || data.wind_dir > 360) {
        data.wind_dir = prev.wind_dir;
    }
    prev = data;
    return data;
}

export { sanitisedData };