export const temperatureFormator = (temperature, from) => {
    if(from==='fahrenheit') return Math.round(Number((Number(temperature)-32)*0.5556).toFixed(1));
    else return Math.round(Number((Number(temperature)*1.8)+32).toFixed(1));
}
