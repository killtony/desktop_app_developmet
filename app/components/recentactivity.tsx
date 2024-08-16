"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Userplay from "../components/userplay";
// import userAvatar from "../../public/userAvatar.png";
import userAvatar from "../assets/images/userAvatar.png";
import Image from "next/image"
export default function recentActivity() {
  return (
<div className="w-full left-side-wh ">
              <div className="w-full">
                <span>Recent activity</span>
                <span>Last 120 days</span>
              </div>
              <div>
                <table></table>
              </div>
              <div>
                <div>
                  <span>1442 games play</span>
                  <span>511 hours played</span>
                </div>
                <div>
                  <table>
                    chart details
                  </table>
                </div>
              </div>
          </div>
  );
};
