"use client";

import { useEffect, useState } from "react";
import type { interfacetarjeta } from "../modelos/interfacetarjeta";
import Tarjeta from "./tarjeta";

export default function ListaTarjetas() {
  const [tarjetapersonas, settarjetaPersonas] = useState<interfacetarjeta[]>([]);

  useEffect(() => {
    settarjetaPersonas([
      {
        id: 1,
        nombre: "Fernando Barrera",
        ocupacion: "Consultor",
        pais: "Honduras",
      },
      {
        id: 2,
        nombre: "Maria Torres",
        ocupacion: "Maestra",
        pais: "Costa Rica",
      },
      {
        id: 3,
        nombre: "Andrea Bochelli",
        ocupacion: "Cantante",
        pais: "España",
      },
      {
        id: 4,
        nombre: "Marlon Tejeda",
        ocupacion: "Ingeniero",
        pais: "Canada",
      },
      {
        id: 5,
        nombre: "Alba Nuñez",
        ocupacion: "Periodista",
        pais: "Costa de marfil",
      },
    ]);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: "20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {tarjetapersonas.map((persona: interfacetarjeta) => (
        <Tarjeta
          key={persona.id}
          id={persona.id}
          nombre={persona.nombre}
          ocupacion={persona.ocupacion}
          pais={persona.pais}
        />
      ))}
    </div>
  );
}