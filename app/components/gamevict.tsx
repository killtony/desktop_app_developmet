"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image"
import userAvatar from "../assets/images/userAvatar.png";
import victoryImg from "../assets/icons/Group.svg";
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
import {game_result_r} from '@/actions/games'
export default function UserPlay() {
    const { data: session } = useSession()

    const [gameresult, setGameresult] = useState(0);

    const [resultcast, setResultcast] = useState("Great")
    const titlelist = [
        "How frustrated do you feel after this game?",
        "How much blame do you place on yourself for this loss?",
        "How much blame do you place on your teammate for this loss?",
        "How motivated are you to play another game right now?",
        "How confident do you feel in your ability  to win the next game?",
        "Did you feel in control of your gameplay during this match?",
        "How would you rate your mental state going into this game?"
    ]
    const [servey, setServey] = useState({
        feeling: 1,
        outcome: 15,
        blameself: 1,
        blameteam: 1,
        motivate: 1,
        confident: 1,
        gamefell: 1,
        emotion: 0,
        mental: 1,
    })

    const test =  () => {

        setGameresult(Math.min(100, Math.max(0,
            (servey.feeling * 3.5) + (servey.blameteam * 3) + (servey.blameself * 3) - (servey.motivate * 0.8) - (servey.confident * 0.5) - (servey.gamefell * 0.5) + servey.emotion + servey.outcome
        )))
        
        if (gameresult >= 81) {
            setResultcast("Extremely")
        }
        else if (gameresult >= 61 && gameresult <= 81) {
            setResultcast("Poor")
        } else if (gameresult <= 61 && gameresult >= 41) {
            setResultcast("Average")
        } else if (gameresult <= 41 && gameresult >= 21) {
             setResultcast("Good")
        } else {
           setResultcast("Outstanding")
        }
    }
    const game_r = async ()=>{
        const r = await get_user({
            email: session?.user?.email,
          });
        await game_result_r({

            user_id:r._id, 
            tilt_score:String(gameresult),
            game_time:String(10),
            game_performance:resultcast
        })
    }
    // useEffect(()=>{
    //     game_r()
    // }, [resultcast])
    return (
        <div>
            <div className="defeat-card w-full flex flex-wrap mb-12">
                <div className="game-defeat-card w-full flex ">
                    <div className="defeat-details mb-12">
                        <div className="info-card flex flex-wrap justify-center p-12">
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
                                    <ul className="grey">
                                        <li>
                                            <span className="dot mr-8"></span>
                                            <Image
                                                src={midlaner}
                                                alt="A picture"
                                                width={24}
                                                height={24}
                                            />
                                        </li>
                                        <li className="ml-8 light-yellow">
                                            <span className="dot mr-8 "></span>Ranked solo
                                        </li>
                                        <li className="ml-8">
                                            <span className="dot mr-8"></span>2 hours ago
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="tilt-result flex flex-wrap mr-24">
                                        <span className="w-full f-12 grey">Tilt score</span>
                                        <span className="w-full f-18 orange">{gameresult}/100</span>

                                    </div>
                                    <div className="tilt-result flex flex-wrap mr-24 ml-24">
                                        <span className="w-full f-12 grey">Game</span>
                                        <span className="w-full f-18">21:22</span>
                                    </div>
                                    <div className="tilt-result flex flex-wrap">
                                        <span className="w-full f-12 grey">performance</span>
                                        <span className="w-full f-18 orange">{resultcast}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="survey-card">
                        <h4 className="f-16 mb-16">Post-Game Feeling Survey</h4>
                        <button className="btn" onClick={test}>Result test</button>
                        <button className="btn" onClick={game_r}>Game save</button>
                        <ServeyRang title={titlelist[0]} slug="feeling" servey={servey} setServey={setServey} />
                        <ServeryAnswer slug="emotion" servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[1]} slug="blameself" servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[2]} slug="blameteam" servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[3]} slug="motivate" servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[4]} slug="confident" servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[5]} slug="gamefell" servey={servey} setServey={setServey} />
                        <ServeryEmotion slug="emotion" servey={servey} setServey={setServey} />
                        <Note />
                        <ServeyRang title={titlelist[6]} slug="mental" servey={servey} setServey={setServey} />
                        <Comments />
                        <Quote />

                    </div>
                </div>

                <div className="vict-action p-8">
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
                        <button>
                            <Image
                                src={cartUp}
                                alt="A picture"
                                width={35}
                                height={27.82}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="victory-card w-full flex mb-12">
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
                <div className="vict-action p-8">
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
                    <div className="cart-down">
                        <button>
                            <Image
                                src={cartDown}
                                alt="A picture"
                                width={35}
                                height={27.82}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="victory-card w-full flex mb-12">
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
                <div className="vict-action p-8">
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
                    <div className="cart-down">
                        <button>
                            <Image
                                src={cartDown}
                                alt="A picture"
                                width={35}
                                height={27.82}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="victory-card w-full flex  mb-12">
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
                <div className="vict-action p-8">
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
                    <div className="cart-down">
                        <button>
                            <Image
                                src={cartDown}
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
