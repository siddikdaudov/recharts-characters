import { useState, createContext } from "react";
import { Filters } from "../components/Filters";
import { Chart } from "../components/Chart";
import { THousesCharacters } from "../types/houses";
import { TChartContext } from "../types/chartContext";

export const ChartContext = createContext<TChartContext>({
  data: { Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] },
  setData: () => ({ Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] }),
  error: "",
  setError: () => "",
  isLoading: false,
  setLoading: () => false,
  isFiltered: false,
  setFiltered: () => false,
  filteredData: { Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] },
  setFilteredData: () => ({ Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] }),
});

export function ChartWidget() {
  const [data, setData] = useState<THousesCharacters>({ Gryffindor: [], Hufflepuff: [], Ravenclaw: [], Slytherin: [] });
  const [filteredData, setFilteredData] = useState<THousesCharacters>(data);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isFiltered, setFiltered] = useState(false);

  return (
    <ChartContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        isLoading,
        setLoading,
        filteredData,
        setFilteredData,
        isFiltered,
        setFiltered,
      }}
    >
      <Filters />
      <Chart />
    </ChartContext.Provider>
  );
}
