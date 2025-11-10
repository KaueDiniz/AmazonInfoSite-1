import { Card } from "@/components/ui/card";
import { Satellite, Map, Bell, Database, Cloud, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Satellite,
    title: "Imagens de Satélite",
    description: "Utiliza imagens Sentinel-2 de alta resolução para monitoramento contínuo da cobertura vegetal.",
  },
  {
    icon: Map,
    title: "Detecção de Mudanças",
    description: "Compara imagens 'antes e depois' para identificar áreas de supressão de vegetação.",
  },
  {
    icon: Bell,
    title: "Alertas Georeferenciados",
    description: "Gera alertas vetorizados em formato GeoJSON com localização precisa das ocorrências.",
  },
  {
    icon: Database,
    title: "Dados Abertos",
    description: "Integra fontes oficiais como PRODES, DETER e MapBiomas para validação cruzada.",
  },
  {
    icon: Cloud,
    title: "Processamento em Nuvem",
    description: "Utiliza STAC APIs e Cloud Optimized GeoTIFFs para processamento eficiente.",
  },
  {
    icon: CheckCircle,
    title: "Baixa Latência",
    description: "Reduz o tempo entre aquisição de imagem e triagem para menos de 48 horas.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            Nossa Solução
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Um pipeline aberto de detecção de mudanças que vetoriza áreas candidatas e 
            publica alertas em mapa, reduzindo a assimetria de informação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`feature-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-md bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
