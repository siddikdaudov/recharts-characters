import { useState } from "react";
import { Input } from "./Input";
import { useChartContext } from "../hooks/useChartContext";

const convertToLocaleDate = (date: string) => {
  return date.split("-").reverse().join("-");
};

export function Filters() {
  const { isFiltered, setFiltered, data, setFilteredData } = useChartContext();

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const handleFilter = () => {
    if (!dateStart || !dateEnd) return;

    setFiltered(true);

    const filtered = Object.entries(data).map((arrays) =>
      arrays[1].filter((item) => {
        if (item.dateOfBirth) {
          return (
            new Date(dateStart) <= new Date(convertToLocaleDate(`${item.dateOfBirth}`)) &&
            new Date(dateEnd) >= new Date(convertToLocaleDate(`${item.dateOfBirth}`))
          );
        }
        return false;
      })
    );

    setFilteredData({
      Gryffindor: filtered[0],
      Hufflepuff: filtered[1],
      Ravenclaw: filtered[2],
      Slytherin: filtered[3],
    });
  };

  const handleRemoveFilter = () => {
    setFiltered(false);
    setDateStart("");
    setDateEnd("");
  };

  return (
    <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
      <p>с</p>
      <Input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} max={dateEnd} />
      <p>по</p>
      <Input
        type="date"
        value={dateEnd}
        onChange={(e) => setDateEnd(e.target.value)}
        min={dateStart}
        disabled={!dateStart}
      />
      <button
        style={{ all: "unset", border: "1px solid gray", padding: "11px 20px", cursor: "pointer" }}
        onClick={handleFilter}
      >
        Фильтровать
      </button>
      {isFiltered && (
        <button
          style={{ all: "unset", border: "1px solid gray", padding: "11px 20px", cursor: "pointer" }}
          onClick={handleRemoveFilter}
        >
          Убрать фильтр
        </button>
      )}
    </div>
  );
}
