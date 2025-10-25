import { Box } from "./components/Box";
import "./App.css";
import { WeatherButton } from "./components/WeatherButton";
import useWeather from "./hooks/useWeather";
import { ClipLoader } from "react-spinners";

function App() {
  // API KEY
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { weather, hoursWeather, tempUnit, setQuery, setTempUnit, loading } =
    useWeather(API_KEY);

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
            : weather?.weather[0].main === "Mist"
            ? "mist"
            : "snow"
        }`}
      >
        {loading ? (
          <div className="box load">
            <ClipLoader className="loading" size={150} />
          </div>
        ) : (
          <Box
            weather={weather}
            hoursWeather={hoursWeather}
            setTempUnit={setTempUnit}
            tempUnit={tempUnit}
          />
        )}
        <WeatherButton setQuery={setQuery} />
      </main>
    </>
  );
}

export default App;
