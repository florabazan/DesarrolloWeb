import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Step1Paciente from "./components/Step1Paciente";
import Step2Tutor from "./components/Step2Tutor";
import Step3Medica from "./components/Step3Medica";
import Step4Clinica from "./components/Step4Clinica";
import Step5Confirmacion from "./components/Step5Confirmacion";
import ComprobantesPage from "./pages/ComprobantesPage";
import "./App.css";

function EntrevistaForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div
      className="form-container"
      style={{
        backgroundColor: "#fdf6fb",
        padding: "40px 30px",
        borderRadius: "25px",
        border: "3px solid #e5cff7",
        width: "480px",
        margin: "50px auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        fontFamily: "Arial, sans-serif",
        color: "#000",
        boxSizing: "border-box,"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#4b2e83", marginBottom: "25px" }}>
        Entrevista Tika
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
          position: "relative",
        }}
      >
        <div
          style={{
            content: "",
            position: "absolute",
            top: "50%",
            left: "10%",
            right: "10%",
            height: "4px",
            backgroundColor: "#e0d6f7",
            transform: "translateY(-50%)",
          }}
        ></div>

        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            style={{
              backgroundColor: step >= num ? "#d79ce7" : "#e0d6f7",
              zIndex: 1,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              textAlign: "center",
              lineHeight: "30px",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {num}
          </div>
        ))}
      </div>

      {step === 1 && <Step1Paciente nextStep={nextStep} />}
      {step === 2 && <Step2Tutor nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3Medica nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4Clinica nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Step5Confirmacion prevStep={prevStep} />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{ margin: "10px" }}>🏠 Entrevista</Link>
        <Link to="/comprobantes" style={{ margin: "10px" }}>🧾 Comprobantes</Link>
      </div>
      <Routes>
        <Route path="/" element={<EntrevistaForm />} />
        <Route path="/comprobantes" element={<ComprobantesPage />} />
      </Routes>
    </Router>
  );
}