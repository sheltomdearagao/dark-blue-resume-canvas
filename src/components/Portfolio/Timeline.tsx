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
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary mb-6 text-center">
          TRAJETÓRIA
        </h2>
        
        {/* Tab buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-1 shadow-sm border border-border">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 text-sm md:text-base rounded-md transition-all duration-200 ${
                activeTab === 'experience' 
                  ? 'bg-portfolio-primary text-white' 
                  : 'text-portfolio-text-light hover:bg-muted'
              }`}
            >
              Experiência
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-sm md:text-base rounded-md transition-all duration-200 ${
                activeTab === 'education' 
                  ? 'bg-portfolio-primary text-white' 
                  : 'text-portfolio-text-light hover:bg-muted'
              }`}
            >
              Formação
            </button>
          </div>
        </div>
          
        {/* Timeline */}
        <div className="relative max-h-96 overflow-y-auto pr-2">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-6 top-0 w-0.5 bg-timeline-line"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          <div className="space-y-6">
            {currentData.map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="relative z-10 w-3 h-3 bg-timeline-point rounded-full border-2 border-background"
                  animate={{ scale: [0, 1.1, 1] }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col gap-1 mb-2">
                      <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-2 py-1 rounded-full w-fit">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-semibold text-portfolio-primary mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-portfolio-text-light">
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
  )
}