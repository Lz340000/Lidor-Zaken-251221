import React from 'react';
import { BsHeartFill } from 'react-icons/bs';


const Index = ({name}) => {
    return (
        <div className='w-full py-20 px-8 items-center lg:px-12 xl:px-24 h-auto flex flex-col space-y-12 shadow-wheatear rounded bg-light-content dark:bg-dark-content'>
            <h1 className='text-2xl fontBlack text-light-logo dark:text-dark-logo flex space-x-5 items-center'><span>{name}</span><span><BsHeartFill /></span></h1>
        </div>
    )
}

export default Index;
