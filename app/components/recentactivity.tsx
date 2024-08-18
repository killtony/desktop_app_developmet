"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Userplay from "./gamevict";
// import userAvatar from "../../public/userAvatar.png";
import userAvatar from "../assets/images/userAvatar.png";
import Image from "next/image"
export default function recentActivity() {
  return (
    <div className="w-full left-side-wh flex flex-wrap">
      <div className="w-full flex flex-wrap justify-between items-center h-24 gap">
        <span className="float-left f-16">Recent activity</span>
        <span className="float-right f-12">Last 120 days</span>
      </div>
      <div className="flex flex-wrap mb-14">
        <div className="w-full flex">
            <div className="t-space"></div>
            <div className="month-w f-12">Apr</div>
            <div className="month-w f-12">May</div>
            <div className="month-w f-12">Jun</div>
            <div className="month-w f-12">Jul</div>
        </div>
        <div className="w-full flex f-12 h-14 ">
            <span>Sun</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Mon</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Tue</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Wed</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Thu</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Fri</span>
            <div></div>
        </div>
        <div className="w-full flex f-12 h-14">
            <span>Sat</span>
            <div></div>
        </div>
      </div>
      <div className="game-history flex flex-wrap">
        <div className="g-count-hour f-12">
          <div>
            <span className="mr-4">1442</span><span className="light-down">games play</span>
          </div>
          <div>
            <span className="mr-4">511</span><span className="light-down">hours played</span>
          </div>
        </div>
        <div className="ml-12 mr-12 virtual-40"></div>
        <div className="f-12 flex flex-wrap play-result">
          <div className="w-full flex flex-wrap items-center">
            <span className="width-47 mr-2">bad day</span>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <span className="ml-2">good day</span>
          </div>
          <div className="w-full flex flex-wrap items-center">
            <span className="width-47 mr-2">1 game</span>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <div className="result-box mr-2 ml-2"></div>
            <span className="ml-2">7+ game</span>
          </div>
        </div>
      </div>
    </div>
  );
};
