import React from "react";

const products = [
  {
    name: "Power Frango",
    description: "Frango grelhado, arroz integral e legumes",
    price: "R$17,00",
    image: "https://images.unsplash.com/photo-1604908177797-4c1b220d327d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Tilápia Saudável",
    description: "Filé de tilápia assado, batata-doce e espinafre",
    price: "R$20,00",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Escondidinho do Bem",
    description: "Frango com purê de abóbora e chia",
    price: "R$18,00",
    image: "https://images.unsplash.com/photo-1601050690590-0b8a9f8021b3?auto=format&fit=crop&w=600&q=80"
  }
];

export default function CongelaFit() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#EA580C", textAlign: "center" }}>CongelaFit</h1>
      <p style={{ textAlign: "center", color: "#4B5563" }}>
        Marmitas saudáveis, congeladas e cheias de sabor! 🍱❄️
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {products.map((product, idx) => (
          <div key={idx} style={{ border: "1px solid #E5E7EB", borderRadius: "16px", width: "300px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }} />
            <div style={{ padding: "16px" }}>
              <h2 style={{ fontSize: "18px", color: "#EA580C" }}>{product.name}</h2>
              <p style={{ color: "#6B7280", fontSize: "14px" }}>{product.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                <span style={{ fontWeight: "bold", color: "#EA580C" }}>{product.price}</span>
                <button style={{ backgroundColor: "#EA580C", color: "white", padding: "8px 12px", borderRadius: "8px", border: "none" }}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
