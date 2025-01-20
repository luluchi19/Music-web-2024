"use client"
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { ref, runTransaction } from "firebase/database";
import { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6"
/* eslint-disable @typescript-eslint/no-explicit-any */
export const ButtonRegHeart = (props: any) => {
    const { item } = props;
        const [isActive, setIsActive] = useState(false);
    
        useEffect(() => {
            onAuthStateChanged(authFirebase, (user) => {
                if(user){
                    const userId = user.uid;
                    const wishlist = item.wishlist;
                    if(wishlist){
                        if(wishlist[userId]){
                            setIsActive(true);
                        }
                    }
                }
            });
        }, [])

        const handleAddWishlist = () => {
                const userId = authFirebase?.currentUser?.uid;
                if(item.id && userId){
                    const songRef = ref(dbFirebase, `/songs/${item.id}`);
                    runTransaction(songRef, (song) => {
                        if (song) {
                            if (song.wishlist && song.wishlist[userId]) {
                                song.wishlist[userId] = null;
                                setIsActive(false);
                            } else {
                                if (!song.wishlist) {
                                    song.wishlist = {};
                                }
                                song.wishlist[userId] = true;
                                setIsActive(true);
                            }
                        }
                        return song;
                    });
                }
            }

    return(
        <>
            <button 
                className={"text-[20px] " + (isActive ? "text-[#00ADEF]" : "text-white")}
                onClick={handleAddWishlist}    
            >
                <FaRegHeart/>
                
            </button>
        </>
    )
}