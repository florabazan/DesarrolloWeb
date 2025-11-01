import React, { useState } from "react";
import jsPDF from "jspdf";

export default function ComprobanteForm() {
  const [form, setForm] = useState({
    paciente: "",
    concepto: "",
    monto: "",
    fecha: "",
    metodo: "",
  });

  const [comprobante, setComprobante] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComprobante(form);
    alert("✅ Comprobante generado correctamente");
  };

  const generarPDF = async () => {
    const doc = new jsPDF();

    // --- CARGAR LOGO COMO BASE64 ---
    const response = await fetch("/tikalogo.png"); // logo dentro de /public
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result;
      doc.addImage(base64data, "PNG", 80, 10, 50, 50); // centrado arriba

      // --- TÍTULO PRINCIPAL ---
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("Comprobante de Pago - TIKA", 105, 75, { align: "center" });

      // --- LÍNEA DIVISORIA ---
      doc.setDrawColor(180);
      doc.line(20, 82, 190, 82);

      // --- DETALLES DEL PAGO ---
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      let startY = 95;

      doc.text("Paciente:", 20, startY);
      doc.text(`${comprobante.paciente}`, 80, startY);

      doc.text("Concepto:", 20, startY + 10);
      doc.text(`${comprobante.concepto}`, 80, startY + 10);

      doc.text("Monto:", 20, startY + 20);
      doc.text(`$${comprobante.monto}`, 80, startY + 20);

      doc.text("Fecha:", 20, startY + 30);
      doc.text(`${comprobante.fecha}`, 80, startY + 30);

      doc.text("Método de pago:", 20, startY + 40);
      doc.text(`${comprobante.metodo}`, 80, startY + 40);

      // --- NUEVA LÍNEA DIVISORIA ---
      doc.line(20, startY + 55, 190, startY + 55);

      // --- DATOS DEL CENTRO ---
      doc.setFont("helvetica", "italic");
      doc.setFontSize(11);
      doc.text("TIKA Espacio Terapéutico", 20, startY + 70);
      doc.text("Dirección: Bolívar 142, Salta Capital", 20, startY + 78);
      doc.text("Teléfono: +54 9 (387) 582-7499", 20, startY + 86);

      // --- FRASE FINAL ---
      doc.setFont("helvetica", "italic");
      doc.setFontSize(12);
      doc.text("Gracias por su confianza. Desde el equipo de TIKA.", 105, startY + 110, { align: "center" });

      // --- GUARDAR PDF ---
      doc.save(`Comprobante_TIKA_${comprobante.paciente}.pdf`);
    };

    reader.readAsDataURL(blob);
  };

  return (
    <div
      style={{
        backgroundColor: "#fdf6fb",
        padding: "30px",
        borderRadius: "15px",
        width: "450px",
        margin: "30px auto",
        boxShadow: "0 3px 12px rgba(0, 0, 0, 0.15)",
        fontFamily: "Arial, sans-serif",
        color: "#000",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#4b2e83", marginBottom: "25px" }}>
        Emisión de Comprobante
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Paciente:</label>
        <input type="text" name="paciente" value={form.paciente} onChange={handleChange} required />

        <label>Concepto:</label>
        <input type="text" name="concepto" value={form.concepto} onChange={handleChange} required />

        <label>Monto:</label>
        <input type="number" name="monto" value={form.monto} onChange={handleChange} required />

        <label>Fecha:</label>
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />

        <label>Método de pago:</label>
        <select name="metodo" value={form.metodo} onChange={handleChange}>
          <option value="">Seleccionar</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Tarjeta">Tarjeta</option>
          <option value="Transferencia">Transferencia</option>
        </select>

        <button type="submit">Emitir Comprobante</button>
      </form>

      {comprobante && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            border: "2px solid #d79ce7",
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        >
          <h3 style={{ color: "#4b2e83" }}>Comprobante Emitido</h3>
          <p><strong>Paciente:</strong> {comprobante.paciente}</p>
          <p><strong>Concepto:</strong> {comprobante.concepto}</p>
          <p><strong>Monto:</strong> ${comprobante.monto}</p>
          <p><strong>Fecha:</strong> {comprobante.fecha}</p>
          <p><strong>Método de pago:</strong> {comprobante.metodo}</p>

          <button
            onClick={generarPDF}
            style={{
              marginTop: "10px",
              backgroundColor: "#d79ce7",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Descargar PDF
          </button>
        </div>
      )}
    </div>
  );
}