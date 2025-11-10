import { Card } from "@/components/ui/card";
import { Download, Filter, Activity, Grid, FileJson, Share2 } from "lucide-react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Aquisição de Dados",
    description: "Consulta a STAC APIs para obter imagens Sentinel-2 L2A em janelas temporais T0 e T1, com seleção automática por menor cobertura de nuvens.",
  },
  {
    icon: Filter,
    number: "02",
    title: "Pré-processamento",
    description: "Aplica correções atmosféricas, máscara de nuvens e sombras usando SCL (Scene Classification Layer) e recorte por área de interesse.",
  },
  {
    icon: Activity,
    number: "03",
    title: "Cálculo de Índices",
    description: "Calcula NDVI para T0 e T1, gerando ΔNDVI (diferença temporal). Para detecção de queimadas, inclui ΔNBR usando bandas B08 e B12.",
  },
  {
    icon: Grid,
    number: "04",
    title: "Detecção e Filtragem",
    description: "Aplica limiar negativo de ΔNDVI para detectar perda de vegetação, seguido de filtros morfológicos e área mínima ≥ 0,5 hectare.",
  },
  {
    icon: FileJson,
    number: "05",
    title: "Vetorização",
    description: "Converte áreas detectadas em polígonos vetoriais com atributos (área em hectares, data, coordenadas) e exporta como GeoJSON.",
  },
  {
    icon: Share2,
    number: "06",
    title: "Publicação",
    description: "Publica alertas em webmap interativo usando Leaflet, com camadas de contexto e funcionalidade de download dos dados.",
  },
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Como Funciona
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pipeline reproduzível baseado em dados abertos e bibliotecas de código aberto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`step-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-md bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-2xl font-bold text-primary/40">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
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
