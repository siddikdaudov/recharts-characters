import { FC } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, TooltipProps, YAxis, BarProps, ResponsiveContainer } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import { HOUSES_COLORS } from "../constants/colors";
import { Houses } from "../types/houses";
import { useChartContext } from "../hooks/useChartContext";
import { useHouseCharacters } from "../hooks/useHouseCharacters";

const CHART_HEIGHT = 530;

export function Chart() {
  const { error, isLoading, data, filteredData, isFiltered } = useChartContext();

  useHouseCharacters();

  if (error) return <p>{error}</p>;
  if (isLoading) return <p style={{ height: `${CHART_HEIGHT}px` }}>Загрузка...</p>;

  const stats = [
    {
      name: Houses.gryffindor,
      value: isFiltered ? filteredData.Gryffindor.length : data.Gryffindor.length,
      fill: HOUSES_COLORS.Gryffindor,
    },
    {
      name: Houses.hufflepuff,
      value: isFiltered ? filteredData.Hufflepuff.length : data.Hufflepuff.length,
      fill: HOUSES_COLORS.Hufflepuff,
    },
    {
      name: Houses.ravenclaw,
      value: isFiltered ? filteredData.Ravenclaw.length : data.Ravenclaw.length,
      fill: HOUSES_COLORS.Ravenclaw,
    },
    {
      name: Houses.slytherin,
      value: isFiltered ? filteredData.Slytherin.length : data.Slytherin.length,
      fill: HOUSES_COLORS.Slytherin,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
      <BarChart data={stats} barSize={50}>
        <CartesianGrid fill="white" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" shape={<CustomBar dataKey="value" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip: FC<TooltipProps<ValueType, NameType>> = ({ payload, active }) => {
  if (active) {
    return (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "3px",
          boxShadow:
            "0px 0px 0px 0px rgba(14, 27, 81, 0.05), 3px 14px 32px 0px rgba(14, 27, 81, 0.05), 12px 57px 59px 0px rgba(14, 27, 81, 0.04), 28px 129px 79px 0px rgba(14, 27, 81, 0.03), 50px 229px 94px 0px rgba(14, 27, 81, 0.01), 78px 358px 103px 0px rgba(14, 27, 81, 0)",
          padding: "10px",
        }}
      >
        <p>
          {payload?.[0]?.payload.name}: <span>{payload?.[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomBar: FC<BarProps> = ({ x, y, width, height, fill }) => {
  return <rect width={width} height={height} x={x} y={y} fill={fill} />;
};
