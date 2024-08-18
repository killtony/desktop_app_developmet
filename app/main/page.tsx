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
export default function MainPage() {
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (formData: FormData) => {
  //   const res = await signIn("credentials", {
  //     email: formData.get("email"),
  //     password: formData.get("password"),
  //     redirect: false,
  //   });
  //   if (res?.error) {
  //     setError(res.error as string);
  //   }
  //   if (res?.ok) {
  //     return router.push("/");
  //   }
  // };

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
        <button className="btn-new-entry">New entry</button>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="left-side mr-120">
          <RankedSolo />
          <RecentActivity />
          <TopRoles />
        </div>
        <div className="right-side">
          <Gamevict />
        </div>
      </div>
    </section>
  );
};
