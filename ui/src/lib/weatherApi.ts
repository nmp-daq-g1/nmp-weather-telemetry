import axios from 'axios';

export interface OpenMeteoData {
  longitude: number;
  hourly_units: HourlyUnits;
  latitude: number;
  hourly: Hourly;
  utc_offset_seconds: number;
  elevation: number;
  generationtime_ms: number;
}

export interface Hourly {
  temperature_2m: number[];
  time: string[];
}

export interface HourlyUnits {
  temperature_2m: string;
  time: string;
}

export interface MatchedValue {
  time: string;
  temp: number;
}

export async function getWeather(): Promise<MatchedValue[]> {
  const data = (
    await axios.get(
      'https://api.open-meteo.com/v1/forecast?latitude=-35.2820&longitude=149.1286&hourly=temperature_2m',
    )
  ).data as OpenMeteoData;

  const zipped: MatchedValue[] = data.hourly.temperature_2m.map((e, i) => ({
    time: data.hourly.time[i],
    temp: e,
  }));

  let first = zipped.indexOf(
    zipped.find((e) => new Date(e.time) >= new Date())!,
  );

  return zipped.slice(first - 1);
}
