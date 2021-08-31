export type degreesUnity = 'F' | 'C';

interface Coordonates {
  lat: number;
  lon: number;
}

interface Clouds {
  all: number;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

interface System {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: number;
}

export interface City {
  coord: Coordonates;
  weather: Array<Weather>;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  rain?: any;
  snow?: any;
  dt: number;
  sys: System;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  visibility?: number;
}
