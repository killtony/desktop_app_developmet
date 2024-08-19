"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
import userAvatar from "../assets/images/userAvatar.png"
import imagestyle from "../assets/icons/Coach.svg"
export default function quote() {
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
        if (checkval == 1) {
            setCheckval(0)
        } else {
            setCheckval(1)
        }

        // setBtnpostion(e.target.value*4.6)
    }
    // const {title} =props;
    return (


        <div className="w-full flex flex-wrap quote items-center">
            <Image
                src={imagestyle}
                alt="A picture"
                width={48}
                height={48}
                className="mr-12 quote-image"
            />
            <div className="f-14">

                <p>Only in my pain, did I find my will. Only in my chaos did I  find my still. Only in my fear did I find my might. Only in my darkness, did I see my light.</p>
            </div>

        </div>
    );
};
