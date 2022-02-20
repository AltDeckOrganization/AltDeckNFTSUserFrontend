//SEO
import SEO from "../components/seo/SEO";

//components
import StatsTable from "../components/statsTable";

//dummydata
import { statsData } from "../components/data/statsData";

const Stats = () => {
  return (
    <div 
    className="xl:w-[1156px] mx-auto lg:w-[900px] w-full">
      <SEO />
      <div
        className="min-h-[100vh] py-[100px]"
      >
        <h1 className="text-center capitalize font-semibold text-[30px]">top collections on solana</h1>
        <div
          className="border border-[#50C9C3] pb-6 rounded-2xl mt-20 px-4"
        >
          <StatsTable 
            rows={statsData}
          />
        </div>
      </div>
    </div>
  )
}

export default Stats;
