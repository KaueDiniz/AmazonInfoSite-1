import { Card } from "@/components/ui/card";
import { Target, Shield, Users, TrendingUp } from "lucide-react";
import MapComponent from "./MapComponent";

const expectedResults = [
  {
    icon: Target,
    title: "Detecção Precisa",
    description: "Meta de F1 ≥ 0,70 em áreas de interesse representativas, com validação cruzada usando dados do MapBiomas Alerta.",
    impact: "Alta",
  },
  {
    icon: Shield,
    title: "Fiscalização Eficaz",
    description: "Redução de latência entre aquisição e alerta para menos de 48 horas, aumentando a dissuasão e orientando vistorias prioritárias.",
    impact: "Crítica",
  },
  {
    icon: Users,
    title: "Transparência e Controle Social",
    description: "Publicação contínua de dados e métodos promove auditoria aberta e accountability dos órgãos de fiscalização.",
    impact: "Alta",
  },
  {
    icon: TrendingUp,
    title: "Redução de Emissões",
    description: "Contribuição para meta de desmatamento zero e redução das emissões de gases de efeito estufa relacionadas a mudanças de uso da terra.",
    impact: "Crítica",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Resultados Esperados
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
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
              Próximos Passos
            </h3>
            <MapComponent className="h-96 w-full" geojsonUrl="/amazon-sample.geojson" />
          </div>
        </Card>
      </div>
    </section>
  );
}
