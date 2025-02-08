import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";
import { Logo } from "../../icons/Logo";

export const SideBar = () => {
  return (
    <div className="h-screen w-64 border-r border-r-purple-700 absolute fixed">
      <div className="flex p-3 items-center">
        <div className="text-purple-600">

        <Logo/>
        </div>
        <div className="text-3xl font-extrabold pl-1">RememBrain</div>
      </div>

      <div className="pl-5">
      <SideBarItem text="Twitter" icon={<TwitterIcon />} />
      <SideBarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};
