import { ThemeToggle } from '../theme-toggle';

export default function ThemeToggleExample() {
  return (
    <div className="p-8 flex gap-4 items-center">
      <ThemeToggle />
      <span className="text-sm text-muted-foreground">Clique para alternar o tema</span>
    </div>
  );
}
