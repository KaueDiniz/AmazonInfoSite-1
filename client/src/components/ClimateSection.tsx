import { Card } from "@/components/ui/card";
import { Cloud, Thermometer, Wind, Droplets } from "lucide-react";
import riverImage from "@assets/generated_images/Amazon_river_aerial_view_bea62be1.png";

const impacts = [
  {
    icon: Cloud,
    title: "Regulação do Clima",
    description: "A floresta ajuda a regular as temperaturas globais e os padrões de precipitação em todo o continente sul-americano.",
  },
  {
    icon: Thermometer,
    title: "Armazenamento de Carbono",
    description: "Armazena entre 150-200 bilhões de toneladas de carbono, essencial para mitigar as mudanças climáticas.",
  },
  {
    icon: Wind,
    title: "Produção de Oxigênio",
    description: "Produz aproximadamente 20% do oxigênio da atmosfera terrestre através da fotossíntese.",
  },
  {
    icon: Droplets,
    title: "Ciclo Hidrológico",
    description: "Os 'rios voadores' transportam umidade da Amazônia para outras regiões, influenciando as chuvas.",
  },
];

export default function ClimateSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            Importância para o Clima Global
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Amazônia é vital para a estabilidade climática do planeta
          </p>
        </div>
        
        <div className="mb-16 rounded-md overflow-hidden">
          <img 
            src={riverImage} 
            alt="Rio Amazonas visto de cima"
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`impact-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {impact.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
