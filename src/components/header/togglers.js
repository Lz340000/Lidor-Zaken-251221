import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri';
import { navigationAction } from 'actions';
import { useAsyncAction } from 'hooks';
  


const Index = ({palette, temperature}) => {
    const {execute: setPalette} = useAsyncAction(navigationAction.setPalette,false);
    const {execute: setTemperature} = useAsyncAction(navigationAction.setTemperature,false)
    return (
        <div className='flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-1'>
            <div className='border border-light-inputBorder dark:border-dark-inputBorder rounded w-20 flex justify-evenly items-center'>
                <span onClick={()=>setPalette('light')} className={`${palette==='light'?'text-light-default dark:text-dark-default':'text-light-inputBorder dark:text-dark-inputBorder'} transition duration-700 ease-in-out cursor-pointer`}><BsSun/></span>
                <p className='text-light-inputBorder dark:border-dark-inputBorder'>|</p>
                <span onClick={()=>setPalette('dark')} className={`${palette==='dark'?'text-light-default dark:text-dark-default':'text-light-inputBorder dark:text-dark-inputBorder'} transition duration-700 ease-in-out cursor-pointer`}><BsMoon/></span>
            </div>
            <div className='border border-light-inputBorder dark:border-dark-inputBorder rounded w-20 flex justify-evenly items-center'>
                <span onClick={()=>setTemperature('celsius')} className={`${temperature==='celsius'?'text-light-default dark:text-dark-default':'text-light-inputBorder dark:text-dark-inputBorder'} transition duration-700 ease-in-out cursor-pointer`}><RiCelsiusLine/></span>
                <p className='text-light-inputBorder dark:border-dark-inputBorder'>|</p>
                <span onClick={()=>setTemperature('fahrenheit')} className={`${temperature==='fahrenheit'?'text-light-default dark:text-dark-default':'text-light-inputBorder dark:text-dark-inputBorder'} transition duration-700 ease-in-out cursor-pointer`}><RiFahrenheitLine/></span>
            </div>
        </div>
    )
}

export default Index;
