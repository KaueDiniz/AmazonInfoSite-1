import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Amazon_rainforest_canopy_aerial_view_640c9053.png";

export default function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById('introduction');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          Guardiã Verde
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto font-light">
          Monitoramento de Desmatamento com Dados Abertos e Inteligência Artificial. Detectando mudanças na floresta em tempo quase real.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToContent}
            className="bg-primary/90 backdrop-blur-lg border border-primary-border text-primary-foreground hover-elevate active-elevate-2"
            data-testid="button-explore"
          >
            Conheça o Projeto
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToContent}
            className="backdrop-blur-lg bg-white/10 border-white/30 text-white hover-elevate active-elevate-2"
            data-testid="button-learn-more"
          >
            Como Funciona
          </Button>
        </div>
      </div>
      
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll para baixo"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
