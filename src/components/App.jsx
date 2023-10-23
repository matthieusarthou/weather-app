import React, { useState } from 'react';
import { Box, Button, Paper, CssBaseline, Autocomplete, CircularProgress, Typography, TextField } from '@mui/material';
import { useGetCityInfoQuery } from '../services/openweathermap';
import { useGetCitiesQuery } from '../services/mapbox';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  const [citySearchText, setCitySearchText] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  let { data: citySearchResults } = useGetCitiesQuery(citySearchText);
  let { data: cityInformation } = useGetCityInfoQuery(selectedCity);

  const handleKeyPress = (e) => {
    if (!e.target.value) return;
    setCitySearchText(e.target.value);
  };

  const handleChange = (event, newValue) => {
    setSelectedCity(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box className={classes.main}>
        <Box margin="0 auto">
          {citySearchResults ? (
            <Autocomplete
              sx={{ width: 300 }}
              disablePortal
              value={selectedCity}
              options={citySearchResults?.features.map((place) => place.place_name)}
              onSelect={handleKeyPress}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.citySearchInput}
                  label="Please select a city"
                  value={selectedCity}
                  sx={{
                    fieldset: {
                      border: '2px solid white',
                    },
                    '.MuiAutocomplete-inputRoot': {
                      borderRadius: '50px',
                      color: 'white',
                    },
                    '.MuiInputLabel-outlined': {
                      color: 'white',
                    },
                    '.MuiAutocomplete-popupIndicator': {
                      color: 'white',
                    },
                    '.MuiAutocomplete-clearIndicator': {
                      color: 'white',
                    },
                    '.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#FFFFFF',
                    },
                  }}
                />
              )}
              PaperComponent={(props) => (
                <Paper
                  sx={{
                    background: 'lightgray',
                    borderRadius: 2,
                    color: 'white',
                    backgroundColor: 'gray',
                  }}
                  {...props}
                />
              )}
            />
          ) : (
            <Box
              height="100hm"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress size="8rem" />
            </Box>
          )}
        </Box>
        {cityInformation?.main && selectedCity ? (
          <Box
            display="flex"
            justifyContent="space-between"
          >
            <div style={{ padding: 25 }}>
              <Typography variant="h3">{selectedCity.substring(0, selectedCity.indexOf(','))}</Typography>
              <Typography variant="h3">{cityInformation.main.temp.toFixed()}°C</Typography>
            </div>
            <Box
              display="flex"
              justifyContent="end"
            >
              <Button
                variant="text"
                color="buttonWhite"
                sx={{ transform: 'rotate(-90deg)', fontWeight: 'bold', fontSize: '20px' }}
                onClick={() => {
                  setCitySearchText('');
                  setSelectedCity('');
                }}
              >
                CLEAR
              </Button>
            </Box>
          </Box>
        ) : null}
        {cityInformation?.main && selectedCity ? (
          <Box className={classes.bottom}>
            <Typography variant="h5">
              Feels like:
              <br />
              {cityInformation.main.feels_like.toFixed()}°C
            </Typography>
            <Typography variant="h5">
              Humidity:
              <br />
              {cityInformation.main.humidity}%
            </Typography>{' '}
            <Typography variant="h5">
              Wind speed:
              <br />
              {cityInformation.wind.speed} km/h
            </Typography>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

export default App;
