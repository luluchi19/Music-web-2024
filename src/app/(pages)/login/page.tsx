
import { Title } from "@/app/components/title/Title";
import type { Metadata } from "next";
import { FormLogin } from "./FormLogin";

export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Website nghe nhạc trực tuyến",
};

export default function LoginPage() {
  return (
    <>
      <div className="w-[500px] mx-auto mt-[60px]">
        <Title text="Đăng Nhập Tài Khoản" className="text-center"/>
        <FormLogin/>
      </div>
    </>
  );
}
