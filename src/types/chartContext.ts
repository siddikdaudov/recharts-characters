import { THousesCharacters } from "./houses";

export type TChartContext = {
  data: THousesCharacters;
  setData: React.Dispatch<React.SetStateAction<THousesCharacters>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isFiltered: boolean;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  filteredData: THousesCharacters;
  setFilteredData: React.Dispatch<React.SetStateAction<THousesCharacters>>;
};
