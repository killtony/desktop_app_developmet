"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import rangBtn from "../assets/icons/rang-btn.svg"
import userAvatar from "../assets/images/userAvatar.png"
import smiley from "../assets/icons/smiley.svg"
import image from "../assets/icons/image.svg"
import paperPlane from "../assets/icons/paper-plane-right.svg"
export default function Comments(props:any) {
    const {setInitial}=props
    return (
        <div className="servey-comments mb-12 w-full">
            <div className="w-full flex flex-wrap custome-header items-center mb-8">
                <Image
                    src={userAvatar}
                    alt="A picture"
                    width={48}
                    height={48}
                />
                <div className="flex flex-wrap">
                    <span className="w-full f-16">Player1</span>
                    <span className="w-full f-12">#NA1</span>
                </div>

            </div>
            <div className="flex flex-wrap servery-val3 items-center  mb-8">
                <textarea name="note" className="w-full note f-14"></textarea>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap">
                    <Image
                        src={smiley}
                        alt="A picture"
                        width={32}
                        height={32}
                        className="p-8"
                    />
                    <Image
                        src={image}
                        alt="A picture"
                        width={32}
                        height={32}
                        className="p-8"
                    />
                </div>
                <div >
                    <Image
                        src={paperPlane}
                        alt="A picture"
                        width={32}
                        height={32}
                        className="p-8"
                    />
                </div>
            </div>
        </div>
    );
};

