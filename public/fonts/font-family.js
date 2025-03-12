import localFont from "next/font/local";
export const fontTripSans = localFont({
  src: [
    {
      path: "./trip-sans-v2/trip-sans.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./trip-sans-v2/trip-sans-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./trip-sans-v2/trip-sans-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
