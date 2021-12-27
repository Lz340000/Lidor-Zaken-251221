import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { useRouter } from 'hooks';
  
export const BackBtn = () => {
    const { history } = useRouter();
    return (
      <div onClick={() => history.goBack()} className="p-2 rounded flex justify-center items-center bg-light-content h-12 w-12 dark:bg-dark-content border border-light-inputBorder dark:bg-dark-95 dark:border-dark-inputBorder cursor-pointer">
        <IoIosArrowBack size={30} />
      </div>
    );
  };