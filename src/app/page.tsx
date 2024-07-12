"use client"
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, useOrganization, UserButton, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  // const session = useSession()
  // console.log("🚀 ~ Home ~ session:", session)
  const { organization } = useOrganization()
  organization?.id

  const getFiles = useQuery(api.file.getFiles,
    organization?.id ? { orgId: organization.id } : "skip");
  const createFile = useMutation(api.file.createFile);

  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      {
        getFiles?.map((file) => {
          return <div id={file._id}>{file.name}</div>
        })
      }

      <Button onClick={() => {
        if (!organization) return;
        createFile({
          name: "hello world",
          orgId: organization?.id
        })
      }
      }>Click Me</Button>
    </>
  )
}
