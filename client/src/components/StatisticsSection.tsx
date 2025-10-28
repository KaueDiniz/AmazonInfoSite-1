import { TreePine, Bird, Bug, Fish } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "16.000+",
    label: "Espécies de Árvores",
  },
  {
    icon: Bird,
    value: "1.300+",
    label: "Espécies de Aves",
  },
  {
    icon: Bug,
    value: "2,5 milhões",
    label: "Espécies de Insetos",
  },
  {
    icon: Fish,
    value: "3.000+",
    label: "Espécies de Peixes",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            A Amazônia em Números
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-md bg-card hover-elevate"
                data-testid={`stat-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-md bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-card-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
