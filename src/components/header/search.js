import React, { useState, useEffect } from 'react';
import { useAsyncAction, useComponentVisible } from 'hooks';
import { weatherAction } from 'actions';
import SuggestionList from './suggestionList';
    

const Index = () => {
    const { ref, setIsFucos, isComponentVisible } = useComponentVisible(true);
    const [searchValue, setSearchValue] = useState('')
    const [error, setError] = useState('');
    const [showList, setShowList] = useState(false);
    const {execute, status, error: serverError, value} = useAsyncAction(weatherAction.getSearchLocations ,false);
    
    const searchLoactionHandler = text => {
        const english = /^[A-Za-z0-9/\s/]*$/;
        if (english.test(text)){
            setSearchValue(text);
            setError('');
            if(text!==''){
                execute(text);
            }
        }
        else {
            setError('You can enter text in english letters only');
        }
    }

    useEffect(() => {
        status==='success' && value?.length>0? setShowList(true):setShowList(false);
        status==='error' && setError(serverError. message) 
    }, [status, value])

    return (
        <div className='flex flex-col items-center w-full'>
            <p className='text-sm text-light-secondary dark:text-dark-secondary'>Please enter location</p>
            <div className='relative w-10/12 md:w-3/4 lg:w-1/2 flex flex-col items-center space-y-2'>
                <input value={searchValue} onFocus={() => setIsFucos(true)} placeholder='So where you want to know the weather?' onChange={e=>searchLoactionHandler(e.target.value)} className='w-full relative border-light-inputBorder dark:border-dark-inputBorder bg-light-content dark:bg-dark-content' type='text'/>
                {showList && isComponentVisible && <span ref={ref}><SuggestionList setSearchValue={setSearchValue} setError={setError} setShowList={setShowList} list={value}/></span>}
                <p className='text-xs text-red-600 dark:text-red-400'>{error}</p>
                
            </div>
        </div>
    )
}

export default Index;
