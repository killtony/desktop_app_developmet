"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Main from "./main/page"
import Login from "./login/page"
export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <Main />
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Login />
      );
    }
  };
  return (
    <main className="flex flex-col items-center justify-center">
      {/* <h1 className="text-xl pb-4">Home</h1> */}
      {showSession()}
    </main>
  );
}
