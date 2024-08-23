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
export default function UserPlay(props: any) {
    const { servey, setServey, initial, setInitial, serveyshow, setServeyshow } = props;
    const { data: session } = useSession();
    const [gameresult, setGameresult] = useState(0);
    const [roles, setRoles] = useState({
        image: month1,
        rolestext: "Ranked Solo"
    })
    const [defeatimg, setDefeatimg] = useState(victoryImg)
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


    const result = () => {

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
    const game_r = async () => {
        const r = await get_user({
            email: session?.user?.email,
        });
        await game_result_r({

            user_id: r._id,
            tilt_score: String(gameresult),
            game_time: JSON.stringify(servey),
            game_performance: resultcast,
            servey: JSON.stringify(servey)
        })
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
            default:
                setRoles({
                    image: month4,
                    rolestext: "ARAM"
                }
                );
                break;
        }
    }
    const handlechangeimage = () => {
        if (victoryImg==defeatimg){
            console.log(1);
            setDefeatimg(victoryImg)
        }else{
            setDefeatimg(defeatImage)
            console.log(2);
        }
    }
    const close = () => {
        setServeyshow(1)
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        setServey(servey)
    }, [initial])
    return (
        <div>
            <div className="defeat-card w-full flex flex-wrap mb-12">
                <div className="game-defeat-card w-full flex ">
                    <div className={"defeat-details " + (serveyshow == 1 ? "border-radus-12" : "border-radus-0")}>
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
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </li>
                                        <li className="ml-8 light-yellow">
                                            <span className="dot mr-8 "></span><span>{roles.rolestext}</span>
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
                    <div className={"survey-card flex flex-wrap" + (serveyshow == 1 ? ' display-none' : ' ')}>
                        <h4 className="f-16 mb-16">Post-Game Feeling Survey</h4>

                        <ServeyRang title={titlelist[0]} slug="feeling" servey={servey} setServey={setServey} initial={initial} />
                        <ServeryAnswer slug="emotion" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[1]} slug="blameself" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[2]} slug="blameteam" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[3]} slug="motivate" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[4]} slug="confident" servey={servey} setServey={setServey} initial={initial} />
                        <ServeyRang title={titlelist[5]} slug="gamefell" servey={servey} setServey={setServey} initial={initial} />
                        <ServeryEmotion slug="emotion" servey={servey} setServey={setServey} initial={initial} />
                        <Note slug="note" initial={initial} servey={servey} setServey={setServey} />
                        <ServeyRang title={titlelist[6]} slug="mental" servey={servey} setServey={setServey} initial={initial} />
                        <div className="w-full h-32 mb-12 mt-12">
                            <button className="" onClick={result}>Result</button>
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
                        <button className="" onClick={close}>
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
                                            className="mr-2"
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
