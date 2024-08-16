"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Userplay from "../components/userplay";
// import userAvatar from "../../public/userAvatar.png";
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
                    <div className="">
                        <div className="w-full">
                            <span className="float-left">Tilt MMR</span>
                            <span className="float-right">87</span>
                        </div>
                        <div className="w-full">
                            progress bar
                        </div>
                    </div>

                </div>
                <div className="" style={{
                        backgroundImage: `url(${rankedback})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        width: "100vw",
                        height: "100vh"
                        }}>
                    <span>02:49</span>
                    <div>
                        <button>start</button>
                        <button>refresh</button>
                        <button>setting</button>

                    </div>
                </div>
            </div>
            <div className="left-w-el">

            </div>
        </div>
    );
};
