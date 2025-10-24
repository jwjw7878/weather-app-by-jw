import { useEffect, useState } from "react";

export default function useWeather(API_KEY) {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState(null);
  const [hoursWeather, setHoursWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치:", lat, lon);
      getCurrentWeather(lat, lon);
      getHoursWeather(lat, lon);
    });
  };
  // 현재 위치 기반 날씨 갖고오기
  const getCurrentWeather = async (lat, lon) => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 4시간별 날씨 변화
  const getHoursWeather = async (lat, lon) => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      setHoursWeather(data);
    } catch (err) {
      console.error(err);
    }
  };
  // 국가별 시간별 날씨
  const getCountriesHoursWeather = async (query) => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      setHoursWeather(data);
    } catch (err) {
      console.error(err);
    }
  };
  //   도시 별 날씨
  const getCountryWeather = async (query) => {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      let data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (query) {
      getCountryWeather(query);
      getCountriesHoursWeather(query);
    }
    if (query === null) getCurrentLocation();
  }, [query]);

  return { weather, hoursWeather, query, setQuery };
}
