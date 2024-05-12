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
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
} from "recharts";

export default function PerformanceGraph({ year }) {
  const [graphValue, setGraphValue] = useState();

  // const data = [
  //   {
  //     name: "Sem 1",
  //     value: 7.56,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Sem 2",
  //     value: 8.43,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Sem 3",
  //     value: 8.23,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Sem 4",
  //     value: 8.6,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Sem 5",
  //     value: 7.8,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Sem 6",
  //     value: 8.4,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Sem 7",
  //     value: 8.7,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  //   {
  //     name: "Sem 8",
  //     value: 8.4,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  const class_mapping = {
    FY: 2,
    SY: 4,
    TY: 6,
    LY: 8,
  };

  const getRandValue = useCallback((min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  }, []);

  const computeRandomData = useCallback((min, max, semister) => {
    const data = [];
    let sem_limit = class_mapping[semister];
    let sem_count = 1;
    for (; sem_count <= sem_limit; sem_count++) {
      data.push({ name: `Sem ${sem_count}`, value: getRandValue(min, max) });
    }
    while (sem_count <= 8) {
      data.push({ name: "Sem ${sem_count++}", value: null });
    }

    return data;
  }, []);

  useEffect(() => {
    setGraphValue(computeRandomData(7, 10, year));
  }, []);
  const CustomTooltip = useCallback(
    ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div
            className="custom-tooltip"
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <p>{`Semester: ${label}`}</p>
            <p>{`SGPA: ${payload[0].value}`}</p>
          </div>
        );
      }

      return null;
    },
    [graphValue]
  );

  // const { minValue, maxValue } = useMemo(() => {
  //   if ((graphValue ? graphValue : 1) === 0) {
  //     return { minDate: 7, maxDate: 10 };
  //   }

  //   if (graphValue) {
  //     const value = graphValue.map((d) => d.value);
  //     return {
  //       minValue: Math.min(...value),
  //       maxValue: Math.max(...value),
  //     };
  //   }
  // }, [graphValue]);

  const [timeRange, setTimeRange] = useState([7, 10]);

  // useEffect(() => {
  //   if (minValue && maxValue) {
  //     setTimeRange([minValue, maxValue]);
  //   }
  // }, [minValue, maxValue]);

  console.log(timeRange);

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={graphValue}>
          <CartesianGrid strokeDasharray="3 3" opacity="1" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fontWeight: "bold" }}
            //padding={{ left: 50 }}
            axisLine={false} // Hides the axis line
            tickLine={false} // Optional: hides the tick lines if you want
          />
          <YAxis
            tick={{ fontSize: 12, fontWeight: "bold" }}
            domain={[7, "auto"]}
            axisLine={false} // Hides the axis line
            tickLine={false}
            //padding={{ bottom: 30 }}
            // interval={1}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#0e7490"
            dot={true}
            activeDot={{ r: 4 }}
            fill="#0e7490"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
