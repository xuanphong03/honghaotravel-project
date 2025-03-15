import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TourBookingForm from "../form/TourBookingForm";
import { DialogDescription } from "@radix-ui/react-dialog";

export function BookNowButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0 border-none animate-bounce !duration-1000 cursor-pointer bg-orange-normal hover:bg-orange-normal__hover transition-all duration-300 size-[3.125rem] rounded-full shrink-0">
          <p className="text-white text-center text-[0.625rem] font-black leading-[1.3] tracking-[0.03125rem] uppercase">
            Book <br /> now
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby="" className="md:!max-w-fit">
        <DialogHeader className="hidden">
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <TourBookingForm />
      </DialogContent>
    </Dialog>
  );
}
