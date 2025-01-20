import Link from "next/link";
import {FaPlay, FaRegHeart} from "react-icons/fa6";
import { ButtonPlay } from "../button/ButtonPlay";
import { ButtonRegHeart } from "../button/ButtonRegHeart";

export const SongItem2 = (props: {item: any}) => {
    const {item} = props;

    return(
        <>
            <div className="flex items-center justify-between bg-[#212121] px-[18px] py-[10px] rounded-[15px]">
                <div className="w-[40%] flex items-center">
                    <ButtonPlay item={item} className="text-white text-[24px]"/>
                    <div className="rounded-[8px] w-[42px] aspect-square mx-[12px] truncate">
                        <img src={item.image} alt={item.title} className="object-cover w-full h-full" />
                    </div>
                    <div className="font-[700] text-[14px] text-white">
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    </div>
                </div>
                <div className="w-[30%] text-center">
                    <div className="text-white text-[14px] font-[400]">
                        {item.singer}
                    </div>
                </div>
                <div className="w-[30%] justify-end flex items-center">
                    <div className="text-white text-[14px] font-[400] mr-[18px]">
                        {item.time}
                    </div>
                    <ButtonRegHeart item={item}/>
                    
                </div>
            </div>
        </>
    )
}