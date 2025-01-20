import Link from "next/link"

export const CardItem = (props: {item: any}) => {
    const { item } = props;
    return(
        <>
            <div className="">
                <Link href={item.link}>
                    <div className="rounded-[15px] w-full aspect-square truncate mb-[10px]">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
                    </div>
                    <div className="text-white font-[700] text-[14px] mb-[10px] line-clamp-1">
                        {item.title}
                    </div>
                    <div className="text-[#FFFFFF80] font-[400] text-[12px] line-clamp-1">
                        {item.description}
                    </div>
                </Link>
            </div>
        </>
    )
}