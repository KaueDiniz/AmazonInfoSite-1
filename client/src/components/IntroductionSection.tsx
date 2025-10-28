import { Card } from "@/components/ui/card";
import { Leaf, Droplets, Users } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Pulmão do Mundo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Floresta Amazônica é a maior floresta tropical do mundo, abrangendo cerca de 5,5 milhões de km² 
            e atravessando nove países da América do Sul.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              A Amazônia abriga aproximadamente 10% de toda a biodiversidade do planeta, 
              incluindo milhões de espécies de plantas, animais e insetos ainda não catalogadas pela ciência.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              Além de sua riqueza biológica incomparável, a floresta desempenha um papel crucial 
              na regulação do clima global, armazenando bilhões de toneladas de carbono e 
              produzindo cerca de 20% do oxigênio do planeta.
            </p>
          </div>
          
          <div className="grid gap-4">
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">390 Bilhões de Árvores</h3>
                  <p className="text-muted-foreground">Estima-se que existam 16.000 espécies diferentes de árvores</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">20% da Água Doce</h3>
                  <p className="text-muted-foreground">A bacia amazônica contém um quinto da água doce do mundo</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">400 Povos Indígenas</h3>
                  <p className="text-muted-foreground">Comunidades tradicionais que vivem em harmonia com a floresta há milênios</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
