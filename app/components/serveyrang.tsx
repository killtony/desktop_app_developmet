"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image"
import userAvatar from "../assets/images/userAvatar.png";
import victoryImg from "../assets/icons/Group.svg";
import midlaner from "../assets/images/midlaner.png"
import uploadImg from "../assets/icons/upload-simple.svg"
import cartDown from "../assets/icons/caret-down.svg"
import cartUp from "../assets/icons/caret-up.svg"
export default function serveyRang() {

    return (
        <div>
            <label
                htmlFor="customRange3"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
            >
                How frustrated do you feel after this game?
            </label>
            <input type="range" min="0" max="100" value="40" className="range range-primary" />
        </div>
    );
};
