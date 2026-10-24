import type { interfacetarjeta } from "../modelos/interfacetarjeta.ts";

export default function Tarjeta(props: interfacetarjeta) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#374151",
        border: "1px solid #dddddd",
        borderTop: "5px solid #2563eb",
        borderRadius: "10px",
        padding: "24px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h2 style={{ fontSize: "22px", marginBottom: "16px" }}>
        {props.nombre}
      </h2>

      <p style={{ marginBottom: "10px" }}>
        <strong>Ocupación:</strong> {props.ocupacion}
      </p>

      <p>
        <strong>País:</strong> {props.pais}
      </p>
    </div>
  );
}
