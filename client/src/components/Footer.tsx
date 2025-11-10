import { Leaf, Github, Mail } from "lucide-react";

const footerLinks = {
  projeto: [
    { label: "Sobre o Projeto", href: "#introduction" },
    { label: "Metodologia", href: "#methodology" },
    { label: "Fontes de Dados", href: "#data-sources" },
    { label: "Resultados", href: "#results" },
  ],
  recursos: [
    { label: "PRODES/INPE", href: "http://terrabrasilis.dpi.inpe.br/", external: true },
    { label: "MapBiomas", href: "https://mapbiomas.org/", external: true },
    { label: "TerraBrasilis", href: "http://terrabrasilis.dpi.inpe.br/", external: true },
    { label: "Sentinel-2", href: "https://sentinel.esa.int/", external: true },
  ],
  universidade: [
    { label: "Universidade São Judas", href: "#" },
    { label: "Engenharia de Software", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-card-foreground">Guardiã Verde</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Monitoramento de desmatamento com dados abertos e inteligência artificial.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-primary/10 text-primary hover-elevate"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@guardiaverde.com" 
                className="p-2 rounded-md bg-primary/10 text-primary hover-elevate"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Projeto</h3>
            <ul className="space-y-3">
              {footerLinks.projeto.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-resource-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Instituição</h3>
            <ul className="space-y-3">
              {footerLinks.universidade.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-uni-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Guardiã Verde. Universidade São Judas Tadeu - Engenharia de Software.
            </p>
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-privacy"
              >
                Privacidade
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-terms"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
