export const CardInfo = (
    props: {
        image: string,
        title: string,
        description: string
    }
) => {
    const {image, title, description} = props;
    return(
        <>
            <div className="flex items-center">
                <div className="w-[180px] rounded-[15px] aspect-square truncate">
                    <img src={image} alt={title} className="w-full h-full object-cover"/>
                </div>
                <div className="flex-1 ml-[20px]">
                    <h1 className="text-[#00ADEF] text-[35px] font-[700]">
                        {title}
                    </h1>
                    <div className="text-[#EFEEE0] font-[400] text-[14px] mt-[10px]">
                        {description}    
                    </div>
                </div>
            </div>
        </>
    )
}