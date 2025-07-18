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
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
            HABILIDADES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-portfolio-bg-subtle transition-all duration-200 hover-scale"
              >
                <CheckCircle className="w-6 h-6 text-portfolio-accent mt-1 flex-shrink-0" />
                <span className="text-portfolio-text-light">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}