"use client"

import { useRouter, useSearchParams } from "next/navigation";
import {FaMagnifyingGlass} from "react-icons/fa6"

export const Search = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (event: any) => {
        event.preventDefault();
        const keyword = event.target.keyword.value;
        router.push(`/search?keyword=${keyword}`);
    }
    
    const defaultKeyword = searchParams.get("keyword") || "";

    return(
        <>
            <form 
                className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[999] flex items-center py-[15px] px-[30px]"
                onSubmit={handleSearch}
            >
                <input 
                    type="text"
                    name="keyword"
                    placeholder="Tìm kiếm..."
                    defaultValue={defaultKeyword}
                    className="outline-none order-2 bg-transparent font-[500px] text-[16px] text-white flex-1"
                />
                <button 
                    className="order-1 text-[22px] mr-[20px] text-white"
                    type="submit"
                 >
                    <FaMagnifyingGlass />
                </button>
            </form>
        </>
    )
}