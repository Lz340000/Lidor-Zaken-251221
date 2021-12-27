import React, { useEffect, useState } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import { ImSpinner8 } from 'react-icons/im';
import { useSelector, shallowEqual } from 'react-redux';
import { useAsyncAction } from 'hooks';
import { weatherAction } from 'actions';

const Index = ({children}) => {
   const [errorDisplay, setErrorDisplay] = useState('')
  const {status, error, value, isLoading} = useAsyncAction(weatherAction.getSearchLocations ,true, ['tel aviv']);
  const {status: statusWeather, error:cityError, execute} = useAsyncAction(weatherAction.getCurrentCityWeather ,false);
  const {status: statusWeather5, error: error5days, execute: execute5days} = useAsyncAction(weatherAction.getFiveDaysCityWeather ,false);

  useEffect(() => {
    if(status==='success'){
      const defLocation = value[0];
      execute(defLocation);
      execute5days(defLocation);
    }
  }, [status, value])

  useEffect(() => {
    error && setErrorDisplay(error.Message);
    cityError && setErrorDisplay(cityError.Message);
    error5days && setErrorDisplay(error5days.Message);
  }, [error, cityError, error5days])

    const { navigation } = useSelector(
        state => ({
          navigation: state.navigation
        }),
        shallowEqual
      );
        const { palette, temperature } = navigation;

        if(errorDisplay!==''){
          return <div className='py-40 w-full flex justify-center'>
            <h1 className='text-3xl'>{errorDisplay}</h1>
          </div>
        }
        return (
        <div data-theme='dark' className={`${palette==='light'?'light text-light-default':'dark text-dark-default'} transition duration-700 ease-in-out`}>
            <Header palette={palette} temperature={temperature}/>
            
            {isLoading?(
              <div className='py-20 flex justify-center'>
                <span className='animate-spin text-light-logo dark:text-dark-logo'><ImSpinner8 size={30}/></span>
              </div>
            ):(
            statusWeather==='success' && statusWeather5==='success' ?(<>{children}</>):(
              <div className='py-20 flex justify-center'>
                <span className='animate-spin text-light-logo dark:text-dark-logo'><ImSpinner8 size={30}/></span>
              </div>)
            )}
            <Footer/>
        </div>
    )
}

export default Index;
