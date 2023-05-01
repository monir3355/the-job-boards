import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const assignment = [
  {
    name: "Assignment-1",
    result: 60,
    randomNum: 52,
  },
  {
    name: "Assignment-2",
    result: 60,
    randomNum: 55,
  },
  {
    name: "Assignment-3",
    result: 59,
    randomNum: 35,
  },
  {
    name: "Assignment-4",
    result: 54,
    randomNum: 47,
  },
  {
    name: "Assignment-5",
    result: 55,
    randomNum: 27,
  },
  {
    name: "Assignment-6",
    result: 60,
    randomNum: 37,
  },
  {
    name: "Assignment-7",
    result: 56,
    randomNum: 20,
  },
];

export default function Statistics() {
  return (
    <div>
      <div className="bg-[#F9F9FF] pt-4 pb-14 text-3xl text-center font-semibold relative">
        Statistics
        <div className="absolute bottom-0">
          <img
            className="w-24 md:w-36"
            src="/images/All Images/Vector.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto md:px-0 px-4 py-16">
        <h3 className="pb-16 text-center font-semibold text-3xl underline">
          SameDataComposedChart
        </h3>
        <ResponsiveContainer width="100%" aspect={2}>
          <ComposedChart
            width={500}
            height={400}
            data={assignment}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="name"
              label={{
                value: "Pages",
                position: "insideBottomRight",
                offset: 0,
              }}
              scale="band"
            />
            <YAxis
              label={{ value: "Index", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="result" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="randomNum" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
