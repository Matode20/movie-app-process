import { BsTwitterX } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className=" bg-slate-900 text-white flex justify-between mt-10  items-center">
      <div className="items-center justify-start flex flex-col gap-2 ml-[20rem]">
        <p className=""> © MovieApp. All Rights Reserved </p>
        <div className="flex gap-3">
          <BsTwitterX />
          <PiTelegramLogo />
          <RiDiscordLine />
        </div>
      </div>
      <div className="flex gap-24 p-7 mr-28 mt-10">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-2xl font-bold">Help</h1>
          <button className="">Contact</button>
          <button>FAQ</button>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-2xl font-bold">Links</h1>
          <button>Home</button>
          <button>Trending</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
