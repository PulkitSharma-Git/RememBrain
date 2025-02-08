import { ReactElement } from "react";

interface SideBarItemInterface {
  icon: ReactElement;
  text: string;
}

export const SideBarItem = ({ icon, text }: SideBarItemInterface) => {
  return (
    <div className="flex items-center p-1 text-gray-500 hover:bg-purple-100 max-w-52 rounded transition-all">
      <div className="pr-4">{icon}</div>

      <div>{text}</div>
    </div>
  );
};
