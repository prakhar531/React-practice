import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search'
import { useState } from "react"

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6a1dd9c46cc4256c3000b93d0285410e";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_Min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_Like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    }

    return (
        <div>
            <h3>Search for weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br />
                <br />

                <Button variant="contained" endIcon={<SearchIcon />} type="submit">
                    Search
                </Button>
            </form>


        </div>
    );
}