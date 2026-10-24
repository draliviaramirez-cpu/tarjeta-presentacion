import ListaTarjetas from "./componentes/listatarjetas";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "30px",
        }}
      >
        Tarjetas de presentación
      </h1>
      <ListaTarjetas />
    </div>
  );
}
