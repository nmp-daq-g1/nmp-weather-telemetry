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

const dataStruct = {
    ambient_temp: 0,
    track_temp: 0,
    humidity: 0,
    precipitation: 0,
    wind_speed: 0,
    wind_dir: 0,
};

const prev: Array<typeof dataStruct> = new Array(20);
prev.fill(dataStruct);

function sanitisedData(): typeof dataStruct {
    const data = generate_weather_data();
    const last = prev[19] as typeof dataStruct;
    if (
        data.ambient_temp < 0 ||
        data.ambient_temp > 50 ||
        isNaN(data.ambient_temp)
    ) {
        data.ambient_temp = last.ambient_temp;
    }
    if (
        data.track_temp < 0 ||
        data.track_temp > 100 ||
        isNaN(data.track_temp)
    ) {
        data.track_temp = last.track_temp;
    }
    if (data.humidity < 0 || data.humidity > 1 || isNaN(data.humidity)) {
        data.humidity = last.humidity;
    }
    if (
        data.precipitation < 0 ||
        data.precipitation > 200 ||
        isNaN(data.precipitation)
    ) {
        data.precipitation = last.precipitation;
    }
    if (
        data.wind_speed < 0 ||
        data.wind_speed > 100 ||
        isNaN(data.wind_speed)
    ) {
        data.wind_speed = last.wind_speed;
    }
    if (data.wind_dir < 0 || data.wind_dir > 360 || isNaN(data.wind_dir)) {
        data.wind_dir = last.wind_dir;
    }
    prev.shift();
    prev[19] = data;
    return data;
}

export { sanitisedData };
