'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaInstagram 
} from 'react-icons/fa'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedIcon from '@/components/AnimatedIcon'
import AnimatedIconGrid from '@/components/AnimatedIconGrid'

export default function Home() {
  // Research area icons - Add your GIF/MP4 files to public/icons/ directory
  // Fallback emojis will show if files are missing
  const researchIcons = [
    { src: '/icons/brain.gif', videoSrc: '/icons/brain.mp4', alt: 'Brain MRI', label: 'Neuroimaging', iconType: 'brain' as const },
    { src: '/icons/dna.gif', videoSrc: '/icons/dna.mp4', alt: 'DNA', label: 'Genomics', iconType: 'dna' as const },
    { src: '/icons/ai.gif', videoSrc: '/icons/ai.mp4', alt: 'AI/ML', label: 'Deep Learning', iconType: 'ai' as const },
    { src: '/icons/llm.gif', videoSrc: '/icons/llm.mp4', alt: 'LLM', label: 'Language Models', iconType: 'llm' as const },
  ]

  const techIcons = [
    { src: '/icons/python.gif', videoSrc: '/icons/python.mp4', alt: 'Python', label: 'Python', iconType: 'python' as const },
    { src: '/icons/pytorch.gif', videoSrc: '/icons/pytorch.mp4', alt: 'PyTorch', label: 'PyTorch', iconType: 'pytorch' as const },
    { src: '/icons/tensorflow.gif', videoSrc: '/icons/tensorflow.mp4', alt: 'TensorFlow', label: 'TensorFlow', iconType: 'tensorflow' as const },
    { src: '/icons/ants.gif', videoSrc: '/icons/ants.mp4', alt: 'ANTsX', label: 'ANTsX', iconType: 'ants' as const },
  ]
  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/GSam_Stack', text: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/GayanSamuditha', text: 'Github' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gayan-samuditha-023013114/', text: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:gsm66@case.edu', text: 'Email' },
    { icon: FaInstagram, href: 'https://www.instagram.com/gayya_syack/', text: 'Instagram' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Gayan Samuditha
              </motion.h1>
              <motion.p 
                className="text-xl text-primary-600 font-semibold mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Masters Research in Biomedical and Health Informatics
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Case Western Reserve University, School of Medicine
              </motion.p>
              
              {/* Research Area Icons */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-sm text-gray-600 mb-3 font-medium">Research Focus Areas:</p>
                <div className="flex flex-wrap gap-4">
                  {researchIcons.map((icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <AnimatedIcon
                        src={icon.src}
                        videoSrc={icon.videoSrc}
                        alt={icon.alt}
                        size="sm"
                        iconType={icon.iconType}
                      />
                      <span className="text-xs text-gray-600 mt-1">{icon.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="flex space-x-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.text}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                      aria-label={social.text}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.div 
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/img/my_image.jpg"
                  alt="Gayan Samuditha"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Summary
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Masters Research in Biomedical and Health Informatics at Case Western Reserve University, with a previous track record of 5+ years of experience as an Associate Lead Software Engineer in R&D and Platform Engineering. My research focuses on Large-scale Neuroimaging and Imaging Genomics of Alzheimer's Disease, combining MRI feature extraction, Deep Learning, and LLM-based methods to build robust, clinically meaningful AI models for Healthcare.
              </p>
              
              {/* Technology Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-gray-50 rounded-lg"
              >
                <p className="text-sm font-semibold text-gray-700 mb-4">Key Technologies:</p>
                <AnimatedIconGrid icons={techIcons} columns={4} size="sm" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none text-justify"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                I am currently pursuing Masters Research in Biomedical and Health Informatics (2nd Year) at Case Western Reserve University, School of Medicine. I hold a Bachelor of Engineering Honours in Software Engineering from the University of Westminster, United Kingdom (Sep. 2015 - June 2019), with an average of 69.25.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                With over five years of extensive involvement in research across both industrial and academic settings, I have developed deep expertise that bridges hands-on industry applications and advanced academic studies. My professional journey includes significant roles as an Associate Lead Software Engineer, where I honed my skills in engineering research and development, platform engineering, and product development.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                My research at Case Western Reserve University focuses on large-scale neuroimaging and imaging genomics of Alzheimer's Disease. I work on designing comprehensive brain MRI analysis pipelines using the Advanced Normalization Tools (ANTsX Ecosystem), focusing on Longitudinal Image Registration, Deep Learning-based Brain Extraction, Tissue Segmentation, Cortical Thickness measurement, and Cortical Parcellation to extract Imaging-derived Phenotypes (IDPs) from ADNI MRI data.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I also pioneer the application of Large Language Models (LLMs) and Deep Representation Learning to omics data, focusing on enhancing variant interpretation, uncovering hidden genetic patterns influencing brain morphology, and advancing personalized medicine through the integration of Neuro-Imaging and genomic data at scale.
              </motion.p>
              <motion.p 
                className="text-gray-700 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I am always open to discussing potential collaborations, research opportunities, or queries related to my field of expertise. With a solid foundation of knowledge and a dynamic set of skills, I am eager to contribute to and collaborate on innovative ventures that push the boundaries of technology and science.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="mailto:gsm66@case.edu"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-lg"
                  >
                    <FaEnvelope className="mr-2" />
                    Contact Me
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/cv"
                    className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium shadow-lg"
                  >
                    View CV
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

