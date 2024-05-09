import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceGraph() {
  const data = [
    {
      name: "Sem 1",
      value: 7.56,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sem 2",
      value: 8.43,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sem 3",
      value: 8.23,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Sem 4",
      value: 8.6,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Sem 5",
      value: 7.8,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sem 6",
      value: 8.4,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sem 7",
      value: 8.7,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sem 8",
      value: 8.4,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomTooltip = useCallback(
    ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p>{`Semester: ${label}`}</p>
            <p>{`SGPA: ${payload[0].value}`}</p>
          </div>
        );
      }

      return null;
    },
    [data]
  );

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" opacity="0.5" /> */}
          <XAxis tick={{ fontSize: 12 }} dataKey="name" />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#172554"
            dot={true}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
