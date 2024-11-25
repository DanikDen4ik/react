import React, { useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        if (value === '') {
            setFahrenheit('');
        } else {
            setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
        }
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        if (value === '') {
            setCelsius('');
        } else {
            setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
        }
    };

    return (
        <Box sx={{ width: '300px', margin: '20px auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Конвертер температур
            </Typography>
            <TextField
                label="Цельсий (°C)"
                variant="outlined"
                type="number"
                value={celsius}
                onChange={handleCelsiusChange}
                sx={{ marginBottom: 2, width: '100%' }}
            />
            <TextField
                label="Фаренгейт (°F)"
                variant="outlined"
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
                sx={{ width: '100%' }}
            />
        </Box>
    );
};

export default TemperatureConverter;
