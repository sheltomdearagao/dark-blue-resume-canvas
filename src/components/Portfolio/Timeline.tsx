import { motion } from "framer-motion"
import { useState } from "react"

interface TimelineItem {
  year: string
  title: string
  institution: string
  type: 'experience' | 'education'
}

const experiences: TimelineItem[] = [
  { year: "2024 – Atual", title: "Professor de Redação", institution: "Escola Medalha Milagrosa", type: 'experience' },
  { year: "2019 – Atual", title: "Professor Efetivo de Língua Portuguesa", institution: "Rede Estadual de Ensino da Bahia", type: 'experience' },
  { year: "2014 – Atual", title: "Avaliador de Redações (ENEM-ENADE)", institution: "CEBRASPE, FGV, VUNESP", type: 'experience' },
  { year: "2023", title: "Professor de Redação", institution: "Colégio Salesiano Dom Bosco", type: 'experience' },
  { year: "2017 – 2018", title: "Professor de Língua Portuguesa", institution: "Colégio SESI", type: 'experience' },
  { year: "2015 – 2016", title: "Professor de Redação", institution: "Colégio Augusto Comte", type: 'experience' },
  { year: "2014", title: "Professor de Gramática", institution: "Colégio Integral", type: 'experience' }
]

const education: TimelineItem[] = [
  { year: "Em andamento", title: "Pós-graduação em Produção Textual na Educação Básica", institution: "UFBA", type: 'education' },
  { year: "2024", title: "Pós-graduação em Linguagens, Códigos e suas Tecnologias", institution: "UFPI", type: 'education' },
  { year: "2020", title: "Pós-graduação em Ensino de Língua Portuguesa", institution: "FAVENI", type: 'education' },
  { year: "2017", title: "Mestrado em Linguística", institution: "UFBA", type: 'education' },
  { year: "2013", title: "Licenciatura em Letras Vernáculas", institution: "UFBA", type: 'education' },
  { year: "2010–2012", title: "Graduação Sanduíche em Letras", institution: "Universidade de Coimbra (Portugal)", type: 'education' }
]

export function Timeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')
  
  const currentData = activeTab === 'experience' ? experiences : education
  
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
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary mb-12 text-center">
            TRAJETÓRIA
          </h2>
          
          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-card rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 rounded-md transition-all duration-200 ${
                  activeTab === 'experience' 
                    ? 'bg-portfolio-primary text-white' 
                    : 'text-portfolio-text-light hover:bg-muted'
                }`}
              >
                Experiência Profissional
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-md transition-all duration-200 ${
                  activeTab === 'education' 
                    ? 'bg-portfolio-primary text-white' 
                    : 'text-portfolio-text-light hover:bg-muted'
                }`}
              >
                Formação Acadêmica
              </button>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-8 top-0 w-0.5 bg-timeline-line"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <div className="space-y-12">
              {currentData.map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="relative z-10 w-4 h-4 bg-timeline-point rounded-full border-4 border-timeline-bg"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                        <span className="text-sm font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-portfolio-primary mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-portfolio-text-light">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}