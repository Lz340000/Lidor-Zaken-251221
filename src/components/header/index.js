import React from 'react';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';
import Togglers from './togglers';
import Logo from './logo';
import SearchBar from './search';

const Index = ({temperature, palette}) => {
    return (
        <div className='bg-light-content dark:bg-dark-content h-56 flex justify-center'>
            <div className='w-full flex flex-col px-2 md:px-0 md:w-10/12 lg:w-3/4 xl:w-1/2 py-8'>
                <div className='flex flex-col space-y-3 md:space-y-0 items-center md:flex-row md:justify-between'>
                    <Logo/>
                    <div className='flex flex-col space-y-2 items-center'>
                        <Link className='hover:text-light-fav hover:dark:text-dark-fav transition duration-700 ease-in-out cursor-pointer space-x-2 flex items-center' to="/favorites">
                            <span>Favorites</span>
                            <span><BsHeartFill/></span>
                        </Link>
                        <Togglers temperature={temperature} palette={palette}/>
                    </div>
                </div>
                <div className='pt-2 flex justify-center'>
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default Index;
