"use client";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import React from "react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton
        // Todo add menu items for Studio and User Profile
        />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircleIcon />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
