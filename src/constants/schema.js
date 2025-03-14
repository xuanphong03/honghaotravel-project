import { z } from "zod";

export const TOUR_BOOKING_FORM = z.object({
  tourByDay: z.string().nonempty("Please select tour by day"),
  tourByType: z.string().nonempty("Please select tour by type"),
  selfDriving: z
    .number()
    .min(0, "Please enter quantity self driving")
    .default(0),
  localDriving: z
    .number()
    .min(0, "Please enter quantity local driving")
    .default(0),
  customerName: z
    .string({ required_error: "Please enter your name" })
    .min(2, "Username must be at least 2 characters"),
  phoneNumber: z
    .string({ required_error: "Please fill out this field" })
    .nonempty("Please fill out this field")
    .regex(/^(0[2-9]|84[2-9])\d{8}$/, "Invalid format!"),
  email: z
    .string({ required_error: "Please enter your email" })
    .nonempty("Please enter your email!")
    .email("Enter the correct email format!"),
  message: z.string({ required_error: "Please enter your email" }),
  pickUpLocation: z
    .string({ required_error: "Please fill out this field" })
    .nonempty("Please fill out this field"),
  dropOffLocation: z
    .string({ required_error: "Please select drop off location" })
    .nonempty("Please select drop off location"),
  departureDate: z
    .date({ required_error: "Please fill out this field" })
    .refine((date) => date !== null, {
      message: "Please select a departure date",
    }),
  departAddress: z
    .string("Please enter depart address")
    .nonempty("Please enter depart address"),
  endDate: z.date().nullable(),
  dropOffAddress: z
    .string("Please fill out this field")
    .nonempty("Please fill out this field"),
});

export const QUICK_TOUR_BOOKING_FORM = z.object({
  tourByDay: z.string().nonempty("Please select tour by day"),
  tourByType: z.string().nonempty("Please select tour by type"),
  selfDriving: z
    .number()
    .min(0, "Please enter quantity self driving")
    .default(0),
  localDriving: z
    .number()
    .min(0, "Please enter quantity local driving")
    .default(0),
});
