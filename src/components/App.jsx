import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useGetCityLatAndLonQuery } from '../services/openweathermap';
import { useGetCityInfoQuery } from '../services/openweathermap';
import { useGetCitiesQuery } from '../services/mapbox';
import useStyles from './styles';

function App() {
  // const options = ['London', 'Paris', 'Tbilisi'];
  const classes = useStyles();
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [city, setCity] = useState('');
  const { data: citySearchResults } = useGetCitiesQuery(city);
  const { data: cityLatAndLon } = useGetCityLatAndLonQuery(city);
  const { data: cityInformation } = useGetCityInfoQuery(cityLatAndLon);

  const handleKeyPress = (e) => {
    setCity(e.target.value);
    if (!city) return;
    !autocompleteCities.includes(e.target.value) && citySearchResults.features && setAutocompleteCities(citySearchResults.features.map((place) => place.place_name));
  };

  console.log(cityInformation);

  return (
    <div className={classes.root}>
      <input list="places" type="text" id="city" name="city" onChange={handleKeyPress} value={city} required pattern={autocompleteCities.join('|')} autoComplete="off" />
      <datalist id="places">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{city}</option>
        ))}
      </datalist>
      <br />
      <div>{cityInformation ? <pre>Temperature: {cityInformation.current.temp}</pre> : 'Loading...'}</div>
      <div>
        {cityInformation ? (
          <pre>
            Weather: {cityInformation.current.weather[0].main}, {cityInformation.current.weather[0].description}
          </pre>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
}

export default App;
