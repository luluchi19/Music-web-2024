"use client"

export const PlayTime = () => {
    const handleChange = (event: any) => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        const elementAudio = elementPlayAudio.querySelector(".inner-audio");
        const elementTotal = event.target;
        const value = parseFloat(elementTotal.value);
        elementAudio.currentTime = value;
    }

    return(
        <>
            <div className="mt-[12px] relative inner-play-time">
                <div className="w-[0] h-[4px] bg-[#00ADEF] absolute left-0 top-[13px] rounded-[50px] inner-current">
                    
                </div>
                <input 
                    type="range"
                    min={0}
                    max={0}
                    defaultValue={0}
                    className="w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer appearance-none range-sm rounded-[50px] inner-total"
                    onChange={handleChange}
                />
            </div>
        </>
    )
}