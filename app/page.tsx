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
        // <div>
        //   <button
        //     className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        //     onClick={() => {
        //       signOut({ redirect: false }).then(() => {
        //         router.push("/");
        //       });
        //     }}
        //   >
        //     Sign Out
        //   </button>
        //   <Main />
        // </div>
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
      {showSession()}
    </main>
  );
}
