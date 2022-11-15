import React from "react";
import CountUp from "react-countup";

const SummaryCountUp = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      <div>
        <h1 className="text-sm font-medium">Founded in</h1>
        <h1 className=" text-3xl text-center font-montserrat font-bold text-slate-800 mt-1 p-1">
          <CountUp start={1950} end={1998} />
        </h1>
      </div>
      <div>
        <h1>Preaching Gospel</h1>
        <h1 className="text-3xl text-center font-montserrat font-bold text-slate-800 mt-1 p-1">
          <CountUp start={0} end={15} suffix=" +" />
        </h1>
      </div>
      <div>
        <h1>With a Team </h1>
        <h1 className="text-3xl text-center font-montserrat font-bold text-slate-800 mt-1 p-1">
          <CountUp start={0} end={10} suffix=" +" />
        </h1>
      </div>
    </div>
  );
};

export default SummaryCountUp;
