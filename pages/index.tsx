import Header from "../components/Header";
import Balance from "../components/Balance";

import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[320px] h-[540px] bg-gray-800 text-white overflow-hidden rounded-md p-4 border-8 border-b-[32px] border-black">
        <Header name="Cauê" imageURL="https://avatars.githubusercontent.com/u/43036856?v=4" />
        <Balance />
      </div>
    </div>
  );
};

export default Home;
