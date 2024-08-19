"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function serveryAnswer() {
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
        <div className="servey-item mb-16">
           <label
                htmlFor="customRange3"
                className="mb-12 flex f-14 h-21"
            >
                Do you feel the outcome of the game was fair
            </label>
            <div className="flex servery-val2 items-center">
                <button  className="btn-yes mr-8"  onChange={handleChange}></button><span>Yes</span>
                <button  className="btn-no mr-8 ml-40" onChange={handleChange}></button><span>No</span>
            </div>
        </div>
    );
};

