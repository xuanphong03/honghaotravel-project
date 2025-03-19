import CloudFly from '../CloudFly/CloudFly';
import WeatherSlide from './WeatherSlide';
import './Weather.scss';

export default function Weather() {
  return (
    <section id="weather" className="relative z-10 bg-white pb-[2rem]">
      <div className="absolute top-0 right-0 left-0 -translate-y-[100%] overflow-hidden">
        <CloudFly />
      </div>
      <div className="relative z-20 mx-auto w-[90rem] shrink-0 max-md:w-full max-md:px-[1rem]">
        <WeatherSlide />
      </div>
    </section>
  );
}
