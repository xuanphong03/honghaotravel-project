import CloudFly from "../CloudFly/CloudFly";
import WeatherSlide from "./WeatherSlide";
import "./Weather.css";
// import required modules
export default function Weather() {
  return (
    <section id="weather" className="relative z-10 bg-white pb-[2rem]">
      <div className="absolute top-0 left-0 right-0 -translate-y-[100%] overflow-hidden">
        <CloudFly />
      </div>
      <div className="relative max-md:w-full max-md:px-[1rem] w-[90rem] mx-auto shrink-0 z-20">
        <WeatherSlide />
      </div>
    </section>
  );
}
