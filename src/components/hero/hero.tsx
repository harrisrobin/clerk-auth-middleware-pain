import { HeroDropzone } from "@/components/hero-dropzone"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <div
        className={cn(
          "mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32",
          "items-center justify-center"
        )}
      >
        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
          <HeroDropzone />
        </div>
      </div>
    </div>
  )
}
