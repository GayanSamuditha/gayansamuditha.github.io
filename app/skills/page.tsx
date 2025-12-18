'use client'

import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedIconGrid from '@/components/AnimatedIconGrid'

export default function Skills() {
  // Technology icons for skills page - with fallback emojis
  const languageIcons = [
    { src: '/icons/python.gif', videoSrc: '/icons/python.mp4', alt: 'Python', label: 'Python', iconType: 'python' as const },
    { src: '/icons/java.gif', videoSrc: '/icons/java.mp4', alt: 'Java', label: 'Java', iconType: 'default' as const },
    { src: '/icons/go.gif', videoSrc: '/icons/go.mp4', alt: 'Go', label: 'Go', iconType: 'default' as const },
    { src: '/icons/javascript.gif', videoSrc: '/icons/javascript.mp4', alt: 'JavaScript', label: 'JavaScript', iconType: 'default' as const },
    { src: '/icons/r.gif', videoSrc: '/icons/r.mp4', alt: 'R', label: 'R', iconType: 'default' as const },
  ]

  const mlIcons = [
    { src: '/icons/pytorch.gif', videoSrc: '/icons/pytorch.mp4', alt: 'PyTorch', label: 'PyTorch', iconType: 'pytorch' as const },
    { src: '/icons/tensorflow.gif', videoSrc: '/icons/tensorflow.mp4', alt: 'TensorFlow', label: 'TensorFlow', iconType: 'tensorflow' as const },
    { src: '/icons/keras.gif', videoSrc: '/icons/keras.mp4', alt: 'Keras', label: 'Keras', iconType: 'default' as const },
    { src: '/icons/sklearn.gif', videoSrc: '/icons/sklearn.mp4', alt: 'Scikit-learn', label: 'Scikit-learn', iconType: 'default' as const },
  ]

  const neuroimagingIcons = [
    { src: '/icons/ants.gif', videoSrc: '/icons/ants.mp4', alt: 'ANTsX', label: 'ANTsX', iconType: 'ants' as const },
    { src: '/icons/freesurfer.gif', videoSrc: '/icons/freesurfer.mp4', alt: 'FreeSurfer', label: 'FreeSurfer', iconType: 'brain' as const },
    { src: '/icons/fsl.gif', videoSrc: '/icons/fsl.mp4', alt: 'FSL', label: 'FSL', iconType: 'brain' as const },
  ]

  const cloudIcons = [
    { src: '/icons/aws.gif', videoSrc: '/icons/aws.mp4', alt: 'AWS', label: 'AWS', iconType: 'default' as const },
    { src: '/icons/gcp.gif', videoSrc: '/icons/gcp.mp4', alt: 'Google Cloud', label: 'GCP', iconType: 'default' as const },
    { src: '/icons/azure.gif', videoSrc: '/icons/azure.mp4', alt: 'Azure', label: 'Azure', iconType: 'default' as const },
  ]
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "Go (Golang)", "JavaScript", "R", "HTML/CSS", "SQL", "NoSQL", "PL/SQL", "Bash/Shell", "PowerShell", "Julia"]
    },
    {
      title: "Frameworks",
      skills: ["Tensorflow", "Keras", "Scikit-learn", "Java JADE framework", "Python SPADE framework", "NLP"]
    },
    {
      title: "Technologies/Frameworks",
      skills: ["Linux", "Jenkins", "GitHub", "JUnit", "SonarQube", "Spring", "SpringBoot", "Microservices", "OAuth"]
    },
    {
      title: "Cloud",
      skills: ["AWS", "Google", "Azure"]
    },
    {
      title: "NeuroImaging Tools",
      skills: ["ANTs EcoSystem", "FreeSurfer", "FSL"]
    },
    {
      title: "DNA LLMs",
      skills: ["Nucleotide Transformer", "DNA-BERT2", "HyenaDNA", "Mistral DNA", "GENA-LM", "GROVER"]
    },
    {
      title: "ML Frameworks",
      skills: ["PyTorch Lightning", "Tensorflow", "LangChain"]
    },
    {
      title: "High-Performance Distributed Systems",
      skills: ["Apache Kafka", "Apache Spark", "ML-Flow", "KubeFlow", "Apache AirFlow"]
    },
    {
      title: "Genomics",
      skills: ["GWAS (plink)", "CPASSOC"]
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-gray-600 mb-12">A comprehensive overview of my technical expertise across various domains</p>
        </AnimatedSection>

        {/* Technology Icons Section */}
        <AnimatedSection delay={0.2}>
          <div className="mb-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
              <AnimatedIconGrid icons={languageIcons} columns={5} size="md" className="mb-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Machine Learning Frameworks</h3>
              <AnimatedIconGrid icons={mlIcons} columns={4} size="md" className="mb-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Neuroimaging Tools</h3>
              <AnimatedIconGrid icons={neuroimagingIcons} columns={3} size="md" className="mb-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Platforms</h3>
              <AnimatedIconGrid icons={cloudIcons} columns={3} size="md" />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-primary-200 pb-2">
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}

