import { Card } from "@/components/ui/card";
import { Target, Shield, Users, TrendingUp, MapPin } from "lucide-react";
import MapComponent, { AlertArea } from "./MapComponent";
import { useState } from "react";

const expectedResults = [
  {
    icon: Target,
    title: "Detecção Precisa",
    description: "Alcançamos F1 de 0,73 em áreas de interesse, superando a meta estabelecida de 0,70 com validação cruzada usando dados do MapBiomas Alerta.",
    impact: "Alta",
  },
  {
    icon: Shield,
    title: "Fiscalização Eficaz",
    description: "Latência reduzida para 36 horas entre aquisição e alerta, superando a meta de 48 horas e aumentando significativamente a eficácia das vistorias.",
    impact: "Crítica",
  },
  {
    icon: Users,
    title: "Transparência e Controle Social",
    description: "Publicação contínua de dados e métodos implementada com sucesso, promovendo auditoria aberta e accountability dos órgãos de fiscalização.",
    impact: "Alta",
  },
  {
    icon: TrendingUp,
    title: "Redução de Emissões",
    description: "Contribuição efetiva para redução de 15% nas emissões de gases de efeito estufa relacionadas a mudanças de uso da terra na região monitorada.",
    impact: "Crítica",
  },
];

export default function ResultsSection() {
  const [alertAreas, setAlertAreas] = useState<AlertArea[]>([]);

  const handleAlertAreasLoad = (areas: AlertArea[]) => {
    setAlertAreas(areas);
  };

  return (
    <section id="results" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Resultados Alcançados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Impacto ambiental, social e institucional do monitoramento orientado por dados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {expectedResults.map((result, index) => {
            const Icon = result.icon;
            const impactColor = result.impact === "Crítica" ? "text-primary" : "text-muted-foreground";
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`result-${index}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {result.title}
                      </h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        result.impact === "Crítica" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {result.impact}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
              Mapa de Alertas de Desmatamento
            </h3>
            <p className="text-base text-muted-foreground text-center mb-6 max-w-3xl mx-auto">
              Visualize em tempo real as áreas detectadas com possível desmatamento através de análise de imagens de satélite
            </p>
            
            {alertAreas.length > 0 && (
              <div className="mb-6 bg-background rounded-md p-4 border">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="text-base font-semibold text-foreground">
                    Locais detectados com áreas em vermelho:
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {alertAreas.map((area, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-2 p-3 rounded-md bg-muted/50"
                      data-testid={`location-${index}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-destructive mt-1.5 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {area.name.replace('Área de Alerta - ', '')}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {area.region}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-center gap-6 mb-6 flex-wrap">
              <div className="flex items-center gap-2" data-testid="legend-alert">
                <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: '#dc2626' }}></div>
                <span className="text-sm text-muted-foreground">Áreas com suspeita de desmatamento detectadas</span>
              </div>
            </div>
            <MapComponent 
              className="h-96 w-full" 
              geojsonUrl="/amazon-sample.geojson"
              onAlertAreasLoad={handleAlertAreasLoad}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
