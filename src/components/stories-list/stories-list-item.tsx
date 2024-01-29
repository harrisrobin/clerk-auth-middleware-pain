import { Skeleton } from "@/components/ui/skeleton"

interface StoriesListItemProps {
  title: string
  description: string
}
export function StoriesListItem(props: StoriesListItemProps) {
  return (
    <li className="py-4">
      <div className="flex items-center gap-x-3">
        <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-white">
          {props.title}
        </h3>
      </div>
      <p className="mt-3 text-sm text-gray-500">{props.description}</p>
    </li>
  )
}

export function StoriesListItemSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
