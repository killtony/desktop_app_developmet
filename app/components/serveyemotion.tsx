"use client";
import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
export default function ServeyEmotion({ slug, servey, setServey, initial }: any) {
    const [background, setBackground] = useState(2)
    const handleChange = (val: any) => {
        switch (val) {
            case 1:
                setServey({ ...servey, [slug]: 25 })
                setBackground(1)
                break;
            case 2:
                setServey({ ...servey, [slug]: 0 })
                setBackground(2)
                break;
            case 3:
                setServey({ ...servey, [slug]: -8 })
                setBackground(3)
                break;
            case 4:
                setServey({ ...servey, [slug]: -8 })
                setBackground(4)
                break;
            default:
                setServey({ ...servey, [slug]: 0 })
                setBackground(5)
        }
    }
    useEffect(() => {
        handleChange(2)
        setBackground(2)
    }, [initial])
    return (
        <div className="servey-item1 mb-16">
            <label
                htmlFor="customRange3"
                className="mb-12 flex f-14 h-21"
            >
                What emotion best describes how you feel right now?
            </label>
            <div className="flex flex-wrap servery-val3 items-center">
                <button className={background == 1 ? 'emt-btn-active' : 'emt-btn-deactive'} onClick={() => handleChange(1)}><span>😡 Anger</span></button>
                <button className={background == 2 ? 'emt-btn-active' : 'emt-btn-deactive'} onClick={() => handleChange(2)}><span>😞 Disappointment</span></button>
                <button className={background == 3 ? 'emt-btn-active' : 'emt-btn-deactive'} onClick={() => handleChange(3)}><span>😌 Calm</span></button>
                <button className={background == 4 ? 'emt-btn-active' : 'emt-btn-deactive'} onClick={() => handleChange(4)}><span>😊 Satisfaction</span></button>
                <button className={background == 5 ? 'emt-btn-active' : 'emt-btn-deactive'} onClick={() => handleChange(5)}><span>Other</span></button>
            </div>
        </div>
    );
};

