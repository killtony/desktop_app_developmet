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
export default function ServeyRang({title, slug, servey, setServey}:any) {
// export default function serveyRang({ title, slug, servey}) {
    const [state, setState] = useState({});
    const [value, setValue] = useState(0);
    const [btnpostion, setBtnpostion] = useState(0)
    const [val, setVal]= useState(servey)
    const [rang, setRang] = useState(5)
    const rest = 100;
    const handleChange = (e:any) => {
        setServey({...servey, [slug]: (e.target.value-10)/10+1})
        setValue(e.target.value)
        setBtnpostion((e.target.value - 10) * 4.6 + 2)
        setRang(e.target.value - 5)
        setServey({...servey, [slug]: e.target.value/10})
    }
    return (
        <div className="servey-item mb-12">
            <span
                className="mb-12 flex f-14 h-21"
            >
                {title}
            </span>
            <div className="range-slider">
                <input type="range" min={10} max="100" step={10} value={value} style={{ "background": "linear-gradient(to right, #FF7B00 " + rang + "%, #2C2C2E " + rang + "%" + rest + "%)" }} onChange={handleChange} />
            </div>
            <div className="w-full flex servey-val">
                <span style={{ marginRight: "40px" }}>1</span>
                <span style={{ marginRight: "37px" }}>2</span>
                <span style={{ marginRight: "36px" }}>3</span>
                <span style={{ marginRight: "37px" }}>4</span>
                <span style={{ marginRight: "38px" }}>5</span>
                <span style={{ marginRight: "37px" }}>6</span>
                <span style={{ marginRight: "39px" }}>7</span>
                <span style={{ marginRight: "37px" }}>8</span>
                <span style={{ marginRight: "35px" }}>9</span>
                <span>10</span>
            </div>

        </div>
    );
};

