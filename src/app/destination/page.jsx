import OurTeam from "../../../components/section/ourteam/OurTeam";
import Banner from "./_components/Banner/Banner";
import Breadcrumb from "./_components/Breadcrumb/Breadcrumb";
import Discovery from "./_components/Discovery/Discovery";
import ExploreTrip from "./_components/ExploreTrip/ExploreTrip";

export const metadata = {
  title: "Destination - Hong Hao Travel",
  description: "Generated by create next app",
};

export default async function DestinationPage({ searchParams }) {
  const _searchParams = await searchParams;

  return (
    <main id="all-destinations" className="bg-white">
      <Banner />
      <Breadcrumb />
      <Discovery searchParams={_searchParams} />
      <OurTeam secondary />
      <ExploreTrip />
    </main>
  );
}
