import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const skills = [
  "Vasta experiência em escolas públicas e particulares",
  "Avaliador de redações (ENEM, ENADE)",
  "Vivência internacional",
  "Domínio de ferramentas tecnológicas e de IA para a educação",
  "Disponibilidade para atuar na Região Metropolitana de Salvador",
  "Comprometimento com metas e resultados",
  "Busca contínua pelo aprimoramento pessoal e profissional",
  "Inglês avançado"
]

export function Skills() {
  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary mb-6 text-center">
          HABILIDADES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-sm transition-all duration-200"
            >
              <CheckCircle className="w-5 h-5 text-portfolio-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm md:text-base text-portfolio-text-light">{skill}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}