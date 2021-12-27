import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { BackBtn } from 'components/widgets/backBTN';
import Card from './card';


const Index = () => {
    const { weather } = useSelector(
        state => ({
            weather: state.weather
        }),
        shallowEqual
      );
    const { favoriteList } = weather;
    return (
        <div className='bg-light-background flex flex-col dark:bg-dark-background  flex justify-center py-20'>
            <div className='w-full px-8 lg:px-12 xl:px-24'>
                <BackBtn/>  
            </div>
            <div className='w-11/12 md:w-10/12 lg:w-3/4 xl:w-1/2 py-8 px-8 lg:px-12 xl:px-24 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {favoriteList.getList().map(el=>{
                    return <Card key={el.Key} name={el.city} />
                })}
            </div>
        </div>
    )
}

export default Index;
