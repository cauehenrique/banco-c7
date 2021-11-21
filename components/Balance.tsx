import { EyeIcon, EyeOffIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";

const Balance: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl mt-6">
      <div className="bg-gray-700 flex justify-between p-4">
        <h1 className="font-semibold text-2xl flex items-center">
          <Price value="R$ 12,00" visible={visible} />
        </h1>
        <button
          onClick={() => setVisible((prev) => !prev)}
          className="bg-gray-600 hover:bg-gray-500 transition-colors p-2 rounded-full"
        >
          {visible ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
        </button>
      </div>
      <button className="bg-gray-600 hover:bg-gray-500 transition-colors w-full uppercase font-semibold flex justify-between items-center p-4 tracking-wider">
        <span>Ver extrato</span>
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

interface IPrice {
  value: string;
  visible: boolean;
}

const Price: FC<IPrice> = ({ visible, value }) =>
  visible ? <span>{value}</span> : <div className="w-28 h-8 bg-gray-600 rounded-md animate-pulse" />;

export default Balance;
