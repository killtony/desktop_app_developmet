"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from "next/image"
import ServeyRang from "./serveyrang"
import ServeryAnswer from "./serveyanswer";
import ServeryEmotion from "./serveyemotion"
import Note from "./note"
import Comments from "./comments"
import Quote from "./quote"
import { get_user } from "@/actions/user";
import { game_result_r, get_servey_history } from '@/actions/games'
import Serveyhistory from "./serveyhistory"
import {
    userAvatar,
    midlaner,
    month1,
    month2,
    month3,
    month4,
    month5,
} from "../assets/images"
import { victoryImg, defeatImage, uploadImg, cartDown, cartUp } from "../assets/icons"

export default function UserPlay(props: any) {
    const { servey, setServey, initial, setInitial, serveyshow, setServeyshow } = props;
    const { data: session } = useSession();
    const [roles, setRoles] = useState({
        image: month1,
        rolestext: "Ranked Solo"
    })
    const [defeatimg, setDefeatimg] = useState(victoryImg)
    const [historydata, setHistorydata] = useState({})
    const [serveyresult, setServeyresult] = useState({
        score: 0,
        time: "00:00",
        performance: "Good"
    })
    const titlelist = [
        "How frustrated do you feel after this game?",
        "How much blame do you place on yourself for this loss?",
        "How much blame do you place on your teammate for this loss?",
        "How motivated are you to play another game right now?",
        "How confident do you feel in your ability  to win the next game?",
        "Did you feel in control of your gameplay during this match?",
        "How would you rate your mental state going into this game?"
    ]
    const serveyhistorydata = async () => {
        const r = await get_user({
            email: session?.user?.email,
        });
        const user_id: any = r._id
        setHistorydata(await get_servey_history(user_id, 3))
    }

    let gameresult: number = 0;
    let resultcast: string = "Good";
    const game_r = async () => {
        gameresult = Math.min(100, Math.max(0,
            (servey.feeling * 3.5) + (servey.blameteam * 3) + (servey.blameself * 3) - (servey.motivate * 0.8) - (servey.confident * 0.5) - (servey.gamefell * 0.5) + servey.emotion + servey.outcome
        ))

        if (gameresult >= 81) {
            resultcast = "Extremely"
        }
        else if (gameresult >= 61 && gameresult <= 81) {
            resultcast = "Poor"
        } else if (gameresult <= 61 && gameresult >= 41) {
            resultcast = "Average"
        } else if (gameresult <= 41 && gameresult >= 21) {
            resultcast = "Good"
        } else {
            resultcast = "Outstanding"
        }
        const r = await get_user({
            email: session?.user?.email,
        });
        await game_result_r({
            user_id: r._id,
            tilt_score: String(gameresult),
            game_time: JSON.stringify(servey),
            game_performance: resultcast,
            servey: JSON.stringify(servey),
            roles: JSON.stringify(roles)
        })
        setServeyresult({
            score: gameresult,
            time: "00:00",
            performance: resultcast
        })
        serveyhistorydata()

    }
    const handlechange = (val: any) => {
        switch (val) {
            case 1:
                setRoles({
                    image: month1,
                    rolestext: "Ranked Solo"
                }
                );
                break;
            case 2:
                setRoles({
                    image: month2,
                    rolestext: "Ranked Flex"
                }
                );
                break;
            case 3:

                setRoles({
                    image: month3,
                    rolestext: "Normal"
                }
                );
                break;
            case 4:

                setRoles({
                    image: month4,
                    rolestext: "ARAM"
                }
                );
                break;
            default:
                setRoles({
                    image: month5,
                    rolestext: "ARAM"
                }
                );
                break;
        }
    }
    const handlechangeimage = () => {
        if (victoryImg == defeatimg) {
            console.log(1);
            setDefeatimg(victoryImg)
        } else {
            setDefeatimg(defeatImage)
            console.log(2);
        }
    }
    const close = (val: any) => {

        let num: number = 0;
        for (num = 0; num < 4; num++) {
            setServeyshow({ ...serveyshow, [num]: 1 })
            console.log(num);
        }
        if (serveyshow[val] == 1) {
            setServeyshow({ ...serveyshow, [val]: 0 })
        } else {
           
            setServeyshow({ ...serveyshow, [val]: 1 })
            window.scrollTo(0, 0)
        }
    }

    useEffect(() => {
        setServey(servey)
    }, [initial])
    useEffect(() => {
        serveyhistorydata()
    }, [])
    
    return (
        <div>
            <div className="defeat-card w-full flex flex-wrap mb-12">
                <div className="game-defeat-card w-full flex ">
                    <div className={"defeat-details " + (serveyshow[0] == 1 ? "border-radus-12" : "border-radus-0")}>
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
                                        src={defeatimg}
                                        alt="A picture"
                                        width={72}
                                        height={27.82}
                                        className="vict-img mr-12 flex"
                                    />
                                    {/* <Menu as="div" className="relative inline-block text-left">
                                        <MenuButton >
                                            <Image
                                                src={defeatimg}
                                                alt="A picture"
                                                width={72}
                                                height={27.82}
                                                className="vict-img mr-12 flex"
                                            />
                                        </MenuButton>

                                        <MenuItems
                                            transition
                                            className="absolute vict-img-change right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                <MenuItem>

                                                    <a
                                                        href="#"
                                                        className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                        onClick={() => handlechangeimage()}
                                                    >
                                                        <MenuButton >
                                                            <Image
                                                                src={victoryImg}
                                                                alt="A picture"
                                                                width={72}
                                                                height={27.82}
                                                                className="vict-img mr-12 flex"
                                                            />
                                                        </MenuButton>
                                                    </a>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </Menu> */}
                                    <ul className="grey">
                                        <li>
                                            <span className="dot mr-8"></span>
                                            <Menu as="div" className="relative inline-block text-left">
                                                <MenuButton >
                                                    <Image
                                                        src={roles.image}
                                                        alt="A picture"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </MenuButton>

                                                <MenuItems
                                                    transition
                                                    className="absolute dropdownmenu right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                                >
                                                    <div className="py-1">
                                                        <MenuItem>

                                                            <a
                                                                href="#"
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                onClick={() => handlechange(1)}
                                                            >
                                                                <Image
                                                                    src={month1}
                                                                    alt="A picture"
                                                                    width={24}
                                                                    height={24}
                                                                    className="mr-2"

                                                                />
                                                                Ranked Solo
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                onClick={() => handlechange(2)}
                                                            >
                                                                <Image
                                                                    src={month2}
                                                                    alt="A picture"
                                                                    width={24}
                                                                    height={24}
                                                                    className="mr-2"

                                                                />
                                                                Ranked Flex
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                onClick={() => handlechange(3)}
                                                            >
                                                                <Image
                                                                    src={month3}
                                                                    alt="A picture"
                                                                    width={24}
                                                                    height={24}
                                                                    className="mr-2"

                                                                />
                                                                Normal
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                onClick={() => handlechange(4)}
                                                            >
                                                                <Image
                                                                    src={month4}
                                                                    alt="A picture"
                                                                    width={24}
                                                                    height={24}
                                                                    className="mr-2"

                                                                />
                                                                ARAM
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                                                onClick={() => handlechange(5)}
                                                            >
                                                                <Image
                                                                    src={month5}
                                                                    alt="A picture"
                                                                    width={24}
                                                                    height={24}
                                                                    className="mr-2"

                                                                />
                                                                ARAM
                                                            </a>
                                                        </MenuItem>
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </li>
                                        <li className="ml-8 light-yellow">
                                            <span className="dot mr-8 "></span><span>{roles.rolestext}</span>
                                        </li>
                                        {/* <li className="ml-8">
                                            <span className="dot mr-8"></span>2 hours ago
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="tilt-result flex flex-wrap mr-24">
                                        <span className="w-full f-12 grey">Tilt score</span>
                                        <span className="w-full f-18 orange">{serveyresult.score}/100</span>

                                    </div>
                                    <div className="tilt-result flex flex-wrap mr-24 ml-24">
                                        <span className="w-full f-12 grey">Game</span>
                                        {/* <span className="w-full f-18">{serveyresult.time}</span> */}
                                        <span className="w-full f-18">{"30:00"}</span>
                                    </div>
                                    <div className="tilt-result flex flex-wrap">
                                        <span className="w-full f-12 grey">Performance</span>
                                        <span className="w-full f-18 orange">{serveyresult.performance}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"survey-card flex flex-wrap" + (serveyshow[0] == 0 ? ' ' : ' display-none')}>
                        <h4 className="f-16 mb-16">Post-Game Feeling Survey</h4>

                        <ServeyRang title={titlelist[0]} slug="feeling" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeryAnswer slug="emotion" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[1]} slug="blameself" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeyRang title={titlelist[2]} slug="blameteam" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeyRang title={titlelist[3]} slug="motivate" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeyRang title={titlelist[4]} slug="confident" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeyRang title={titlelist[5]} slug="gamefell" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <ServeryEmotion slug="emotion" servey={servey} setServey={setServey} initial={initial} />
                        <Note slug="note" initial={initial} servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[6]} slug="mental" servey={servey} setServey={setServey} flag={1} initial={initial} />
                        <div className="w-full h-32 mb-12 mt-12">
                            <button className="save  back-orange" onClick={game_r}>Save</button>

                        </div>
                        <Comments initial={initial} />
                        <Quote initial={initial} />
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
                        <button className="" onClick={() => close(0)}>
                            <Image
                                src={serveyshow[0] ? cartDown : cartUp}
                                alt="A picture"
                                width={35}
                                height={27.82}
                            />
                        </button>
                    </div>
                </div>
            </div>
            {Object.entries(historydata).map(([index, value]) => <Serveyhistory historydata={value} key={index} serveyid={index} setServeyshow={setServeyshow} serveyshow={serveyshow} close={close} />)}
        </div>
    );
};
