export const Title = (props: {text: string, className?: string}) => {
    const {text, className = ""} = props;
    return(
        <>
            <div className={"text-[24px] text-[#EFEEE0] font-[700] mb-[20px] " + className}>
                {text}
            </div>
        </>
    )
}