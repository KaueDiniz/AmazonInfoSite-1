import { Card } from "@/components/ui/card";
import { Flame, Axe, Factory, TrendingUp } from "lucide-react";

const threats = [
  {
    icon: Axe,
    title: "Desmatamento",
    description: "Aproximadamente 17% da floresta original já foi desmatada, principalmente para agricultura e pecuária. A taxa de desmatamento continua preocupante.",
    severity: "Crítico",
  },
  {
    icon: Flame,
    title: "Queimadas",
    description: "Incêndios florestais, muitos causados por ação humana, destroem milhões de hectares anualmente, liberando enormes quantidades de CO₂.",
    severity: "Crítico",
  },
  {
    icon: Factory,
    title: "Mineração Ilegal",
    description: "A extração ilegal de ouro e outros minerais contamina rios com mercúrio e destrói vastas áreas de floresta primária.",
    severity: "Alto",
  },
  {
    icon: TrendingUp,
    title: "Mudanças Climáticas",
    description: "As alterações climáticas globais afetam o equilíbrio da floresta, com períodos de seca mais intensos e frequentes.",
    severity: "Alto",
  },
];

export default function ThreatsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Desafios e Ameaças
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Amazônia enfrenta pressões sem precedentes que ameaçam sua existência e a estabilidade climática global
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {threats.map((threat, index) => {
            const Icon = threat.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`threat-${index}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-md bg-destructive/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {threat.title}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-destructive/20 text-destructive">
                        {threat.severity}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {threat.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              A Urgência da Conservação
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              A proteção da Floresta Amazônica não é apenas uma questão ambiental regional, 
              mas uma necessidade global. Sua preservação é fundamental para a estabilidade 
              climática do planeta e para a sobrevivência de milhões de espécies.
            </p>
            <p className="text-base font-medium text-foreground">
              Cientistas alertam que estamos próximos de um ponto de não retorno, 
              onde a floresta pode começar a se transformar em savana, com consequências catastróficas.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
