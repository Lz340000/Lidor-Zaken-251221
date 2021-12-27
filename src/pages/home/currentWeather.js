import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import WeatherIcon from 'components/widgets/weathearIcon';
import { BsHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);
    const { weather, navigation } = useSelector(
        state => ({
            weather: state.weather,
            navigation: state.navigation
        }),
        shallowEqual
      );
    const { location, cityWeather } = weather;
    const { temperature } = navigation;

    const addFavoriteHandler = () => {
            dispatch({type:'ADD_FAVORITE', value: location});
            setIsFavorite(true);
    }

    useEffect(() => {
        setIsFavorite(false)
    }, [location])

    return (
        <div className='flex flex-col relative space-y-5 sm:space-y-0 sm:flex-row justify-between'>
            <div className='absolute top-0 right-0'>
                <span onClick={()=>addFavoriteHandler()} className={`${isFavorite?'text-red-600 dark:text-red-400':''} hover:scale-105 hover:text-red-600 dark:hover:text-red-400 transition transform duration-700 ease-in-out cursor-pointer`}><BsHeartFill size={30}/></span>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className='flex flex-col'>
                    <h6 className='fontBold'>{`${location?.city}(${location.country})`}</h6>
                    <p className='text-light-secondary dark:text-dark-secondary'>{`As of ${cityWeather?.time}`}</p>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-7xl fontBold'>{`${cityWeather[temperature]?.Value}°`}</h1>
                    <h5 className='text-xl fontBold'>{cityWeather?.description}</h5>
                </div>
            </div>
            <div className='hidden sm:flex flex-col justify-center'>
                <WeatherIcon text={cityWeather?.description} isDay={cityWeather?.isDay} size={160} animate={true}/>
            </div>
        </div>
        );
}

export default Index;
