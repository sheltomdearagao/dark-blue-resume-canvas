import { motion } from "framer-motion"

export function Objective() {
  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary mb-6 text-center">
          OBJETIVO
        </h2>
        
        <div className="relative bg-card p-6 rounded-lg border border-border">
          <div className="absolute -left-2 top-6 w-1 h-12 bg-portfolio-accent rounded-full"></div>
          <p className="text-base md:text-lg text-portfolio-text-light leading-relaxed pl-6">
            Integrar o time de educadores da escola, promovendo o desenvolvimento intelectual, 
            o pensamento crítico e os princípios éticos dos estudantes, enquanto contribuo 
            para o crescimento da empresa.
          </p>
        </div>
      </motion.div>
    </div>
  )
}