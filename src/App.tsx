import { ChartWidget } from "./widgets/ChartWidget";

export function App() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100dvh",
        display: "flex",
        rowGap: "50px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChartWidget />
    </main>
  );
}
