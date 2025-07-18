import { ThemeToggle } from "@/components/ThemeToggle"
import { Header } from "./Header"
import { Objective } from "./Objective"
import { Skills } from "./Skills"
import { Timeline } from "./Timeline"
import { References } from "./References"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      
      {/* Main content in compact layout */}
      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="about" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">Sobre</TabsTrigger>
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
    </div>
  )
}