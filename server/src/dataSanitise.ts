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
export function sanitisedData(): void {
    let data = generate_weather_data();
    if (data.ambient_temp < 0 || data.ambient_temp > 50) {
        //fix it lmao
    }
    if (data.track_temp < 0 || data.track_temp > 100) {
    }
    if (data.humidity < 0 || data.humidity > 1) {
    }
    if (data.precipitation < 0 || data.precipitation > 200) {
    }
    if (data.wind_speed < 0 || data.wind_speed > 100) {
    }
    if (data.wind_dir < 0 || data.wind_dir > 360) {
    }
    return;
}
