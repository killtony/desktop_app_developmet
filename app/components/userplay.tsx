"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function userPlay() {

  return (
    <div>
        <div className="avatar"><img src="" alt=""  /></div>
        <div className="details">
            <div className="">
                <span>victory</span>
                <span>Pointer</span>
                <span>icon</span>
                <span>Pointer</span>
                <span>Ranked solo</span>
                <span>Pointer</span>
                <span>2 hours ago</span>
            </div>
            <div>
                <div>
                    <span>Tilt score</span>
                    <span>12/100</span>

                </div>
                <div>
                <span>Game</span>
                <span>21:22</span>
                </div>
                <div>
                <span>performance</span>
                <span>Great</span>
                </div>
            </div>
        </div>
    </div>
  );
};
