import React from 'react';
import { IoLogoGithub } from 'react-icons/io';


const Index = () => {
    return (
        <div className="flex flex-col space-y-5  items-center bg-dark-content dark:bg-light-content p-10 text-dark-default dark:text-light-default w-full">
            <div className="flex flex-col items-center">
                <h5 className="fontBold">Visit my Github profile</h5>
                <div className="flex mt-4 space-x-4">
                <a href="https://github.com/Lidico">
                    <span className="flex flex-col items-center">
                    <IoLogoGithub size={30} />
                    <p>GitHub</p>
                    </span>
                </a>
                </div>
            </div>
            <div className="flex items-center flex-col space-y-2">
                <p className="pt-1">
                ©2021 All rights reserved by Lidor Zaken
                </p>
                <div className="w-full justify-center space-x-4 flex">
                    <p>Build for Abra Test</p>
                </div>
            </div>
        </div>
    )
}

export default Index;
