import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { FormRegister } from "./FormRegister";

export const metadata: Metadata = {
  title: "Đăng ký",
  description: "Website nghe nhạc trực tuyến",
};

export default function RegisterPage() {
  return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Ký Tài Khoản" className="text-center"/>
        <FormRegister/>
      </div>
    </>
  );
}
