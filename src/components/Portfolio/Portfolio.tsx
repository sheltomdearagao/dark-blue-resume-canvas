import { ThemeToggle } from "@/components/ThemeToggle"
import { Header } from "./Header"
import { Objective } from "./Objective"
import { Skills } from "./Skills"
import { Timeline } from "./Timeline"
import { References } from "./References"

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Header />
      <Objective />
      <Skills />
      <Timeline />
      <References />
    </div>
  )
}