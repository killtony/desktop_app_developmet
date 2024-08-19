"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import userAvatar from "../assets/images/userAvatar.png";
import victoryImg from "../assets/icons/Group.svg";
import midlaner from "../assets/images/midlaner.png"
import uploadImg from "../assets/icons/upload-simple.svg"
import cartDown from "../assets/icons/caret-down.svg"
import cartUp from "../assets/icons/caret-up.svg"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function serveyRang({title}) {
    const [state, setState] = useState({});
    const [value, setValue] = useState(0);
    const [btnpostion, setBtnpostion] = useState(0)
    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
        setBtnpostion(e.target.value*4.6)
    }
    // const {title} =props;
    return (
        <div className="servey-item mb-12">
            <span
                className="mb-12 flex f-14 h-21"
            >
                {title}
            </span>
            <input type="range" min={0} max="90" step={10} value={value} className="range"  onChange={handleChange} />
            <button className="rang-btn w-full"    style={{paddingLeft:btnpostion+"px"}} >
                <Image
                    src={rangBtn}
                    alt="A picture"
                    width={24}
                    height={24}
                
                />
            </button>
            <input type="range" min={0} max="90" step={10} value={value} className="range  click-btn" onChange={handleChange} />
            <div className="w-full flex justify-between servey-val">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>

        </div>
    );
};

