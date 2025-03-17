import {
  Dialog,
  DialogClose,
  DialogContentCustom,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X } from "lucide-react"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
              <div className="rounded-2xl h-[26.69638rem] relative overflow-hidden flex justify-center items-center cursor-pointer">
                  <div className="yt-click relative z-10 border-[1px] border-solid rounded-full p-4 border-s-greyscaletext-0 flex justify-center items-center hover:bg-orange-normal hover:scale-90 duration-300 ease-in-out ">
                      <svg className="size-[1.5rem] z-[51] " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19.5 10.6603C20.1667 11.0452 20.1667 12.0074 19.5 12.3923L6 20.1865C5.33333 20.5714 4.5 20.0903 4.5 19.3205L4.5 3.73205C4.5 2.96225 5.33333 2.48112 6 2.86602L19.5 10.6603Z" fill="white"></path></svg>
                  </div>
                  <Image src={"/images/alltour/banner.jpeg"} alt="banner" fill className='object-cover z-0'/>
        </div>
      </DialogTrigger>
      <DialogContentCustom className="sm:max-w-[82rem] !bg-transparent !border-none">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          
        </DialogHeader>
       <iframe className="w-full !h-[40.875rem] rounded-3xl" src="https://www.youtube.com/embed/Y1ezkq1RWkg" title="Hà Giang Ơi - Quách Beem (OFFICIAL MV 4K) || Sự trở lại của siêu phẩm hát tặng Hà Giang!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <DialogClose asChild>
            <Button type="button" variant="secondary" className={"!w-[3.25rem] !h-[3.25rem] bg-gray-400 rounded-full absolute -right-12 top-10"}>
              <X className="w-6 h-6"/>
            </Button>
          </DialogClose>
      </DialogContentCustom>
    </Dialog>
  )
}
