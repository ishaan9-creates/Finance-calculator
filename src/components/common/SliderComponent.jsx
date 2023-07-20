import React from 'react'


import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({defaultValue, min, max, step, onChange, value, label, unit, amount}) => {
    return (
        <Stack my={2}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h5">{unit} {amount}</Typography>
            <Slider 
            defaultValue={defaultValue} 
            min={min} 
            max={max} 
            aria-label="default" 
            valueLabelDisplay='auto'
            marks
            step={step}
            onChange={onChange}
            value={value}
            />
            <Stack direction="row"   justifyContent="space-between" alignItems="flex-start">
            <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
            <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
            </Stack>
        </Stack>
    )
}

export default SliderComponent;
