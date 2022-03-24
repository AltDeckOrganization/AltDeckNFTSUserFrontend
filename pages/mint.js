import Image from "next/image";
import React from "react";
import Crows from "../public/crows.jpg";
import Internet from "../public/internet.svg";
import Discord from "../public/discord.svg";
import Twitter from "../public/twitter.svg";
import MintCard from "../components/mint/MintCard";
import Link from "next/link";
import Mintprogress from "../components/progress/mintprogress";
import Tab from "../components/tab/mintTab";
import Countdown from "react-countdown";
import SEO from "../components/seo/SEO";

const Completionist = () => (
  <div className="text-3xl text-[#50C9C3] font-bold">MINTING COMPLETED</div>
);

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="text-[#50C9C3] text-5xl">
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
};

const Mint = () => {
  return (
    <div className="mint px-2 py-5 md:px-10 mt-20">
      <SEO />

      <div className="px-1 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap4">
          <div className="px-5 w-10/12 mx-auto">
            <Image
              src={Crows}
              alt="Crows"
              width={"500px"}
              height={400}
              layout="responsive"
              priority="true"
            />
            <div className="mt-5">
              <Mintprogress />
            </div>
          </div>
          <div className="px-5 mt-10 lg:mt-0">
            <div className="flex mb-2 justify-between items-center">
              <h3 className="text-2xl text-[#50C9C3] font-bold">Minting</h3>
              <div className="text-base text-[#808080]">
                Total items:{" "}
                <span className="font-semibold text-black">3,600</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="text-[#808080] text-sm">
                Price: <span className="text-black font-bold">0.72</span>
              </div>
              <Image src={Internet} alt="Internet" width={20} height={20} />
              <Image src={Discord} alt="Internet" width={20} height={20} />
              <Image src={Twitter} alt="Internet" width={20} height={20} />
            </div>
            <div className="text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              vitae at dictum condimentum lacus. Ac viverra orci, sit id tellus
              nullam nec sit. Elementum venenatis libero nulla vestibulum, netus
              neque. Fermentum phasellus odio gravida et sit suscipit morbi
              venenatis, nunc. Ultrices egestas augue sagittis, sed quis tortor,
              magna vel porta. Ante commodo vel.
            </div>
            <div className="my-5 md:mx-5 bg-[#50C9C3] bg-opacity-10 px-5 py-2 rounded">
              <MintCard />
              <MintCard />
            </div>
            <div className="w-full my-5">
              <Link href="/collection">
                <a>
                  <button className="w-full font-semibold bg-[#50c9c3] rounded py-3 text-white">
                    Visit Collection
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black my-20 bg-opacity-10"></div>

        {/* Contdown */}
        <div className="mt text-center">
          <Countdown date={Date.now() + 10000} renderer={renderer} />
        </div>

        <div className="h-[1px] w-full bg-black my-20 bg-opacity-10"></div>
        <div className="mt-20">
          <div className="px-5">
            <div className="text-2xl font-bold text-[#50C9C3]">Description</div>
            <p className="text-sm text-[#808080] my-5 tracking-wide leading-loose leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              neque integer bibendum massa eleifend vitae nunc aliquet bibendum.
              Amet, in pretium cursus ornare nibh bibendum. Dolor amet, id
              scelerisque gravida rutrum ultrices cras in molestie. Amet
              imperdiet id tellus morbi varius quis donec vulputate. Mattis non,
              commodo, auctor sit eget tincidunt arcu sit. Dis sem malesuada leo
              euismod faucibus. Ut nibh at in ac neque quam at. Aenean sed diam
              dolor dui. Massa, fermentum, tempus, odio in faucibus. Diam platea
              urna, lectus vitae non, sed blandit egestas vel. Ut nunc suscipit
              nec non accumsan malesuada dictum. Cras eget nisi sagittis,
              mauris, luctus et enim lacus nec. Egestas consequat amet, velit
              aliquet sed dui sodales diam quis. Consectetur gravida cras
              integer lacus. Nunc sodales vulputate morbi tempor duis ultricies
              volutpat vitae. Ut quisque ornare diam lobortis ut mattis non at.
              Vel viverra malesuada ac.
            </p>
          </div>
        </div>

        {/* Tab */}
        <div className="mt-10">
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default Mint;
