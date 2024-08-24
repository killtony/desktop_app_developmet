"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from "next/image"
import userAvatar from "../assets/images/userAvatar.png";
import victoryImg from "../assets/icons/Group.svg";
import defeatImage from "../assets/icons/defeat.svg"
import midlaner from "../assets/images/midlaner.png"
import uploadImg from "../assets/icons/upload-simple.svg"
import cartDown from "../assets/icons/caret-down.svg"
import cartUp from "../assets/icons/caret-up.svg"
import ServeyRang from "./serveyrang"
import ServeryAnswer from "./serveyanswer";
import ServeryEmotion from "./serveyemotion"
import Note from "./note"
import Comments from "./comments"
import Quote from "./quote"
import { get_user } from "@/actions/user";
import { game_result_r } from '@/actions/games'

import month1 from "../assets/images/month1.png"
import month2 from "../assets/images/month2.png"
import month3 from "../assets/images/month3.png"
import month4 from "../assets/images/month4.png"
import month5 from "../assets/images/month5.png"
export default function Serveyhistory(props: any) {
    const { historydata, serveyid, serveyshow, close } = props;
    if (historydata == null) {
        return
    }
    const serveydata = JSON.parse(historydata.servey)
    const titlelist = [
        "How frustrated do you feel after this game?",
        "How much blame do you place on yourself for this loss?",
        "How much blame do you place on your teammate for this loss?",
        "How motivated are you to play another game right now?",
        "How confident do you feel in your ability  to win the next game?",
        "Did you feel in control of your gameplay during this match?",
        "How would you rate your mental state going into this game?"
    ]
 

    return (
        <div>
            <div className="defeat-card w-full flex flex-wrap mb-12">
                <div className="game-defeat-card w-full flex ">
                    <div className={"defeat-details " + (serveyshow[Number(serveyid)+1] == serveyid ? "border-radus-12" : "border-radus-0")}>
                        {/* <div className={"defeat-details "}> */}
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
                                        className="vict-img mr-12 flex"
                                    />
                                    <ul className="grey">
                                        <li>
                                            <span className="dot mr-8"></span>
                                            <Image
                                                src={month1}
                                                alt="A picture"
                                                width={24}
                                                height={24}
                                            />
                                        </li>
                                        <li className="ml-8 light-yellow">
                                            <span className="dot mr-8 "></span><span>test</span>
                                        </li>
                                        <li className="ml-8">
                                            <span className="dot mr-8"></span>2 hours ago
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="tilt-result flex flex-wrap mr-24">
                                        <span className="w-full f-12 grey">Tilt score</span>
                                        <span className="w-full f-18 orange">{historydata.tilt_score}/100</span>

                                    </div>
                                    <div className="tilt-result flex flex-wrap mr-24 ml-24">
                                        <span className="w-full f-12 grey">Game</span>
                                        <span className="w-full f-18">21:22</span>
                                    </div>
                                    <div className="tilt-result flex flex-wrap">
                                        <span className="w-full f-12 grey">performance</span>
                                        <span className="w-full f-18 orange">{historydata.game_performance}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"survey-card flex flex-wrap" + (serveyshow[Number(serveyid)+1]== 0 ? '' : ' display-none')}>
                        <h4 className="f-16 mb-16">Post-Game Feeling Survey</h4>

                        <ServeyRang title={titlelist[0]} slug="feeling" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeryAnswer slug="emotion" servey={serveydata} setServey={() => { }} />
                        <ServeyRang title={titlelist[1]} slug="blameself" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeyRang title={titlelist[2]} slug="blameteam" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeyRang title={titlelist[3]} slug="motivate" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeyRang title={titlelist[4]} slug="confident" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeyRang title={titlelist[5]} slug="gamefell" servey={serveydata} flag={0} setServey={() => { }} />
                        <ServeryEmotion slug="emotion" servey={serveydata} setServey={() => { }} />
                        <Note slug="note" servey={serveydata} setServey={() => { }} />
                        <ServeyRang title={titlelist[6]} slug="mental" servey={serveydata} flag={0} setServey={() => { }} />
                        <Quote />
                    </div>
                </div>

                <div className="vict-action flex flex-wrap p-8">
                    <div className="">
                        <button>
                            <Image
                                src={uploadImg}
                                alt="A picture"
                                width={35}
                                height={32}
                            />
                        </button>
                    </div>
                    <div className="defeat-cart-down">
                        <button className="" onClick={() => close(Number(serveyid)+1)}>
                            <Image
                                src={serveyshow[Number(serveyid)+1] ? cartDown : cartUp}
                                alt="A picture"
                                width={35}
                                height={27.82}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
