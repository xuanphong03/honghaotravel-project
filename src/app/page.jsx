import AboutUs from "./_components/sections/IntroContainer/AboutUs";
import Banner from "./_components/sections/Banner/Banner";
import BestTrips from "./_components/sections/BestTrips";
import Feedback from "./_components/sections/Feedback/Feedback";
import Introduction from "./_components/sections/IntroContainer/Introduction";
import OurTour from "./_components/sections/IntroContainer/OurTour";
import Welcome from "./_components/sections/IntroContainer/Welcome";
import Moment from "./_components/sections/Moment/Moment";
import OurTeam from "../../components/section/ourteam/OurTeam";
import Weather from "./_components/sections/Weather/Weather";

export default function Home() {
  return (
    <main id="home">
      <Banner />
      <Introduction>
        <AboutUs />
        <OurTour />
        <Welcome />
      </Introduction>
      <BestTrips />
      <Moment />
      <Feedback />
      <OurTeam primary />
      <Weather />
    </main>
  );
}
