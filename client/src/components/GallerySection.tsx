import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import jaguarImage from "@assets/generated_images/Jaguar_in_Amazon_rainforest_5f0bb4dc.png";
import dolphinImage from "@assets/generated_images/Pink_Amazon_river_dolphin_48ab404f.png";
import macawImage from "@assets/generated_images/Scarlet_macaw_in_rainforest_40046140.png";
import frogImage from "@assets/generated_images/Blue_poison_dart_frog_21856b14.png";
import slothImage from "@assets/generated_images/Sloth_in_Amazon_rainforest_4c188629.png";
import eagleImage from "@assets/generated_images/Harpy_eagle_Amazon_rainforest_f927fd6b.png";
import riverImage from "@assets/generated_images/Amazon_river_aerial_view_bea62be1.png";
import forestImage from "@assets/generated_images/Amazon_forest_interior_view_9efe9172.png";

const galleryItems = [
  { image: jaguarImage, title: "Onça-Pintada", category: "Mamíferos" },
  { image: dolphinImage, title: "Boto-Cor-de-Rosa", category: "Mamíferos" },
  { image: macawImage, title: "Arara-Vermelha", category: "Aves" },
  { image: frogImage, title: "Sapo-Ponta-de-Flecha", category: "Anfíbios" },
  { image: slothImage, title: "Preguiça", category: "Mamíferos" },
  { image: eagleImage, title: "Gavião-Real", category: "Aves" },
  { image: riverImage, title: "Rio Amazonas", category: "Paisagens" },
  { image: forestImage, title: "Interior da Floresta", category: "Paisagens" },
];

const categories = ["Todos", "Mamíferos", "Aves", "Anfíbios", "Paisagens"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            Galeria da Amazônia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Explore imagens da vida selvagem e das paisagens deslumbrantes da floresta
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="cursor-pointer px-4 py-2 hover-elevate active-elevate-2"
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover-elevate transition-transform duration-300"
              onClick={() => setSelectedImage(item)}
              data-testid={`gallery-item-${index}`}
            >
              <div className="aspect-square overflow-hidden relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover-elevate p-2 rounded-md"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-modal"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-md"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
