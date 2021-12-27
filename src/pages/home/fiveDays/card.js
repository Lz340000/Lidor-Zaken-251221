import React from 'react';
import WeatherIcon from 'components/widgets/weathearIcon';

const Index = ({day, temperature, numOfPop}) => {
    const {description, day: displayDay} = day;
    return (
        <div className={`bg-light-content text-center flex flex-col p-2 items-center space-y-2 pop dark:bg-dark-content rounded drop-shadow-md h-40 w-full delay${numOfPop}`}>
            <h6 className='text-sm fontBold'>{displayDay}</h6>
            <WeatherIcon text={description} isDay={true} size={50} animate={false}/>
            <div className='flex-col items-center'>
                <h6 className='text-xs fontBold text-center'>{description}</h6>
                <h6 className='text-lg fontBlack text-light-secondary dark:text-dark-secondary'>{`${day[`${temperature}Min`]}°-${day[`${temperature}Max`]}°`}</h6>
            </div>

        </div>
    )
}

export default Index;
