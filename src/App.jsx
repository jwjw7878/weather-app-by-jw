import { Box } from "./components/Box";
import "./App.css";
import { WeatherButton } from "./components/WeatherButton";
import useWeather from "./hooks/useWeather";

function App() {
  // API KEY
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { weather, hoursWeather, setQuery } = useWeather(API_KEY);

  return (
    <>
      {/* 날씨 상태에 따른 배경 이미지 변경 */}
      <main
        className={`${
          weather?.weather[0].main === "Clear"
            ? "clear"
            : weather?.weather[0].main === "Clouds"
            ? "cloud"
            : weather?.weather[0].main === "Rain"
            ? "rain"
            : "snow"
        }`}
      >
        <Box weather={weather} hoursWeather={hoursWeather} />
        <WeatherButton setQuery={setQuery} />
      </main>
    </>
  );
}

export default App;
