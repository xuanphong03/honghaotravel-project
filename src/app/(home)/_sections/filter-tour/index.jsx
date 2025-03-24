'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { QUICK_TOUR_BOOKING_FORM } from '@/constants/schema';
import { useEffect, useState } from 'react';
import TourData from '@/app/services/tour.json';
import { v4 as uuidv4 } from 'uuid';
import TourBookingForm from '@/app/_components/common/form/TourBookingForm';
import ComboboxField from '@/app/_components/form-controls/ComboboxField';
import NumberField from '@/app/_components/form-controls/NumberField';

export default function FilterTour() {
  const form = useForm({
    resolver: zodResolver(QUICK_TOUR_BOOKING_FORM),
    defaultValues: {
      tourByDay: '',
      tourByType: '',
      selfDriving: 0,
      localDriving: 0,
    },
  });
  const { setValue } = form;

  const [tourData, setTourData] = useState({
    typeTours: [],
    durationTours: [],
  });

  const [initialFormData, setInitialFormData] = useState(null);

  const handleSubmitForm = (data) => {
    setInitialFormData(data);
  };

  useEffect(() => {
    const durationTours = TourData.durationTours.map(({ duration }) => ({
      id: uuidv4(),
      value: duration,
    }));
    const typeOfTours = TourData.typeOfTours.map(({ type }) => ({
      id: uuidv4(),
      value: type,
    }));
    setTourData({
      typeTours: typeOfTours,
      durationTours: durationTours,
    });
    setValue('tourByType', typeOfTours[0].value);
    setValue('tourByDay', durationTours[0].value);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="hidden lg:block"
      >
        <div className="inline-flex items-center rounded-[0.75rem] bg-white py-[0.75rem] pr-[0.75rem] pl-[2rem]">
          <div className="mr-[1.5rem] min-w-[8.75rem] border-r border-solid border-gray-200 pr-[1.5rem]">
            <ComboboxField
              label="Days"
              name="tourByDay"
              control={form.control}
              options={tourData.durationTours}
              placeholder="Select tour by day"
            />
          </div>
          <div className="mr-[1.5rem] min-w-[8.75rem] border-r border-solid border-gray-200 pr-[1.5rem]">
            <ComboboxField
              name="tourByType"
              label="Type of tour"
              control={form.control}
              options={tourData.typeTours}
              placeholder="Select tour by type"
            />
          </div>
          <div className="mr-[1.5rem] min-w-[8.75rem] border-r border-solid border-gray-200 pr-[1.5rem]">
            <NumberField
              unit="Pax"
              name="selfDriving"
              label="Self driving"
              control={form.control}
            />
          </div>
          <div className="mr-[1.5rem] min-w-[8.75rem] border-r border-solid border-gray-200 pr-[1.5rem]">
            <NumberField
              unit="Pax"
              name="localDriving"
              label="Local driving"
              control={form.control}
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="submit"
                className="bg-orange-normal flex cursor-pointer flex-col items-center rounded-[0.5rem] px-[1.5rem] py-[0.75rem] text-[0.875rem] font-bold tracking-[0.00875rem] whitespace-nowrap text-white uppercase"
              >
                Customize <br />
                tour
              </button>
            </DialogTrigger>

            <DialogContent className="!max-w-fit bg-white px-[1.5rem] py-[1.5rem]">
              <DialogHeader className="hidden">
                <DialogTitle className="hidden"></DialogTitle>
                <DialogDescription className="hidden"></DialogDescription>
              </DialogHeader>
              <TourBookingForm defaultValues={initialFormData} />
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </Form>
  );
}
