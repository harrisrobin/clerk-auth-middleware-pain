"use client"

import { useRouter } from "next/navigation"
import { UploadDropzone } from "@/components/uploadthing"
import { cn } from "@/lib/utils"
import { useClerk } from "@clerk/nextjs"

export function HeroDropzone() {
  const { redirectToSignIn } = useClerk()
  const router = useRouter()
  return (
    <div>
      <UploadDropzone
        config={{
          mode: "auto",
        }}
        className={cn(
          "ut-label:text-3xl ut-label:font-semibold ut-label:text-slate-50"
        )}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res)
          const uploadedFile = res[0]
          router.push(`/stories/${uploadedFile.key}?url=${uploadedFile.url}`)
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log("Error: ", error)
          console.log("Error Message", error.message)
          redirectToSignIn()
        }}
      />
    </div>
  )
}
