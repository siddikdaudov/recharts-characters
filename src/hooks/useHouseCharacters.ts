import { useEffect, useRef } from "react";
import { useChartContext } from "./useChartContext";
import { ENDPOINT_GET_HOUSE_CHARACTERS } from "../constants/api";
import { Houses } from "../types/houses";

const MAX_CALLS = 3;

export const useHouseCharacters = () => {
  const { setData, setError, setLoading } = useChartContext();
  const attempt = useRef(1);

  useEffect(() => {
    const fetchHouseCharacters = async () => {
      try {
        setLoading(true);

        const responses = await Promise.all(
          Object.keys(Houses).map((key) => fetch(`${ENDPOINT_GET_HOUSE_CHARACTERS}/${key}`))
        );
        const data = await Promise.all(responses.map((response) => response.json()));
        const characters = data.reduce((acc, item, index) => ({ ...acc, [Object.values(Houses)[index]]: item }), {});
        setData(characters);
      } catch {
        attempt.current++;
        if (attempt.current <= MAX_CALLS) {
          fetchHouseCharacters();
        }
        setError("Не удалось получить данные");
      } finally {
        setLoading(false);
      }
    };

    fetchHouseCharacters();
  }, []);
};
