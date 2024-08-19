"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function serveyEmotion() {
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
        <div className="servey-item1 mb-16">
           <label
                htmlFor="customRange3"
                className="mb-12 flex f-14 h-21"
            >
                What emotion best describes how you feel right now?
            </label>
            <div className="flex flex-wrap servery-val3 items-center">
                <button  className=" mr-12"  onChange={handleChange}><span>😡 Anger</span></button>
                <button  className=" mr-12" onChange={handleChange}><span>😞 Disappointment</span></button>
                <button  className=" mr-12" onChange={handleChange}><span>😌 Calm</span></button>
                <button  className=" mr-12" onChange={handleChange}><span>😊 Satisfaction</span></button>
                <button  className=" mr-12" onChange={handleChange}><span>Other</span></button>
            </div>
        </div>
    );
};

