import Image from "next/image";
import { BellIcon } from "@heroicons/react/outline";

import { FC } from "react";

interface IHeader {
  name: string;
  imageURL: string;
}

const Header: FC<IHeader> = ({ name, imageURL }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="-space-y-1">
        <span className="text-gray-500 text-lg font-semibold">Boa tarde</span>
        <h1 className="font-semibold text-2xl">{name}</h1>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <BellIcon className="w-7 h-7" />
        </div>
        <Image src={imageURL} width="52" height="52" layout="fixed" className="rounded-full" />
      </div>
    </div>
  );
};

export default Header;
