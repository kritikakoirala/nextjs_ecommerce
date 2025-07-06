import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { APP_NAME } from "@/lib/constants"
import { SelectTrigger } from "@radix-ui/react-select"
import { SearchIcon } from "lucide-react"


const categories = ["all", "women", "men", "children "]

export default function Search() {
  return (
    <>
      <form action="/search" className="flex items-stretch h-10">
        <Select name="category">

          <SelectTrigger className='w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r  rounded-r-none rounded-l-md rtl:rounded-r-md rtl:rounded-l-none px-3 cursor-pointer'>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent position="popper">
            {
              categories?.length > 0 &&

              categories?.map(cat => {
                return (
                  <SelectItem value={cat} > {cat}</SelectItem>

                )
              })
            }

          </SelectContent>
        </Select>

        <Input className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
          name="query" type="search"
          placeholder={`Search site ${APP_NAME}`}
        />

        <button
          type='submit'
          className='bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2 '
        >        <SearchIcon className='w-6 h-6' />
        </button>
      </form >
    </>
  )
}
