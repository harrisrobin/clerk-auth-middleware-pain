import { Header } from "@/components/header"
import { LinkLinearOauth } from "@/components/link-linear-oauth"
import { StoriesList } from "@/components/stories-list"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OauthStrategies } from "@/utils/types"
import { currentUser } from "@clerk/nextjs"
import Image from "next/image"

export default async function Stories() {
  const user = await currentUser()

  const hasLinearAuth = user?.externalAccounts.some(
    (extAct) => extAct.provider === OauthStrategies.LINEAR
  )

  return (
    <main className={cn("bg-black")}>
      <Header />
      <div className={cn("flex flex-col items-center w-full pt-8")}>
        <div className={cn("max-w-3xl w-full relative")}>
          <div>
            <h1
              className={cn(
                "text-4xl font-bold tracking-tight text-white sm:text-6xl text-center"
              )}
            >
              Generated Stories
            </h1>
          </div>
          <div className={cn("my-4 relative h-72")}>
            <Image
              fill={true}
              alt="User uploaded image"
              src="https://utfs.io/f/35870ba6-681e-4f47-bc54-0a20ff8a3f57-8yrbcy.png"
            />
          </div>
          <StoriesList />

          <div>
            {hasLinearAuth ? (
              <Button size="lg" variant="default">
                Import into Linear
              </Button>
            ) : (
              <LinkLinearOauth />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
