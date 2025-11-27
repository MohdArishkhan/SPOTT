"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import BarLoader from "react-spinners/BarLoader"; 

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <Image
            src="/spott.png"
            alt="SPOTT Logo"
            width={100}
            height={50}
            className="h-11 w-auto"
          />
        </Link>
        {/* searchbar */}

        {/* right buttons */}

        {/* signin-button */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
        {/* BarLoader */}
        <div className="absolute bottom-0 left-0 right-0 width-full">
          <BarLoader width="100%" color="#3665e6ff" /> 
        </div>
      </div>
    </nav>
  );
}

export default Header;
