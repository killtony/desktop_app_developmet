"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Userplay from "./gamevict";
import arrowClockwise from "../assets/icons/arrow-clockwise.svg";
import gear from "../assets/icons/gear.svg";
import userAvatar from "../assets/images/logo.png";
import rankedback from "../assets/images/rankedback.png";
import Image from "next/image"
export default function rankedSolo() {
    return (
        <div className="w-full left-side-wh">
            <div className="left-w-el">
                <h4 className="w-full f-16 gap">Ranked Solo</h4>
                <div className="w-full flex items-center f-14 ">

                    <Image
                        src={userAvatar}
                        alt="A picture"
                        width={64}
                        height={64}
                        className="gap-r"
                    />
                    <div className="ranked-1">
                        <div className="w-full">
                            <span className="float-left">Tilt MMR</span>
                            <span className="float-right">87</span>
                        </div>
                        <div className="w-full gap">
                            progress bar
                        </div>
                    </div>

                </div>
                <div className="rank-time" >
                    <span className="w-full flex flex-wrap justify-center items-center font-bold f-24 gap h-44">02:49</span>
                    <div className="w-full flex flex-wrap">
                        <button className="start-btn gap-r">Start</button>
                        <button className="w-32 p-8 gap-r8">
                            <Image
                                src={arrowClockwise}
                                alt="A picture"
                                width={64}
                                height={64}
                            
                            /></button>
                        <button className="w-32 p-8">
                            <Image
                                src={gear}
                                alt="A picture"
                                width={64}
                                height={64}
                            
                            /></button>

                    </div>
                </div>
            </div>
            <div className="left-w-el">

            </div>
        </div>
    );
};
