import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "./Header";
import { PortfolioContent } from "./PortfolioContent";
import { SparklesBackground } from "@/components/ui/sparkles-background";

export function Portfolio() {
  return (
    <SparklesBackground>
      <ThemeToggle />
      <Header />
      <PortfolioContent />
    </SparklesBackground>
  );
}