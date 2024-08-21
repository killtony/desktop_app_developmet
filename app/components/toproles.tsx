"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import month1 from "../assets/images/month1.png"
import month2 from "../assets/images/month2.png"
import month3 from "../assets/images/month3.png"
import month4 from "../assets/images/month4.png"
import month5 from "../assets/images/month5.png"
import Image from "next/image"

export default function topRoles() {
  const [month11, setMonth11]=useState(30)
  const [month12, setMonth12]=useState(40)
  const [month21, setMonth21]=useState(50)
  const [month22, setMonth22]=useState(55)
  const [month31, setMonth31]=useState(76)
  const [month32, setMonth32]=useState(44)
  const [month41, setMonth41]=useState(66)
  const [month42, setMonth42]=useState(88)
  const [month51, setMonth51]=useState(66)
  const [month52, setMonth52]=useState(88)

  return (
    <div className="w-full left-side-wh">
      <div className="mb-16">
        <span className="f-16">Top Roles</span>

      </div>
      <div className="w-full chart-88 mb-16 flex flex-wrap justify-around">
        <div className="flex flex-wrap w-45 h-88">
          <div className="w-320 flex flex-wrap justify-center items-end">
            <div className=" month11" style={{height:month11}}></div>
            <div className="month12" style={{height:month12}}></div>
          </div>
        </div>
        <div className="flex flex-wrap w-45 h-88">
        <div className="w-320 flex flex-wrap justify-center items-end">
            <div className=" month11" style={{height:month21}}></div>
            <div className="month12" style={{height:month22}}></div>
          </div>
        </div>
        <div className="flex flex-wrap w-45 h-88">
        <div className="w-320 flex flex-wrap justify-center items-end">
            <div className=" month11" style={{height:month31}}></div>
            <div className="month12" style={{height:month32}}></div>
          </div>
        </div>
        <div className="flex flex-wrap w-45 h-88">
        <div className="w-320 flex flex-wrap justify-center items-end">
            <div className=" month11" style={{height:month41}}></div>
            <div className="month12" style={{height:month42}}></div>
          </div>
        </div>
        <div className="flex flex-wrap w-45 h-88">
        <div className="w-320 flex flex-wrap justify-center items-end">
            <div className=" month11" style={{height:month51}}></div>
            <div className="month12" style={{height:month52}}></div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around month-img">
        <div className="flex flex-wrap w-45">

          <div className="w-full flex flex-wrap justify-center items-center mb-4">
            <Image
              src={month1}
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
              src={month2}
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
              src={month3}
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
              src={month4}
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
              src={month5}
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
