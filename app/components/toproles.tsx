"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Userplay from "./gamevict";
// import userAvatar from "../../public/userAvatar.png";
import userAvatar from "../assets/images/userAvatar.png";
import Image from "next/image"
export default function topRoles() {
  return (
    <div className="w-full left-side-wh">
      <div className="mb-16">
      <span className="f-16">Top Roles</span>

      </div>
      <div className="w-full chart-88 mb-16">

      </div>
      <div className="w-full flex flex-wrap justify-around">
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={userAvatar}
              alt="A picture"
              width={24}
              height={24}
              className=""
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <span className="w-full flex flex-wrap justify-center items-center  f-12">
              30
            </span>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <span className="w-full flex flex-wrap justify-center items-center f-14">
              33.3%
            </span>
          </div>
        </div>
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={userAvatar}
              alt="A picture"
              width={24}
              height={24}
              className=""
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <span className="w-full flex flex-wrap justify-center items-center  f-12">
              30
            </span>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <span className="w-full flex flex-wrap justify-center items-center f-14">
              33.3%
            </span>
          </div>
        </div>
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={userAvatar}
              alt="A picture"
              width={24}
              height={24}
              className=""
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <span className="w-full flex flex-wrap justify-center items-center  f-12">
              30
            </span>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <span className="w-full flex flex-wrap justify-center items-center f-14">
              33.3%
            </span>
          </div>
        </div>
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={userAvatar}
              alt="A picture"
              width={24}
              height={24}
              className=""
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <span className="w-full flex flex-wrap justify-center items-center  f-12">
              30
            </span>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <span className="w-full flex flex-wrap justify-center items-center f-14">
              33.3%
            </span>
          </div>
        </div>
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={userAvatar}
              alt="A picture"
              width={24}
              height={24}
              className=""
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <span className="w-full flex flex-wrap justify-center items-center  f-12">
              30
            </span>
          </div>
          <div className="w-full flex flex-wrap justify-center items-center">
            <span className="w-full flex flex-wrap justify-center items-center f-14">
              33.3%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
