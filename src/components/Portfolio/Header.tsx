import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
export function Header() {
  return <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background with dots pattern */}
      <div className="absolute inset-0 bg-dots-sm bg-dots-sm opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="md:text-6xl lg:text-7xl font-bold text-portfolio-primary dark:text-white mb-4 text-5xl">
            SHELTOM DELANO
          </motion.h1>
          
          <motion.h2 initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-xl md:text-2xl lg:text-3xl text-portfolio-primary-light dark:text-gray-200 mb-3 font-medium text-slate-700">OLIVEIRA DE ARAGÃO</motion.h2>
          
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-base md:text-lg lg:text-xl text-portfolio-text-light dark:text-gray-300 max-w-2xl mx-auto mb-6 font-normal text-slate-800">Professor de Língua Portuguesa 
          <br />Especialista em Redação
 <br />Avaliador ENEM/ENADE
        </motion.p>
          
          <motion.div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center text-portfolio-text-light dark:text-gray-300 text-sm md:text-base" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }}>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 dark:text-gray-300" />
              <a 
                href="https://wa.me/5571999744116"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:text-blue-800 dark:text-gray-200 dark:hover:text-gray-100 underline"
              >
                (71) 99974-4116
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 dark:text-gray-300" />
              <span className="text-lg text-slate-800 dark:text-gray-200">sheltomdearagao@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 dark:text-gray-300" />
              <span className="text-slate-800 dark:text-gray-200">Salvador - BA</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}