"use client";
import { FormEvent, useEffect, useState } from "react";
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
export default function ServeyRang({ title, slug, servey, setServey, initial, setInitial }: any) {
    const [state, setState] = useState({});
    const [value, setValue] = useState(0);
    const [btnpostion, setBtnpostion] = useState(0)
    const [val, setVal] = useState(servey)
    const [rang, setRang] = useState(5)
    const rest = 100;
    const handleChange = (e: any) => {
        setValue(e.target.value)
        setBtnpostion((e.target.value - 10) * 4.6 + 2)
        setRang(e.target.value - 5)
        setServey({ ...servey, [slug]: e.target.value / 10 })
    }
    useEffect(() => {
        const event = {
            "target": {
                "value": 0
            }
        }
        handleChange(event)
        setRang(5)
    }, [initial])
    return (
        <div className="servey-item mb-12 w-full">
            <span
                className="mb-12 flex f-14 h-21"
            >
                {title}
            </span>
            <div className="range-slider">
                <input type="range" min={10} max="100" step={10} value={value} style={{ "background": "linear-gradient(to right, #FF7B00 " + rang + "%, #2C2C2E " + rang + "%" + rest + "%)" }} onChange={handleChange} />
            </div>
            <div className="w-full flex servey-val justify-between">
                <span className={value == 0 ? "range-btn-active" : " "}>1</span>
                <span className={value == 20 ? "range-btn-active" : " "}>2</span>
                <span className={value == 30 ? "range-btn-active" : " "}>3</span>
                <span className={value == 40 ? "range-btn-active" : " "}>4</span>
                <span className={value == 50 ? "range-btn-active" : " "}>5</span>
                <span className={value == 60 ? "range-btn-active" : " "}>6</span>
                <span className={value == 70 ? "range-btn-active" : " "}>7</span>
                <span className={value == 80 ? "range-btn-active" : " "}>8</span>
                <span className={value == 90 ? "range-btn-active" : " "}>9</span>
                <span className={value == 100? "range-btn-active" : " "}>10</span>
            </div>

        </div>
    );
};

