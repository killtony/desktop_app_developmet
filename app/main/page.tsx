"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Gamevict from "../components/gamevict";
import RankedSolo from "../components/rankedsolo"
import RecentActivity from "../components/recentactivity";
import TopRoles from "../components/toproles"
// import userAvatar from "../../public/userAvatar.png";
import userAvatar from "../assets/images/userAvatar.png";
import Image from "next/image"

const initial_servey={
  feeling: 1,
  outcome: 15,
  blameself: 1,
  blameteam: 1,
  motivate: 1,
  confident: 1,
  gamefell: 1,
  emotion: 0,
  mental: 1,
  note:""
}
export default function MainPage() {
  const [serveyshow, setServeyshow] = useState(0);
  
  const [initial, setInitial]=useState(0)
  const [servey, setServey] = useState(initial_servey)
  const handleservey =  () => {
    setServey(initial_servey)
    if (initial==0){
      setInitial(1)
    }else{
      setInitial(0)
    } 
    setServeyshow(0)
  };

  return (
    <section >
      <div className="w-full flex flex-wrap custome-header items-center">
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
        <button className="btn-new-entry" onClick={handleservey}>New entry</button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="left-side mr-120">
          <RankedSolo />
          <RecentActivity />
          <TopRoles />
        </div>
        <div className="right-side">
          <Gamevict servey={servey} setServey={setServey} initial={initial} setInitial={setInitial} setServeyshow={setServeyshow} serveyshow={serveyshow}/>
        </div>
      </div>
    </section>
  );
};
