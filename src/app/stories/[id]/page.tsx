import { Header } from "@/components/header"
import { StoriesList } from "@/components/stories-list"
import { cn } from "@/lib/utils"
import { currentUser } from "@clerk/nextjs"

export default async function Stories() {
  const user = await currentUser()

  return (
    <main className={cn("bg-black")}>
      <Header />
      <div className={cn("flex flex-col items-center w-full pt-8")}>
        <div className={cn("max-w-3xl w-full relative")}>
          <StoriesList />
        </div>
      </div>
    </main>
  )
}
