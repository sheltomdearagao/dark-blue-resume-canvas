import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "./Header";
import { PortfolioContent } from "./PortfolioContent";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesBackground } from "@/components/ui/sparkles-background";
import { useTheme } from "@/hooks/use-theme";

export function Portfolio() {
  const { theme } = useTheme();
  
  // Improved theme detection that works better with SSR
  const isLightTheme = theme === "light";
  
  const BackgroundWrapper = isLightTheme ? AuroraBackground : SparklesBackground;
  
  return (
    <BackgroundWrapper>
      <ThemeToggle />
      <Header />
      <PortfolioContent />
    </BackgroundWrapper>
  );
}