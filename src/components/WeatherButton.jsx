import React from "react";

export const WeatherButton = ({ setQuery, query }) => {
  return (
    <div className="btn-area">
      <button
        className={query === null ? "country-btn located" : "country-btn"}
        onClick={() => {
          setQuery(null);
        }}
      >
        Current Location
      </button>
      <button
        className={query === "tokyo" ? "country-btn located" : "country-btn"}
        onClick={() => {
          setQuery("tokyo");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/330/330622.png"
          alt="japan"
        />
        <p>Tokyo</p>
      </button>
      <button
        className={query === "paris" ? "country-btn located" : "country-btn"}
        onClick={() => {
          setQuery("paris");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/330/330490.png"
          alt="paris"
        />
        <p>Paris</p>
      </button>
      <button
        className={query === "new york" ? "country-btn located" : "country-btn"}
        onClick={() => {
          setQuery("new york");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/330/330459.png"
          alt="us"
        />
        <p>New york</p>
      </button>
      <button
        className={query === "london" ? "country-btn located" : "country-btn"}
        onClick={() => {
          setQuery("london");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/330/330425.png"
          alt="uk"
        />
        <p>London</p>
      </button>
    </div>
  );
};
