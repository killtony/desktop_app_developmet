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

  const tabledata = [
    1, 2, 3, 4, 5, 6, 7,
    6, 5, 4, 3, 2, 1, 2,
    4, 5, 1, 2, 3, 4, 5,
    7, 8, 6, 5, 4, 3, 2,
    2, 3, 4, 5, 1, 2, 3,
    5, 6, 7, 8, 6, 5, 4,
    2, 1, 2, 3, 4, 5, 1,
    3, 4, 5, 6, 7, 8, 6,
    4, 3, 2, 1, 2, 3, 4,
    1, 2, 3, 4, 5, 6, 7,
    8, 3, 6, 1, 4, 3, 2,
    5, 5, 8, 6, 5, 4, 3,
    4, 5, 1, 2, 3, 4, 5,
    7, 8, 6, 5, 4, 3, 2,
    2, 3, 4, 5, 1, 2, 3,
    5, 6, 7, 8, 6, 5, 4,
    2, 1, 2, 3, 6, 1, 4,
    3, 2, 1, 2, 3, 4, 5,
  ]
  var arr = Array();
  tabledata.forEach((item, key, err) => {
    if (key % 7 == 0) {
      arr.push(item)
    }
  })
  // setSun(arr)
  console.log(arr);


  return (
    <div className="w-full left-side-wh flex flex-wrap activity">
      <div className="w-full flex flex-wrap justify-between items-center h-24 gap">
        <span className="float-left f-16 white">Recent activity</span>
        <span className="float-right f-12">Last 120 days</span>
      </div>
      <div className="flex flex-wrap mb-14">
        <div className="w-full flex mb-4">
          <div className="t-space"></div>
          <div className="month-w f-12">Apr</div>
          <div className="month-w f-12">May</div>
          <div className="month-w f-12">Jun</div>
          <div className="month-w f-12">Jul</div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Sun</span>
          <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 .back-heavy-grey {
"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Mon</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Tue</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Wed</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Thu</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Fri</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
        <div className="w-full flex f-12 h-14 items-center">
          <span className="week">Sat</span>
         <div className="flex">
            {arr.map((item) => (
              <div key={item} className="result-box mr-2 back-heavy-grey"></div>
            ))}
          </div>
        </div>
      </div>
      <div className="game-history flex flex-wrap">
        <div className="g-count-hour f-12">
          <div>
            <span className="mr-4 white">1442</span><span className="light-down">games play</span>
          </div>
          <div>
            <span className="mr-4 white">511</span><span className="light-down">hours played</span>
          </div>
        </div>
        <div className="ml-12 mr-12 virtual-40"></div>
        <div className="f-12 flex flex-wrap play-result">
          <div className="w-full flex flex-wrap items-center">
            <span className="width-47 mr-2">bad day</span>
            <div className="result-box mr-2 ml-2 back-orange"></div>
            <div className="result-box mr-2 ml-2 back-light-orange"></div>
            <div className="result-box mr-2 ml-2 back-green"></div>
            <div className="result-box mr-2 ml-2 back-heavy-green"></div>
            <span className="ml-2">good day</span>
          </div>
          <div className="w-full flex flex-wrap items-center">
            <span className="width-47 mr-2">1 game</span>
            <div className="result-box mr-2 ml-2 back-heavy-grey"></div>
            <div className="result-box mr-2 ml-2 back-light-grey"></div>
            <div className="result-box mr-2 ml-2 back-light-white"></div>
            <div className="result-box mr-2 ml-2 back-white"></div>
            <span className="ml-2">7+ game</span>
          </div>
        </div>
      </div>
    </div>
  );
};
