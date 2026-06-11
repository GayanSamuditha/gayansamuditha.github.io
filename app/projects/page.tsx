'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'

const profileLinks = {
  github: 'https://github.com/GayanSamuditha',
  scholar: 'https://scholar.google.com/citations?user=ARKdd88AAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/gayan-samuditha-023013114/',
}

export default function Projects() {
  const enterpriseProjects = [
    {
      title: "Virtusa V+ Assistant — OpenAI Integration",
      organization: "Virtusa Corporation · ETDS",
      description: "Integrated OpenAI APIs into Virtusa V+ Assistant for skill updates, skill matching, project allocation, and job description generation across a 30,000+ employee organization.",
      technologies: ["OpenAI APIs", "Azure", "React", "REST APIs"]
    },
    {
      title: "ACCELLO — AI-native QA & Test Automation",
      organization: "Virtusa GTO · R&D",
      description: "Built backend services and workflow components to automate regression workflows and reduce manual QA effort.",
      technologies: ["Java", "JavaScript", "RPA"],
      link: "https://www.virtusa.com/lp/seamless-qa-without-the-slowdowns"
    },
    {
      title: "CENTROID — RPA-based E2E Test Automation",
      organization: "Virtusa GTO · R&D",
      description: "Developed backend workflow logic and UI workflows converting manual regression scenarios into reusable automated components.",
      technologies: ["RPA", "Java", "UI Automation"],
      link: "https://www.virtusa.com/news-room/press-releases/year_2017/September/33535"
    },
    {
      title: "LUMOS — NLP-driven Requirement Clarity",
      organization: "Virtusa GTO · R&D",
      description: "Implemented backend and front-end workflows with Jira-integrated feedback flows to improve requirement quality.",
      technologies: ["NLP", "Jira", "Java"],
      link: "https://marketplace.atlassian.com/archive/1222231"
    },
    {
      title: "Iron Mountain Smart Sort Mobile App",
      organization: "Virtusa · Iron Mountain Client",
      description: "Rewrote 5 core React Native warehouse workflows for barcode scanning, disposition decisions, and reboxing; contributed to documented storage cost reductions of 33–40%+.",
      technologies: ["React Native", "GCP", "REST APIs"]
    },
    {
      title: "Sierra26 & SafeKeeper PLUS",
      organization: "Virtusa · Iron Mountain Client",
      description: "Engineered Java microservices and dashboard workflows for records inventory tracking, retrieval, destruction, billing, and compliance.",
      technologies: ["Java", "React Native", "AngularJS", "GCP"]
    },
    {
      title: "Modjoul IoT Safety Analytics Platform",
      organization: "Virtusa · Modjoul Client",
      description: "Built AWS-based backend pipelines and dashboards processing SmartBelt wearable sensor data for workplace safety insights and real-time alerting.",
      technologies: ["AWS", "Node.js", "IoT", "Real-time Analytics"],
      link: "https://www.virtusa.com/success-stories/aws-based-iot-data-aggregation-analytics-platform"
    },
    {
      title: "Citi SDLC Telemetry System",
      organization: "Virtusa GTO · Citi Client",
      description: "Architected ELK Stack ETL pipelines and customized Kibana dashboards for SDLC delivery telemetry and engineering-governance KPIs.",
      technologies: ["Elasticsearch", "Logstash", "Kibana", "Apache POI"]
    }
  ]

  const researchProjects = [
    {
      title: "Large-Scale Brain MRI Pipeline (ADNI)",
      organization: "CWRU · Zhu Lab",
      description: "Cohort-scale neuroimaging pipelines processing nearly 3,000 MRI subjects with ANTsX, ANTsPyNet, and DiReCT on HPC clusters.",
      technologies: ["Python", "ANTsX", "HPC", "GWAS"]
    },
    {
      title: "UK Biobank → OMOP CDM Transformation",
      organization: "CWRU · Bush Lab",
      description: "Transformed UK Biobank data to OMOP CDM 5.3.1 for 502,000+ participants using Delphyne, PostgreSQL, and OHDSI Broadsea.",
      technologies: ["Python", "PostgreSQL", "OMOP", "OHDSI"]
    },
    {
      title: "DNA Language Model Embedding Evaluation",
      organization: "CWRU · Bush Lab",
      description: "Open-source toolkit benchmarking DNA language model embeddings; published in BMC Genomics (2025).",
      technologies: ["Python", "ML", "HPC"],
      link: profileLinks.github
    }
  ]

  const academicProjects = [
    {
      title: "Nexus - Smart Home Garden Watering System (Home Watering Booster)",
      location: "University of Westminster, London, United Kingdom (Level 4 - 1st Year)",
      abstract: "The irrigation system allows water to drip slowly to the roots of plants, either onto the soil surface or directly onto the root zone, through a solenoid valve. However, it is found that the market price of the system is expensive for small area coverage. Thus, this paper proposes a design for a smart home garden irrigation system that implements ready-to-use, energy-efficient, and cost-effective devices. Raspberry Pi, which is implemented in this system is integrated with multi-sensors such as soil moisture sensors, ultrasonic sensors, and light sensors. This proposed system managed to reduce cost, minimize wastewater, and reduce the physical human interface. In this paper, the relay is utilized to control the switching of the solenoid valve. The system also managed to measure the moisture of the soil and control the solenoid valve according to human requirements. It is conducted with Graphical User Interface (GUI) using an Android application to activate watering activity. Email notification is also sent to the home user for alert purposes either for normal or critical operations. An experimental setup has been tested and it is proven that the system can intelligently control and monitor the soil moisture levels in the experiment field.",
      technologies: ["Ubidots cloud", "Arduino", "ESP8266 NodeMCU", "Android", "C++", "HTML5", "CSS3", "Bootstrap", "Java Script", "JSON", "jQuery UI", "REST Web Services"],
      image: "/projects/Iot1.jpg"
    },
    {
      title: "Smart Irrigation Controlling System",
      location: "Sri Lanka",
      abstract: "In Sri Lanka, agriculture plays an important role in the development of food production. In our country, agriculture depends on monsoons which are not a sufficient source of water. So irrigation is used in the agriculture field. The Internet of Things (IoT) is a milestone in the evolution of technology. IoT plays an important role in many fields, one of that is Agriculture by which it can feed billions of people on Earth in the future. The objective of this paper is aiming to overcome this challenge, the whole system is microcontroller based and can be operated from a remote location through wireless transmission so there is no need to be concerned about irrigation timing as per crop or soil condition. The sensor is used to take sensor readings of soil like soil moisture, temperature, and air moisture, and decision-making is controlled by the user (farmer) by using a microcontroller. The data received from sensors are sent to the server database using wireless transmission. The irrigation will be automated when the moisture and temperature of the field are reduced. The farmer is notified with the information regarding field conditions through mobile periodically. This system will be more useful in areas where there is a scarcity of water and will be worth efficient in satisfying its requirements.",
      technologies: [],
      image: "/projects/iot2.jpg"
    },
    {
      title: "Smart Irrigation Control System (IoT) - Second-Year Project",
      location: "University of Westminster, London, United Kingdom (Level 5 - 2nd Year)",
      features: [
        "remotely controlled water pump",
        "Automatic/manual mode",
        "humidity and water pump status display",
        "Irrigation can be triggered in the Web user interface. In this case, the pump will start for 10s. You can also use the automatic mode. In this case, you set threshold soil humidity in the Web interface. If soil humidity drops below this value pump will switch on for 5s. After 10 min will again check soil moisture and switch the pump on if needed."
      ],
      technologies: ["Ubidots cloud", "Arduino", "ESP8266 NodeMCU", "Android", "C++", "HTML5", "CSS3", "Bootstrap", "JavaScript", "JSON", "jQuery UI"],
      image: "/projects/Iot2.jpg"
    }
  ]

  const ProjectCard = ({ project, index }: { project: typeof enterpriseProjects[0]; index: number }) => (
    <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
      <p className="text-primary-600 text-sm font-medium mb-3">{project.organization}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      {'link' in project && project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 text-sm font-medium hover:underline">
          View project →
        </a>
      )}
    </AnimatedCard>
  )

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
          <p className="text-gray-600 mb-6">Enterprise, research, and academic projects across industry and academia.</p>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
              <FaGithub className="w-4 h-4" /> GitHub
            </a>
            <a href={profileLinks.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-500 transition-colors">
              <SiGooglescholar className="w-4 h-4" /> Google Scholar
            </a>
            <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
              <FaLinkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enterprise & Industry Projects</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {enterpriseProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Projects</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {researchProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Academic IoT Projects</h2>
        </AnimatedSection>
        <div className="space-y-12">
          {academicProjects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 0.15} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                {project.image && (
                  <div className="md:w-1/3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                )}
                <div className={`${project.image ? 'md:w-2/3' : 'w-full'} p-8`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-primary-600 font-medium mb-4">{project.location}</p>
                  
                  {project.abstract && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Abstract:</h3>
                      <p className="text-gray-700 leading-relaxed">{project.abstract}</p>
                    </div>
                  )}

                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Irrigation system features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.technologies && project.technologies.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  )
}
