"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, handleShow] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.addEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header className={`flex top-0 p-5 md:px-12 px-6 h-20 z-20 transition-all ease-in duration-500 ${show && "bg-[#111]"}`}>
      <div className="flex justify-between">
        <Link href={"/"}>
          <h1 className="cursor-pointer text-3xl font-bold uppercase text-[#E50914]">
            Movie
          </h1>
        </Link>
        <img
          className="cursor-pointer fixed right-5 size-10"
          src=""
          alt="User Avatar"
        />
      </div>
    </header>
  );
}
