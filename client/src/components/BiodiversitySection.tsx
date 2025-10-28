import { Card } from "@/components/ui/card";
import jaguarImage from "@assets/generated_images/Jaguar_in_Amazon_rainforest_5f0bb4dc.png";
import dolphinImage from "@assets/generated_images/Pink_Amazon_river_dolphin_48ab404f.png";
import macawImage from "@assets/generated_images/Scarlet_macaw_in_rainforest_40046140.png";
import frogImage from "@assets/generated_images/Blue_poison_dart_frog_21856b14.png";
import slothImage from "@assets/generated_images/Sloth_in_Amazon_rainforest_4c188629.png";
import eagleImage from "@assets/generated_images/Harpy_eagle_Amazon_rainforest_f927fd6b.png";

const species = [
  {
    name: "Onça-Pintada",
    scientificName: "Panthera onca",
    description: "O maior felino das Américas, um predador majestoso que desempenha papel crucial no equilíbrio do ecossistema.",
    image: jaguarImage,
  },
  {
    name: "Boto-Cor-de-Rosa",
    scientificName: "Inia geoffrensis",
    description: "Golfinho de água doce único da Amazônia, considerado o maior golfinho de rio do mundo.",
    image: dolphinImage,
  },
  {
    name: "Arara-Vermelha",
    scientificName: "Ara macao",
    description: "Ave majestosa com plumagem vibrante, símbolo da biodiversidade amazônica e da beleza tropical.",
    image: macawImage,
  },
  {
    name: "Sapo-Ponta-de-Flecha",
    scientificName: "Dendrobatidae",
    description: "Pequeno anfíbio com cores vibrantes que alertam sobre sua toxicidade, fascinante adaptação evolutiva.",
    image: frogImage,
  },
  {
    name: "Preguiça-de-Três-Dedos",
    scientificName: "Bradypus variegatus",
    description: "Mamífero arbóreo conhecido por seus movimentos lentos e estilo de vida tranquilo nas copas das árvores.",
    image: slothImage,
  },
  {
    name: "Gavião-Real",
    scientificName: "Harpia harpyja",
    description: "A águia mais poderosa do mundo, predador de topo que habita as camadas mais altas da floresta.",
    image: eagleImage,
  },
];

export default function BiodiversitySection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            Biodiversidade Incomparável
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça algumas das espécies icônicas que fazem da Amazônia o lar da maior biodiversidade do planeta
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {species.map((species, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate transition-transform duration-300"
              data-testid={`card-species-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={species.image} 
                  alt={species.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {species.name}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-4">
                  {species.scientificName}
                </p>
                <p className="text-base text-card-foreground leading-relaxed">
                  {species.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
