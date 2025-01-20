"use client"
import { FaVolumeHigh } from "react-icons/fa6";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const PlayVolume = () => {
    const handleChange = (event: any) => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio.querySelector(".inner-audio");
        const elementVolumeCurrent = elementPlayAudio.querySelector(".inner-volume .inner-current");
        const elementTotal = event.target;
        const value = parseFloat(elementTotal.value);
        elementAudio.volume = value/100;
        elementVolumeCurrent.style.width = `${value}%`;
    }
    return(
        <>
            <div className="w-[184px] flex items-end inner-volume">
                <button className="text-white text-[16px]">
                    <FaVolumeHigh/>
                </button>
                <div className="ml-[6px] relative">
                    <div className="w-[100%] h-[4px] bg-[#00ADEF] absolute left-0 top-[13px] rounded-[50px] inner-current"></div>
                    <input 
                        type="range"
                        min={0}
                        max={100}
                        defaultValue={100}
                        className="w-full h-[3px] bg-[#FFFFFF0A] cursor-pointer appearance-none range-sm rounded-[50px] inner-total"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    )
}