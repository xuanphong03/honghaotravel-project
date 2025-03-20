'use client'; // Required for client-side features

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { TextareaCustom } from '@/components/ui/textarea-v2';
import { InputCustom } from '@/components/ui/input-v2';

// Define the form schema using Zod
const formSchema = z.object({
  fullname: z.string().min(2, 'Full name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export default function FormAsk() {
  // Initialize the form with react-hook-form and Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  // Handle form submission
  function onSubmit(values) {
    console.log(values); // Replace with your submission logic
    form.reset(); // Optional: reset form after submission
  }

  return (
    <div className="w-full md:mx-auto md:w-[35rem]">
      <h4 className="h4-bold h4-bold__mb !text-greyscaletext-80-main mb-6 !text-[1.5rem] md:mb-8">
        Ask a different question
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: Fullname and Phone */}
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputCustom
                      placeholder="Full Name*"
                      {...field}
                      className="border-greyscaletext-10 body2-regular__mb sub2-regular !1text-greyscaletext-40 w-full border-0 border-b-[1px] px-0 py-2 md:py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputCustom
                      placeholder="Phone *"
                      {...field}
                      className="border-greyscaletext-10 sub2-regular__mb sub2-regular !1text-greyscaletext-40 w-full border-0 border-b-[1px] px-0 py-2 md:py-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2: Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputCustom
                    placeholder="Email *"
                    {...field}
                    className="border-greyscaletext-10 sub2-regular__mb sub2-regular !1text-greyscaletext-40 w-full border-0 border-b-[1px] px-0 py-2 md:py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 3: Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextareaCustom
                    placeholder="Your Message *"
                    {...field}
                    className="border-greyscaletext-10 sub2-regular__mb sub2-regular !1text-greyscaletext-40 w-full resize-none border-0 border-b-[1px] px-0 py-2 md:py-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 4: Submit Button */}
          <Button
            type="submit"
            className="bg-orange-normal hover:bg-orange-normal__hover btn-bold__mb btn-bold !text-greyscaletext-0 w-full rounded-[0.5rem] duration-500 ease-in-out hover:cursor-pointer"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
