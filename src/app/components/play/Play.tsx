import { PlayInfo } from "./PlayInfo";
import { PlayActions } from "./PlayActions";
import { PlayTime } from "./PlayTime";
import { PlayVolume } from "./PlayVolume";

export const Play = () => {
    return(
        <>
            <div className="bg-[#212121] border-t border-[#494949] py-[20px] bottom-0 left-0 z-999 fixed w-full play-audio hidden">
                <audio className="hidden inner-audio">
                    <source src="/"/>
                </audio>
                <div className="container mx-auto flex items-center justify-between">
                    <PlayInfo/>
                    <div className="flex-1 mx-[66px]">
                        <PlayActions/>
                        <PlayTime/>
                    </div>
                    <PlayVolume/>
                </div>
            </div>
        </>
    )
}