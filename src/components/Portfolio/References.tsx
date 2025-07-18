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
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary mb-6 text-center">
          REFERÊNCIAS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {references.map((reference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-portfolio-accent/10 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-portfolio-accent" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-portfolio-primary mb-1">
                    {reference.name}
                  </h3>
                  <p className="text-sm text-portfolio-text-light mb-2">
                    {reference.position}
                  </p>
                  <div className="flex items-center gap-2 text-portfolio-text-light">
                    <Phone className="w-4 h-4" />
                    <a 
                      href={`https://wa.me/${reference.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {reference.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}