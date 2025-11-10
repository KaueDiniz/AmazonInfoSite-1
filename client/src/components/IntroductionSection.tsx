import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, Zap } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Desafio do Desmatamento no Brasil
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O Brasil enfrenta pressões crescentes sobre seus biomas. Apesar das reduções recentes, 
            o monitoramento eficaz continua essencial para proteger nossas florestas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Em 2024, o Brasil registrou 6.288 km² de desmatamento na Amazônia Legal, 
              uma redução de 30,6% em relação a 2023. O Cerrado continua como o bioma mais 
              pressionado, com 652.197 hectares desmatados.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Mudanças de uso da terra responderam por 46% das emissões brutas de gases de 
              efeito estufa do Brasil em 2023. O monitoramento rápido e eficiente é fundamental 
              para reduzir o desmatamento ilegal e suas consequências climáticas.
            </p>
          </div>
          
          <div className="grid gap-4">
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">30,6% de Redução</h3>
                  <p className="text-muted-foreground">Queda no desmatamento da Amazônia em 2024</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-destructive/10">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">46% das Emissões</h3>
                  <p className="text-muted-foreground">Mudanças de uso da terra nas emissões brasileiras</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">Resposta Rápida</h3>
                  <p className="text-muted-foreground">Alertas em tempo quase real para fiscalização eficaz</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
