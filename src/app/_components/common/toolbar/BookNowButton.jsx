import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TourBookingForm from '../form/TourBookingForm';
import { DialogDescription } from '@radix-ui/react-dialog';

export function BookNowButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-normal hover:bg-orange-normal__hover size-[3.125rem] shrink-0 animate-bounce cursor-pointer rounded-full border-none p-0 transition-all !duration-1000 duration-300">
          <span
            data-aos="fade-up"
            data-aos-duration="500"
            className="inline-block text-center text-[0.625rem] leading-[1.3] font-black tracking-[0.03125rem] text-white uppercase"
          >
            Book <br /> now
          </span>
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
