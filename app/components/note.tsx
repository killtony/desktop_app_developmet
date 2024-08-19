"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function note() {
    const [checkval, setCheckval] = useState(1);
    // const [value, setValue] = useState(0);
    // const [btnpostion, setBtnpostion] = useState(0)
    const test = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    const handleChange = () => {
        console.log(e.target.value);
        if(checkval==1){
            setCheckval(0)
        }else{
            setCheckval(1)
        }
       
        // setBtnpostion(e.target.value*4.6)
    }
    // const {title} =props;
    return (
        <div className="servey-item2 mb-16">
           <label
                htmlFor="customRange3"
                className="mb-12 flex f-14 h-21"
            >
              What would you do differently if you could replay this game?
            </label>
            <div className="flex flex-wrap servery-val3 items-center">
               <textarea name="note" className="w-full note f-14"></textarea>
            </div>
        </div>
    );
};

