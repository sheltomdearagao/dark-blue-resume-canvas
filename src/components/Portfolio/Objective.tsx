import { motion } from "framer-motion"

export function Objective() {
  return (
    <section className="py-20 bg-portfolio-bg-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-8 text-center">
            OBJETIVO
          </h2>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-portfolio-accent rounded-full"></div>
            <p className="text-lg md:text-xl text-portfolio-text-light leading-relaxed pl-8">
              Integrar o time de educadores da escola, promovendo o desenvolvimento intelectual, 
              o pensamento crítico e os princípios éticos dos estudantes, enquanto contribuo 
              para o crescimento da empresa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}