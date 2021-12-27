import React from 'react';
import CurrentWeather from './currentWeather';
import FiveDays from './fiveDays';

const Index = () => {
    return (
        <div className='bg-light-background dark:bg-dark-background  flex justify-center py-20'>
            <div className='w-11/12 md:w-10/12 lg:w-3/4 xl:w-1/2 py-8 px-8 lg:px-12 xl:px-24 h-auto flex flex-col space-y-12 shadow-wheatear rounded bg-light-content dark:bg-dark-content'>
                <CurrentWeather/>
                <FiveDays/>
            </div>
        </div>
    )
}

export default Index;
