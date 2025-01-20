"use client"
import { FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props: { item: any, className: any }) => {
    const { item, className } = props;

    const handlePlay = () => {
        const audio = item.audio;
        const elementPlayAudio: any = document.querySelector(".play-audio");
        if(elementPlayAudio){
            const elementAudio = elementPlayAudio.querySelector(".inner-audio");
            const elementSource = elementAudio.querySelector("source");
            if(elementSource){
                elementSource.src = audio;
            }
            if(elementAudio){
                elementAudio.load();
                elementAudio.play();
            }

            // Show play audio
            elementPlayAudio.classList.remove("hidden");

            // Show data
            const elementImage = elementPlayAudio.querySelector(".inner-image");
            elementImage.src = item.image;
            elementImage.alt = item.title;
            
            const elementTitle = elementPlayAudio.querySelector(".inner-title");
            elementTitle.innerHTML = item.title;

            const elementSinger = elementPlayAudio.querySelector(".inner-singer");
            elementSinger.innerHTML = item.singer;

            // Pause/play
            const elementPlayButton = elementPlayAudio.querySelector(".inner-button-play");
            elementPlayButton.classList.add("play");

            // Show total time
            const elementPlayTimeCurrent = elementPlayAudio.querySelector(".inner-play-time .inner-current");
            const elementPlayTimeTotal = elementPlayAudio.querySelector(".inner-play-time .inner-total");
            elementAudio.onloadedmetadata = () => {
                const totalTime = elementAudio.duration;
                elementPlayTimeTotal.max = totalTime;

                elementAudio.ontimeupdate = () => {
                    const currentTime = elementAudio.currentTime;
                    const percent = (currentTime / totalTime) * 100;
                    elementPlayTimeCurrent.style.width = `${percent}%`;
                    elementPlayTimeTotal.value = currentTime;
                }
            }

            // Show play icon
            const elementSongOld = document.querySelector(`[song-id].active`);
            if(elementSongOld){
                elementSongOld.classList.remove("active");
            }
            const elementSong = document.querySelector(`[song-id="${item.id}"]`);
            elementSong?.classList.add("active");
        }
    }
    return(
        <>
            <button 
                className={className}
                onClick={handlePlay}
            >
                <FaPlay/>
            </button>
        </>
    )
}