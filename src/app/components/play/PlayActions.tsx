"use client"
import {FaBackwardStep, FaPlay, FaForwardStep, FaPause} from "react-icons/fa6";

export const PlayActions = () => {
    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementPlayButton = elementPlayAudio.querySelector(".inner-button-play");
        const elenmentAudio = elementPlayAudio.querySelector(".inner-audio");
        
        if(elementPlayButton.classList.contains("play")){
            elementPlayButton.classList.remove("play");
            elenmentAudio.pause();
        }
        else{
            elementPlayButton.classList.add("play");
            elenmentAudio.play();
        }
    }

    const handlePrev = () => {
        const currentSong = document.querySelector(`[song-id].active`);
        if(currentSong){
            const prevSong = currentSong.previousElementSibling;
            if(prevSong){
                const buttonPlay: any = prevSong.querySelector(".inner-button-play");
                buttonPlay.click();
            }
        }
    }

    const handleNext = () => {
        const currentSong = document.querySelector(`[song-id].active`);
        if(currentSong){
            const nextSong = currentSong.nextElementSibling;
            if(nextSong){
                const buttonPlay: any = nextSong.querySelector(".inner-button-play");
                buttonPlay.click();
            }
        }
    }
    return(
        <>
            <div className="flex items-center justify-center">
                <button className="text-white text-[16px]" onClick={handlePrev}>
                    <FaBackwardStep/>
                </button>
                <button 
                    className="text-white text-[16px] rounded-full bg-[#00ADEF] mx-[42px] w-[32px] h-[32px] inline-flex items-center justify-center px-[10px] py-[9px] inner-button-play"
                    onClick={handlePlay}
                >
                    <FaPlay className="inner-icon-play"/>
                    <FaPause className="inner-icon-pause"/>
                </button>
                <button className="text-white text-[16px]" onClick={handleNext}>
                    <FaForwardStep/>
                </button>
            </div>
        </>
    )
}