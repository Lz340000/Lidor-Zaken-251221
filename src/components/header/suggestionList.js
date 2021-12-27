import React, { useEffect } from 'react';
import { useAsyncAction } from 'hooks';
import { weatherAction } from 'actions';

    
const Index = ({ list=[], setShowList, setError, setSearchValue }) => {
  const {error, execute} = useAsyncAction(weatherAction.getCurrentCityWeather ,false);
  const {error: error5days, execute: execute5days} = useAsyncAction(weatherAction.getFiveDaysCityWeather ,false);
  const onChooseHandler = element => {
    execute(element);
    execute5days(element);
    setSearchValue(element.city)
    setShowList(false);
  }

  useEffect(() => {
    error && setError(error. message)
    error5days && setError(error5days. message)
  }, [error, error5days])

  return (
    <div className="absolute z-50 flex flex-col bg-light-content dark:bg-dark-content w-full border border-light-inputBorder dark:border-dark-inputBorder rounded shadow-lg">
      <>
        <span className="pt-3 pb-2 px-3 border-b border-light-inputBorder dark:border-dark-inputBorder">
          <p className="hpRegFont text-grey-500">Suggestions for you:</p>
        </span>
        {list?.length > 0 ? (
          list?.map(element => {
            return (
              <div 
                onClick={()=>onChooseHandler(element)} 
                key={element.id} 
                className='cursor-pointer px-4 md:px-6 py-2 border-b border-light-inputBorder dark:border-dark-inputBorder hover:bg-light-inputBorder dark:hover:bg-dark-inputBorder flex justify-between'
              >
                <p>{element.city}</p>
                <p className='text-light-logo dark:text-dark-logo'>{element.country}</p>
              </div>
            );
          })
        ) : (
          <div className="w-full p-4 border-t border-grey-100">
            <p className="text-sm hpRegFont text-grey">
              {`We don't have any suggestions for you unfortunately.`}
            </p>
          </div>
        )}
      </>
    </div>
  );
};

export default Index;
