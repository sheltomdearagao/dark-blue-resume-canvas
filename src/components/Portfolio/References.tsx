import { motion } from "framer-motion"
import { Phone, User } from "lucide-react"

const references = [
  { name: "Mel Loureiro", position: "Diretora", phone: "(75) 98168-3705" },
  { name: "Paloma Vanderlei", position: "Diretora", phone: "(71) 99190-1021" },
  { name: "Taíse Longuinho", position: "Coordenadora", phone: "(71) 99354-5827" },
  { name: "Leonardo Tosta", position: "Coordenador", phone: "(71) 99105-2897" }
]

export function References() {
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
            REFERÊNCIAS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {references.map((reference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-portfolio-primary mb-1">
                      {reference.name}
                    </h3>
                    <p className="text-portfolio-text-light mb-3">
                      {reference.position}
                    </p>
                    <div className="flex items-center gap-2 text-portfolio-text-light">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{reference.phone}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}