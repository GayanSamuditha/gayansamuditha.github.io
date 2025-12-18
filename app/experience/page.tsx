'use client'

import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'

export default function Experience() {
  const researchExperience = [
    {
      company: "Case Western Reserve University, School of Medicine",
      location: "Ohio, United States",
      role: "Research Assistant - Medical Imaging, Genetic Informatics, LLMs, Deep Learning",
      period: "2023 - Present",
      achievements: [
        "Designed and executed a comprehensive brain MRI analysis pipeline leveraging the Advanced Normalization Tools (ANTsX Ecosystem), focusing on Longitudinal Image Registration, Deep Learning-based Brain Extraction, Tissue Segmentation (Deep Atropos), Cortical Thickness measurement (DiReCT), and Cortical Parcellation (DKT protocol) to extract Imaging-derived Phenotypes (IDPs) from ADNI MRI data.",
        "Developed and optimized multimodal neuroimaging workflows in Python and R (ANTsPy, ANTsR, ANTsRNet) to process T1-weighted, T2-weighted, and FLAIR MRI images, implementing advanced preprocessing techniques (N4 bias correction, denoising) and high-throughput quality control pipelines to ensure robust and scalable imaging analysis across diverse cognitive states.",
        "Integrated High-Resolution Brain Morphology features with Genome-Wide Association Study (GWAS) data to perform Cross-Phenotype Association Analyses (CPASSOC), identifying potential genetic variants linked to Cortical Thickness and Brain Volumetric changes across normal aging and Alzheimer's Disease progression. Applied statistical genomics methods to correlate structural brain changes with genetic architectures.",
        "Pioneering the application of Large Language Models (LLMs) and Deep Representation Learning to omics data, focusing on enhancing variant interpretation, uncovering hidden genetic patterns influencing brain morphology, and advancing personalized medicine through the integration of Neuro-Imaging and genomic data at scale.",
        "Performed longitudinal modeling of FreeSurfer v7 brain morphometry across 40+ ADNI visit codes (bl-m228), using mixed-effects models (lme4/lmerTest) to characterize cortical thickness and volume trajectories in CN, MCI, and AD.",
        "Engineered patient-level similarity kernels from high-dimensional MRI-derived features (RBF kernels on FreeSurfer ROIs) to quantify \"AD-likeness,\" enabling clustering, subtype discovery, and progression risk scoring.",
        "Built harmonized multi-cohort datasets by merging ADNI imaging, genotype (GWAS/PLINK), and cognitive assessments (MMSE, CDR), implementing rigorous QC, outlier detection, and missing-data handling for downstream statistical modeling.",
        "Designed and deployed an end-to-end electronic phenotyping pipeline for a large-scale EHR cohort by transforming raw clinical data into the OMOP Common Data Model and integrating it with OHDSI Broadsea 3.0 (Atlas, Hades, Ares) via Docker. Produced a harmonized dataset with tens of millions of standardized concept relationships, enabling robust EHR-based phenotyping and large-scale observational research.",
        "Developed an unsupervised framework to evaluate pre-trained DNA language model embeddings; implemented the Python benchmarking pipeline (RankMe, NESum, StableRank) across six state-of-the-art DNA LMs and multiple genomic datasets, and released the evaluation toolkit as the open-source embedding-quality package."
      ]
    }
  ]

  const professionalExperience = [
    {
      company: "Virtusa Corporation",
      location: "Colombo, Sri Lanka",
      role: "Intern - Research and Development (Global Technology Office)",
      period: "July 2017 - July 2018 (1 Year)",
      achievements: [
        "CENTROID (AI-based Digital Test Automation Tool) - Facilitating end-to-end automation for technical and non-technical users, managing distributed agents efficiently.",
        "LUMOS (Requirement Clarity Assessment) - Leveraging AI for deep analysis, ensuring precise developer-task matching based on requirements.",
        "Lumos Test (Test Management and Optimization) - Streamlining test case creation to execution, ensuring traceability from requirements to defects.",
        "AITEST (AI-based Test Management Tool) - ML-driven plugin for advanced test case management and optimization, developed by Virtusa's GTO."
      ]
    },
    {
      company: "Virtusa Corporation Client Side - British Telecommunication",
      location: "United Kingdom (Remote)",
      role: "Associate Software Engineer - Platform Engineering",
      period: "December 2019",
      achievements: [
        "Telecommunication Domain Micro-services, Telco platform Engineering, and Development for BT client."
      ]
    },
    {
      company: "Virtusa Corporation Client Side - Modjoul Engineering",
      location: "Clemson SC, USA (Remote)",
      role: "Software Engineer - Product and Platform Engineering",
      achievements: [
        "Design and Implementation of data analytical dashboards and Machine Learning models for IoT devices.",
        "More info: https://www.virtusa.com/success-stories/aws-based-iot-data-aggregation-analytics-platform"
      ]
    },
    {
      company: "Virtusa Corporation Client Side - Iron Mountain",
      location: "Boston, USA (Remote)",
      role: "Senior Software Engineer - Research and Development",
      achievements: [
        "Developed content services platform that provides actionable business insights and predictive analytics through Machine Learning (ML)-based classification of a company's physical and digital information, which adds structure, context and meta-data to information to make it more usable.",
        "More info: https://www.ironmountain.com/services/secure-shredding"
      ]
    },
    {
      company: "Virtusa Corporation Client Side - Iron Mountain",
      location: "Boston, USA (Remote)",
      role: "Associate Lead Software Engineer - Product Development",
      period: "July 2023 - November 2022",
      achievements: [
        "Product for midsize businesses for shredding and Machine Learning-based platform for content management.",
        "More info: https://www.ironmountain.com/resources/whitepapers/p/powering-your-content-with-ai-whitepaper"
      ]
    },
    {
      company: "University of Westminster",
      location: "London, United Kingdom",
      role: "Visiting Lecturer",
      period: "2022 - Spring",
      achievements: [
        "6SENG002W - Concurrent Programming",
        "6COSC023C - Final Year Research Project"
      ]
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Experience</h1>
        </AnimatedSection>

        {/* Research Experience */}
        <div className="mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {researchExperience.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{exp.location}</p>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{exp.role}</p>
                  {exp.period && (
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                  )}
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Experience (5 Years)</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{exp.location}</p>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{exp.role}</p>
                  {exp.period && (
                    <p className="text-gray-600 mb-4">{exp.period}</p>
                  )}
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span>
                          {achievement.startsWith('More info:') ? (
                            <a 
                              href={achievement.split('More info: ')[1]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-800 underline"
                            >
                              {achievement}
                            </a>
                          ) : (
                            achievement
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

