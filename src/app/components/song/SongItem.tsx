import Link from "next/link";
import { ButtonPlay } from "../button/ButtonPlay";
import { ButtonHeart } from "../button/ButtonHeart";
/* eslint-disable @typescript-eslint/no-explicit-any */

export const SongItem = (props: { item: any }) => {
    const { item } = props;
    return(
        <>
        <div className="flex items-center bg-[#212121] rounded-[15px] p-[10px]" song-id={item.id}>
            <div className="w-[76px] rounded-[10px] aspect-square truncate mr-[10px]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
            </div>
            <div className="flex-1">
                <div className="mb-[2px]">
                    <Link href = {item.link} className="font-[600] text-white text-[16px] line-clamp-1">
                        {item.title}
                    </Link>
                </div>
                <div className="font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]">
                    {item.singer}
                </div>
                <div className="font-[400] text-[12px] text-white">
                    {item.listen.toLocaleString()} lượt nghe
                </div>
            </div>
            <div className="flex items-center">
                <ButtonPlay item={item} className="border border-white rounded-full text-white w-[34px] h-[34px] inline-flex items-center justify-center text-[15px] ml-[10px] inner-button-play" />
                <ButtonHeart item={item}/>
            </div>
        </div>
        </>
    )
}