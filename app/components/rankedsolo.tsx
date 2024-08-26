"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import arrowClockwise from "../assets/icons/arrow-clockwise.svg";
import gear from "../assets/icons/gear.svg";
import { logo, progressbar } from "../assets/images/";
import Image from "next/image"
import { get_user } from "@/actions/user";
import { get_average_score } from '@/actions/games'
export default function RankedSolo() {
    const { data: session } = useSession();
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('05');
    const [averagescore, setAveragescore] = useState(0)
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(300);
    const [timepriod, setTimepriod] = useState(300)
    const [progressbarwidth, setProgressbarwidth]=useState(0)
    const avarge_tilt = 10
    useEffect(() => {
        let intervalId: NodeJS.Timeout;;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond = String(secondCounter).padStart(2, '0');
                const computedMinute = String(minuteCounter).padStart(2, '0');

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(counter => counter - 1);
                setProgressbarwidth(progressbarwidth+210.5/timepriod)
                if (counter == 0) {
                    return () => clearInterval(intervalId);
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);
    const startgame = () => {
        setIsActive(!isActive)
    }
    const stopTimer = () => {
        setIsActive(false);
        setSecond('00');
        if (timepriod == 300) {
            setCounter(300);
            setMinute("05")
        } else if (timepriod == 600) {
            setCounter(600);
            setMinute("10");
        } else {
            setCounter(900);
            setMinute("15");
        }
        setProgressbarwidth(0)
    };
    const setting = () => {
        setIsActive(false);
        setSecond('00');
        if (timepriod < 600) {
            setTimepriod(600)
            setMinute("10");
            setCounter(600);
        } else if (timepriod == 600) {
            setTimepriod(900)
            setMinute("15");
            setCounter(900);
        } else {
            setTimepriod(300)
            setMinute("05")
            setCounter(300);
        }
        setProgressbarwidth(0)
    }
    const serveyaveragescore = async () => {
        const r = await get_user({
            email: session?.user?.email,
        });
        const user_id: any = r._id
        setAveragescore(await get_average_score(user_id, 6))

    }
    useEffect(() => {
        serveyaveragescore()
    }, [])
    
    return (
        <div className="w-full left-side-wh">
            <div className="left-w-el">
                <h4 className="w-full f-16 gap">Ranked Solo</h4>
                <div className="w-full flex items-center f-14 ">

                    <Image
                        src={logo}
                        alt="A picture"
                        width={64}
                        height={64}
                        className="gap-r"
                    />
                    <div className="ranked-1">
                        <div className="w-full mb-12">
                            <span className="float-left">Tilt MMR</span>
                            <span className="float-right">{averagescore}</span>
                        </div>
                        <div className="w-full">
                            <Image
                                src={progressbar}
                                alt="A picture"
                                height={64}
                                className="gap-r w-full"

                            />
                            <div className="progressbar" style={{width : progressbarwidth}}> </div>
                        </div>
                    </div>

                </div>
                <div className="rank-time" >
                    <span className="w-full flex flex-wrap justify-center items-center font-bold f-24 gap h-44">{minute}:{second}</span>
                    <div className="w-full flex flex-wrap">
                        <button className="start-btn gap-r" onClick={startgame}>Start</button>
                        <button className="w-32 p-8 gap-r8">
                            <Image
                                src={arrowClockwise}
                                alt="A picture"
                                width={64}
                                height={64}
                                onClick={stopTimer}
                            /></button>
                        <button className="w-32 p-8">
                            <Image
                                src={gear}
                                alt="A picture"
                                width={64}
                                height={64}
                                onClick={setting}
                            /></button>

                    </div>
                </div>
            </div>
            <div className="left-w-el">

            </div>
        </div>
    );
};
