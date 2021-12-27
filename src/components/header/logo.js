import React from 'react';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Index = () => <Link to="/"><h1 className='fontBlack text-3xl text-light-logo dark:text-dark-logo flex items-center space-x-2'><span><TiWeatherWindyCloudy/></span>RoopWeather</h1></Link>


export default Index;
