import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import { textToIcon } from 'constants/icons';
   
const Index = ({text, isDay, size=150, animate=true}) => {
               
    return (
        <ReactAnimatedWeather
            icon={isDay?textToIcon[text]?.icon:textToIcon[text]?.nightIcon}
            color={isDay?textToIcon[text]?.dayColor:textToIcon[text]?.nightColor}
            size={size}
            animate={animate}
        />
    )
}

export default Index;
