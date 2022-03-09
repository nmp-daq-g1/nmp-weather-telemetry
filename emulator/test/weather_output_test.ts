//import {generate_weather_data} from "../src/weather_output";
import {sanitisedData} from "../../server/src/dataSanitise"

async function print_weather_data() {
    console.log(sanitisedData());    
}

setInterval(print_weather_data, 1000);