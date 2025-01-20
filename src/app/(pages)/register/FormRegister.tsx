"use client"

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export const FormRegister = () => {
    const router = useRouter();

    const handleRegister = (event: any) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const fullName = event.target.fullName.value;

        if(fullName && email && password){
            createUserWithEmailAndPassword(authFirebase, email, password)
                .then((userCredential: { user: any; }) => {
                    const user = userCredential.user;
                    if(user) {
                        set(ref(dbFirebase, 'users/' + user.uid), {
                            fullName: fullName,
                            email: email
                        }).then(() => {
                            router.push("/");
                        });
                    }
                    })
                    .catch((error: any) => {
                        console.log(error);
                });
        }
    }

    return(
        <>
            <form action="" className="" onSubmit={handleRegister}>
                <div className="mb-[15px]">
                    <label htmlFor="fullName" className="block mb-[5px] font-[600] text-[14px]">
                    <span className="text-white">
                        Họ tên
                    </span>
                    <span className="text-red-500 ml-[6px]">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Ví dụ: Lê Văn A"
                        className="outline-none w-full px-[16px] py-[14px] rounded-[6px] bg-white h-[50px] font-[600] text-[14px]"
                        required={true}
                    />
                </div>

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
                    Đăng Ký
                </button>
            </form>
        </>
    )
}