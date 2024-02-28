import { useContext } from "react";
import { ChartContext } from "../widgets/ChartWidget";

export const useChartContext = () => {
  return {
    ...useContext(ChartContext),
  };
};
