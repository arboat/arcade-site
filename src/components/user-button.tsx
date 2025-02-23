"use client"

import { UserButton as ClerkUserButton, SignInButton, useUser } from "@clerk/nextjs"
import { Skeleton } from "@/components/ui/skeleton"

export function UserButton() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <Skeleton className="h-8 w-8 rounded-full" />;
  }

  return (
    <>
      {isSignedIn ? (
        <ClerkUserButton />
      ) : (
        <SignInButton mode="modal" />
      )}
    </>
  )
}

