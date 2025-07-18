import { ThemeToggle } from "@/components/ThemeToggle";
import { Header } from "./Header";
import { Objective } from "./Objective";
import { Skills } from "./Skills";
import { Timeline } from "./Timeline";
import { References } from "./References";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesBackground } from "@/components/ui/sparkles-background";
import { useTheme } from "@/hooks/use-theme";
export function Portfolio() {
  const { theme } = useTheme();
  const isLightTheme = theme === "light" || (theme === "system" && !window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  if (isLightTheme) {
    return <AuroraBackground className="min-h-screen relative">
      <div className="relative z-10">
        <ThemeToggle />
        <Header />
        
        {/* Main content in compact layout with proper spacing */}
        <div className="container mx-auto px-6 py-12 min-h-screen">
          <Tabs defaultValue="about" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/90 backdrop-blur-sm shadow-lg">
              <TabsTrigger value="about">Objetivo</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="timeline">Trajetória</TabsTrigger>
              <TabsTrigger value="references">Referências</TabsTrigger>
            </TabsList>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6 min-h-[400px]">
              <TabsContent value="about" className="mt-0 data-[state=active]:block data-[state=inactive]:hidden">
                <Objective />
              </TabsContent>
              
              <TabsContent value="skills" className="mt-0 data-[state=active]:block data-[state=inactive]:hidden">
                <Skills />
              </TabsContent>
              
              <TabsContent value="timeline" className="mt-0 data-[state=active]:block data-[state=inactive]:hidden">
                <Timeline />
              </TabsContent>
              
              <TabsContent value="references" className="mt-0 data-[state=active]:block data-[state=inactive]:hidden">
                <References />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </AuroraBackground>;
  }
  
  return <SparklesBackground>
      <ThemeToggle />
      <Header />
      
      {/* Main content in compact layout */}
      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="about" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">Objetivo</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="timeline">Trajetória</TabsTrigger>
            <TabsTrigger value="references">Referências</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-0">
            <Objective />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-0">
            <Skills />
          </TabsContent>
          
          <TabsContent value="timeline" className="mt-0">
            <Timeline />
          </TabsContent>
          
          <TabsContent value="references" className="mt-0">
            <References />
          </TabsContent>
        </Tabs>
      </div>
    </SparklesBackground>;
}