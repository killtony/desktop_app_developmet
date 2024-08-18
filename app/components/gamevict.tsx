"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import userAvatar from "../assets/images/userAvatar.png";
import victoryImg from "../assets/icons/Group.svg";
import midlaner from "../assets/images/midlaner.png"
export default function userPlay() {

    return (
        <div className="victory-card w-full flex">
            <div className="vict-details">
                <div className="info-card flex flex-wrap p-12">
                    <div className="avatar mr-24">
                        <Image
                            src={userAvatar}
                            alt="A picture"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="details">
                        <div className="vict-content flex items-center mb-8 f-14">
                            <Image
                                src={victoryImg}
                                alt="A picture"
                                width={72}
                                height={27.82}
                                className="vict-img mr-12"
                            />
                            <ul>
                                <li>
                                    <span className="dot mr-8"></span>
                                    <Image
                                        src={midlaner}
                                        alt="A picture"
                                        width={24}
                                        height={24}
                                    />
                                </li>
                                <li className="ml-8">
                                    <span className="dot mr-8"></span>Ranked solo
                                </li>
                                <li className="ml-8">
                                    <span className="dot mr-8"></span>2 hours ago
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="tilt-result flex flex-wrap mr-24">
                                <span className="w-full">Tilt score</span>
                                <span className="w-full">12/100</span>

                            </div>
                            <div className="tilt-result flex flex-wrap mr-24 ml-24">
                                <span className="w-full">Game</span>
                                <span className="w-full">21:22</span>
                            </div>
                            <div className="tilt-result flex flex-wrap">
                                <span className="w-full">performance</span>
                                <span className="w-full">Great</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vict-action">
                <span>@</span>
            </div>
        </div>
    );
};
