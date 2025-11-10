import { TreePine, MapPin, Flame, LineChart } from "lucide-react";

const stats = [
  {
    icon: TreePine,
    value: "6.288 km²",
    label: "Desmatamento Amazônia 2024",
  },
  {
    icon: MapPin,
    value: "652.197 ha",
    label: "Desmatamento Cerrado 2024",
  },
  {
    icon: Flame,
    value: "46%",
    label: "Emissões de Uso da Terra",
  },
  {
    icon: LineChart,
    value: "30,6%",
    label: "Redução em 2024",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
            Desmatamento em Números
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Dados oficiais de 2024 mostram avanços, mas também desafios persistentes
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-md bg-background hover-elevate"
                data-testid={`stat-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-md bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
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
