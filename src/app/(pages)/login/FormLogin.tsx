"use client"

import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const FormLogin = () => {
    const router = useRouter();

    const handleLogin = (event: any) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        if(email && password){
            signInWithEmailAndPassword(authFirebase, email, password)
                .then((userCredential: { user: any; }) => {
                    const user = userCredential.user;
                    if(user) {
                        router.push("/");
                    }
                })
                .catch((error: any) => {
                    console.log(error);
                });
        }
    }

    return(
        <>
            <form action="" className="" onSubmit={handleLogin}>
                <div className="mb-[15px]">
                    <label htmlFor="email" className="block mb-[5px] font-[600] text-[14px]">
                    <span className="text-white">
                        Email
                    </span>
                    <span className="text-red-500 ml-[6px]">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Ví dụ: levana@gmail.com"
                        className="outline-none w-full px-[16px] py-[14px] rounded-[6px] bg-white h-[50px] font-[600] text-[14px]"
                        required={true}
                    />
                </div>

                <div className="mb-[15px]">
                    <label htmlFor="password" className="block mb-[5px] font-[600] text-[14px]">
                    <span className="text-white">
                        Mật khẩu
                    </span>
                    <span className="text-red-500 ml-[6px]">*</span>
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder=""
                        className="outline-none w-full px-[16px] py-[14px] rounded-[6px] bg-white h-[50px] font-[600] text-[14px]"
                        required={true}
                    />
                </div>

                <button type="submit" className="bg-[#00ADEF] w-full py-[14px] rounded-[6px] text-white font-[700] text-[16px]">
                    Đăng Nhập
                </button>
            </form>
        </>
    )
}