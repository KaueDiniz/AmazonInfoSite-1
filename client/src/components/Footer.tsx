import { Leaf, Heart } from "lucide-react";

const footerLinks = {
  recursos: [
    { label: "Sobre a Amazônia", href: "#" },
    { label: "Conservação", href: "#" },
    { label: "Pesquisas Científicas", href: "#" },
    { label: "Educação Ambiental", href: "#" },
  ],
  organizacoes: [
    { label: "WWF Brasil", href: "#" },
    { label: "Greenpeace", href: "#" },
    { label: "Instituto Socioambiental", href: "#" },
    { label: "Amazon Watch", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Contato", href: "#" },
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
              <span className="text-xl font-bold text-card-foreground">Amazônia</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Informações educacionais sobre a maior floresta tropical do mundo 
              e sua importância vital para o planeta.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
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
            <h3 className="font-semibold text-card-foreground mb-4">Organizações</h3>
            <ul className="space-y-3">
              {footerLinks.organizacoes.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-org-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
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
            <p className="text-muted-foreground text-sm">
              © 2025 Floresta Amazônica. Projeto educacional.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Feito com <Heart className="w-4 h-4 text-destructive fill-destructive" /> pela conservação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
