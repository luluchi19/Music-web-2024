import type { Metadata } from "next";
import "./globals.css";
import { Title } from "./components/title/Title";
import { SongItem } from "./components/song/SongItem";
import { CardItem } from "./components/card/CardItem";
import { onValue, ref } from "firebase/database";
import { dbFirebase } from "./firebaseConfig";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Website nghe nhạc trực tuyến",
};

export default function Home() {
  const dataSection1: any[] = [];

  const songRef = ref(dbFirebase, 'songs');
  onValue(songRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if(dataSection1.length < 3){
        onValue(ref(dbFirebase, 'singers/' + data.singerId[0]), (itemSinger) => {
          const dataSinger = itemSinger.val();
          dataSection1.push(
            {
              id: key,
              image: data.image,
              title: data.title,
              singer: dataSinger.title,
              listen: data.listen,
              link: `/song/${key}`,
              audio: data.audio,
              wishlist: data.wishlist
            }
          );
        })
      }
    })
  });
  
  const dataSection2: any[] = [];

  const categoryRef = ref(dbFirebase, 'categories');
  onValue(categoryRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if(dataSection2.length < 5){
        dataSection2.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: `/categories/${key}`
          }
        );
      }
    })
  });

  const dataSection3: any[] = [];

  const singerRef = ref(dbFirebase, 'singers');
  onValue(singerRef, (items) => {
    items.forEach((item) => {
      const key = item.key;
      const data = item.val();
      if(dataSection3.length < 5){
        dataSection3.push(
          {
            id: key,
            image: data.image,
            title: data.title,
            description: data.description,
            link: `/singers/${key}`
          }
        );
      }
    })
  });

  
  return (
    <>
      {/* Section 1 */}
      <div className="flex items-start">
        <div className="w-[534px]">
          <div 
            className="w-full flex items-center bg-cover rounded-[15px]" 
            style={{ backgroundImage: "url('/demo/background-1.png')" }}
          >
            <div className="flex-1 mr-[34px] ml-[30px]">
              <div className="text-[32px] font-[700] text-white mb-[6px]">
                Nhạc EDM
              </div>
              <div className="text-[14px] font-[500] text-white">
                Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
              </div>
            </div>
            <div className="w-[215px] mt-[48px] mr-[23px]">
              <img src="/demo/image-2.png" alt="Nhạc EDM" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Nghe nhiều" />
          <div className="grid grid-cols-1 gap-[12px]">
            {/* item */}
            {dataSection1.map((item, index) => (
              <SongItem key={index} item={item} />
            ))}
            {/* end of item */}
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="mt-[30px]">
        <Title text="Danh Mục Nổi Bật"/>
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataSection2.map((item, index) => 
          <CardItem key={index} item = {item}/>
        )}
        
      </div>
      {/* Section 3 */}
      <div className="mt-[30px]">
        <Title text="Ca Sĩ Nổi Bật"/>
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataSection3.map((item, index) => 
          <CardItem key={index} item = {item}/>
        )}
        
      </div>
    </>
  );
}
