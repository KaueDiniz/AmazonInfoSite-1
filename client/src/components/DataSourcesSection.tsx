import { Card } from "@/components/ui/card";
import { Database, Map as MapIcon, Globe, BarChart } from "lucide-react";

const dataSources = [
  {
    icon: Database,
    name: "PRODES",
    description: "Monitoramento anual do corte raso",
    details: "Sistema oficial do INPE para quantificação de desmatamento por bioma e estado",
  },
  {
    icon: MapIcon,
    name: "DETER",
    description: "Sistema expedito de alertas",
    details: "Alertas em tempo quase real para suporte à fiscalização e priorização territorial",
  },
  {
    icon: Globe,
    name: "MapBiomas",
    description: "Mapeamento de cobertura e uso da terra",
    details: "Plataforma independente com dados anuais e alertas de desmatamento validados",
  },
  {
    icon: BarChart,
    name: "TerraBrasilis",
    description: "Portal de dados espaciais",
    details: "Integra séries temporais, dashboards e Sala de Situação para inteligência territorial",
  },
];

export default function DataSourcesSection() {
  return (
    <section id="data-sources" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            Fontes de Dados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Integramos dados oficiais e independentes para validação cruzada e maior robustez
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataSources.map((source, index) => {
            const Icon = source.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate"
                data-testid={`data-source-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-md bg-primary/10 flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                      {source.name}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-2">
                      {source.description}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {source.details}
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
