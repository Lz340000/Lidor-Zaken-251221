import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Card from './card';

const Index = () => {
    const { weather, navigation } = useSelector(
        state => ({
            weather: state.weather,
            navigation: state.navigation
        }),
        shallowEqual
      );

      const { fiveDaysList } = weather;
      const { temperature } = navigation;

    return (
        <div className='w-full rounded py-5 flex justify-center shadow-wheatear bg-light-background dark:bg-dark-background'>
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-5 gap-3'>
                {fiveDaysList.getList().map((day,key)=>{
                    return <Card temperature={temperature} key={day?.day} day={day} numOfPop={key+1}/>
                })}
            </div>
        </div>
    )
}

export default Index;
