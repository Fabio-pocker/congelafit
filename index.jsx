
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

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
    <div className="min-h-screen bg-orange-50 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-orange-600">CongelaFit</h1>
        <p className="text-lg text-gray-600 mt-2">
          Marmitas saudáveis, congeladas e cheias de sabor! 🍱❄️
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, idx) => (
          <Card key={idx} className="rounded-2xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-orange-700">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-orange-600">{product.price}</span>
                <Button className="flex gap-2">
                  <ShoppingCart size={16} /> Comprar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
