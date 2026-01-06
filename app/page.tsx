'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaInstagram,
  FaPython,
  FaJava,
  FaJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt
} from 'react-icons/fa'
import { 
  SiGo,
  SiR,
  SiJulia,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiGooglecloud,
  SiMicrosoftazure,
  SiSpring,
  SiJenkins,
  SiJunit5
} from 'react-icons/si'

export default function Home() {
  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com/GSam_Stack', text: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/GayanSamuditha', text: 'Github' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/gayan-samuditha-023013114/', text: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:gayancwru@gmail.com', text: 'Email' },
    { icon: FaInstagram, href: 'https://www.instagram.com/gayya_syack/', text: 'Instagram' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Research Experience
  const researchExperience = [
    {
      company: "Case Western Reserve University, School of Medicine",
      location: "Ohio, United States",
      role: "Research Assistant - Medical Imaging, Genetic Informatics, Deep Learning",
      period: "2023",
      achievements: [
        "Designed and implemented production-grade brain MRI analysis pipelines using the ANTsX ecosystem (ANTsPy/ANTsR/ANTsRNet) with longitudinal registration, deep learning-based brain extraction, tissue segmentation, and cortical thickness (DiReCT) to generate imaging-derived phenotypes (IDPs) from ADNI MRI data.",
        "Built scalable Python and R workflows to process T1/T2/FLAIR MRI at scale, including N4 bias correction, denoising, and automated quality control, running on HPC nodes with parallelization and job orchestration.",
        "Integrated high-dimensional brain morphology features with GWAS data to run cross-phenotype association analyses (CPASSOC), discovering variants linked to cortical thickness and volumetric changes across normal aging, MCI, and AD.",
        "Engineered patient-level similarity kernels (RBF over FreeSurfer ROIs) to quantify \"AD-likeness,\" enabling clustering, subtype discovery, and risk scoring workflows for downstream modeling.",
        "Developed harmonized multi-cohort datasets by merging imaging, genotype, and cognitive assessments (MMSE, CDR), implementing rigorous data QC, outlier detection, and missing-data handling for modeling and visualization.",
        "Designed and deployed an electronic phenotyping pipeline by transforming raw EHR data into the OMOP Common Data Model and integrating with OHDSI Broadsea (Atlas, HADES, Ares) in Docker, enabling large-scale observational studies.",
        "Led development of an unsupervised evaluation framework for pre-trained DNA language model embeddings (RankMe, NESum, StableRank) and released the benchmarking toolkit as the open-source embedding-quality Python package."
      ]
    }
  ]

  // Professional Experience
  const professionalExperience = [
    {
      company: "Virtusa Corporation - ETDS Segment (Enterprise Transformation & Digital Solutions)",
      location: "Colombo, Western Province, Sri Lanka (Remote)",
      role: "Associate Technical Lead",
      period: "Dec 2022 - Jul 2023 (8 months)",
      achievements: [
        "Working on Enterprise Transformation & Digital Solutions segment, utilizing digital technologies to upgrade existing business processes and customer experiences.",
        "Technologies: Spring, SpringBoot, Hibernate, OracleSQL, Microservices, API Gateways, OAuth 2.0, Azure Cloud."
      ]
    },
    {
      company: "Virtusa Corporation - ETDS Segment",
      location: "Colombo, Western Province, Sri Lanka",
      role: "Senior Software Engineer",
      period: "Jun 2022 - Jan 2023 (8 months)",
      achievements: [
        "Working on Enterprise Transformation & Digital Solutions segment, focusing on digital transformation to upgrade business processes and customer experiences.",
        "Technologies: Spring, SpringBoot, Hibernate, OracleSQL, Microservices, API Gateways, OAuth 2.0, Azure Cloud."
      ]
    },
    {
      company: "Virtusa Corporation - ETDS Segment",
      location: "Colombo, Western Province, Sri Lanka",
      role: "Senior Software Engineer",
      period: "Jun 2022 - Dec 2022 (7 months)",
      achievements: [
        "Working on Enterprise Transformation & Digital Solutions segment, utilizing digital technologies for business transformation."
      ]
    },
    {
      company: "Virtusa Corporation - Iron Mountain (Client)",
      location: "Colombo, Western, Sri Lanka / Collegeville, Pennsylvania, USA",
      role: "Software Engineer",
      period: "May 2021 - May 2022 (1 year 1 month)",
      achievements: [
        "Working on TMT East segment Iron Mountain Team at Virtusa USA. Client Company - Iron Mountain Corporation.",
        "Software engineer on the Sierra26 product engineering team. SIERRA26 is an all-in-one solution for records and information management, leveraging Iron Mountain's industry-leading capabilities for offsite document storage, secure shredding, and document scanning.",
        "Helping businesses stay on top of legal requirements and records retention policies by managing the entire process.",
        "More info: https://discovery.sierra26.com/",
        "Tech Stack: JavaEE, Spring, SpringBoot, Hibernate, OracleDB, JUnit5, Jest, Google Cloud Platform."
      ]
    },
    {
      company: "Virtusa Corporation - Iron Mountain (Client)",
      location: "Sri Lanka / Boston, USA",
      role: "Software Engineer",
      period: "Aug 2020 - Apr 2021 (9 months)",
      achievements: [
        "Working on Virtusa client project - Iron Mountain. Iron Mountain Incorporated (NYSE: IRM) is a global business dedicated to storing, protecting, and managing information and assets.",
        "Managing their client record management platform. Working on a team transforming the current IRM platform to cloud-based platform (R&D)."
      ]
    },
    {
      company: "Virtusa Corporation - Modjoul Engineering & AWS (Client)",
      location: "Colombo, Western, Sri Lanka / South Carolina, USA",
      role: "Software Engineer",
      period: "Mar 2020 - Jul 2020 (5 months)",
      achievements: [
        "The Modjoul platform aimed to tackle multifaceted challenges by leveraging a heterogeneous IoT-based infrastructure, facilitating seamless integration of worker-generated data from wearables (SmartBelt) alongside machine-oriented data from diverse equipment (forklifts, trucks, factory machinery), and structured/unstructured corporate data.",
        "Actively contributed to strategic transformation of the existing Modjoul platform, transitioning architecture to microservices paradigm utilizing NodeJS and Kubernetes stack for greater modularity, scalability, and flexibility.",
        "Technology Stack (R&D): NodeJS, React, React Native, Redux, Angular, JavaScript, TypeScript, Express JS, HTML5, CSS3, jQuery, Bootstrap5, RESTful APIs, SOAP APIs, Jira, Spock, Jest, Mocha, AWS (Cognito, VPC, Code Commit, S3, Code Build, Code Pipeline, Tesseract, EC2, RDS, API Gateway, CloudFront), GitHub, GitLab CI/CD, CircleCI, Docker, Kubernetes."
      ]
    },
    {
      company: "Virtusa Corporation - British Telecommunication (Client)",
      location: "Colombo, Western, Sri Lanka / United Kingdom",
      role: "Associate Software Engineer",
      period: "Dec 2019 - Mar 2020 (4 months)",
      achievements: [
        "Working with Virtusa client – British Telecommunication in the UK. Trained for BT client-specific project based on Microservices and API management.",
        "Worked with business domain experts on understanding and designing integration use cases for given business API. The project was for financial sector in UK.",
        "Worked with internal teams to develop the current platform and tools."
      ]
    },
    {
      company: "Virtusa Corporation - British Telecommunication (Client)",
      location: "Colombo, Western Province, Sri Lanka (Remote)",
      role: "External Consultant",
      period: "Aug 2018 - Nov 2019 (1 year 4 months)",
      achievements: [
        "Part-time external consultant role working on British Telecommunication projects."
      ]
    },
    {
      company: "Virtusa Corporation - Global Technology Office (GTO)",
      location: "Colombo, Western, Sri Lanka",
      role: "Software Engineer Intern - Research and Development",
      period: "Jun 2017 - Jul 2018 (1 year 2 months)",
      achievements: [
        "Software Engineer Intern at the Global Technology Office (GTO) of Virtusa Corporation (NASDAQ: VRTU), working on cutting-edge R&D initiatives aimed at advancing engineering excellence.",
        "Member of Speed Cloud Platform Team and ERA Platform Team, contributing to transformative projects leveraging advanced technologies and architectures.",
        "GTO Solution Suite initiative designed to accelerate and optimize the software development life cycle (SDLC) by reducing complexity and volume of work associated with large development projects.",
        "Projects – Industry Experienced:",
        "• GTO Project: ERA+ (Enterprise SDLC dashboarding and gamification)",
        "• GTO Project: AITEST (Intelligent Test Management and Optimization Tool)",
        "• GTO Project: LUMOS (Intelligent Requirement Clarity Assessment Framework)",
        "• GTO Project: ACCELLO (Accelerating Software Robotics)",
        "• GTO Project: CENTROID (Enterprise-grade Digital Test Automation tool)",
        "• GTO Project: AIRIS (Intelligent Requirement Capturing Platform)"
      ]
    },
    {
      company: "University of Westminster",
      location: "London, United Kingdom",
      role: "Visiting Lecturer",
      period: "Spring 2022",
      achievements: [
        "Taught Concurrent Programming and supervised final-year research projects, mentoring students on multithreading, synchronization, and applied software engineering practices."
      ]
    }
  ]

  // Projects
  const projects = [
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

  // Research Projects
  const researchProjects = [
    {
      title: "Deep Learning Based Early Stage Clinical Detection of Tuberculosis Diseases Using Chest X-Rays",
      abstract: "Tuberculosis (TB) is an infectious illness that mostly affects the lungs. Tuberculosis bacteria spread from person to person by small droplets sprayed into the air by coughs and sneezes. When someone with untreated, active TB coughs, talks, sneezes, spits, laughs or sings, this might happen. Although TB is infectious, it is difficult to catch. You are significantly more likely to catch TB from someone with whom you live or work than from a stranger. Most persons with active tuberculosis who have had adequate medication therapy for at least two weeks are no longer infectious. There are some Tuberculosis infected areas that are small enough to be inviable to the naked eye and Chest X-ray images of Tuberculosis are frequently wrongly categorized with other diseases with similar radiologic patterns, which can lead to patients who received incorrect medication and worsen their health. Although hospitals in Sri Lanka have well-trained and professional personnel, they lack cutting-edge equipment, which may cause the diagnosing process to be slowed. Using cutting-edge techniques like Deep Learning, Image Processing, and Artificial Intelligence, we would be able to create and deploy a system that might affect TB diagnosis in seconds.",
      domains: ["Tuberculosis", "Deep Learning - Convolutional Neural Network", "Medical Imaging"]
    },
    {
      title: "Early Stage Cardiovascular Clinical Diagnosis: Approach of Convolutional Neural Network to Classify the Level of Left Ventricular Ejection Fraction from Echocardiography Electronic Health Records",
      abstract: "This research study applied a deep learning model to classify the levels of left ventricular ejection fraction using clinical stages data - text data records in nearly 950 echocardiography scan reports from different cardiovascular patients in Cardiovascular Wards. Currently, Cardiologists and Cardiothoracic surgeons are manually reviewing the clinical reports, especially patients' echocardiography reports to diagnose the cardiovascular clinical stage of left ventricular ejection fraction (LVEF). Although, there are several ways have been made to automate this cardiovascular clinical process to extract information from clinical reports, especially from echocardiography reports, currently, there are limited research studies for analyzing cardiovascular clinical trials. This research study focused on establishing some baseline performance measures using a 1- dimensional convolutional neural network (CNN) and determining strategies for improving classification precision. Currently, we are in the first stage of development of the application. The deep learning model results were promising but were unable to exceed precision or F-scores of 80% for mild, moderate, or severe LVEF; irrespective of how the training data was sampled, how deeply connected the neural network layers were, or well the model was tuned. This solution strongly ropes the need to develop a break-apart algorithm that could help capture conceptual, contextual, and measurement features from the ECHO report.",
      domains: ["Cardiovascular Diseases", "Clinical trials", "Electronic Health Records (EHR)", "Echocardiography", "Natural Language Processing (NLP)", "Text Classification"]
    },
    {
      title: "Deep Learning Medical Imaging for Early Clinical Stage Identification of Diabetic Retinopathy Detection",
      abstract: "Diabetic Retinopathy is a complication based on patients suffering from type-1 or type-2 diabetes. Early detection is essential as complications can lead to vision problems such as retinal detachment, vitreous hemorrhage and glaucoma. The principal stages of diabetic retinopathy are non-Proliferative diabetic retinopathy and Proliferative diabetic retinopathy. In this paper, we propose a transfer learning based CNN architecture on colour fundus photography that performs relatively well on a much smaller dataset of skewed classes of 3050 training images and 419 validation images in recognizing classes of Diabetic Retinopathy from hard exudates, blood vessels and texture. This model is extremely robust and lightweight, garnering a potential to work considerably well in small real time applications with limited computing power to speed up the screening process. The dataset was trained on Google Colab. We trained our model on 4 classes - I)No DR ii)Mild DR iii)Moderate DR iv)Proliferative DR, and achieved a Cohens Kappa score of 0.8836 on the validation set along with 0.9809 on the training set.",
      domains: []
    },
    {
      title: "Detection of Changes in Mindfulness by Monitoring Meditation Sessions Using Neural Networks Collaboration with Multi-Agent Systems",
      abstract: "Meditation has gained a lot of attraction in the modern world. In most meditation centers, novice meditators follow the wrong way because they cannot track the progress and get proper feedback. In this research, an attempt was made to monitor EEG signals of meditation sessions with ANN technology and a multi-agent-based approach. The proposed solution has the ability to collect the EEG data from expert meditators which have been used to train the artificial neural network. Next, the EEG signals of the novice meditator were given as the input to the trained ANN for classification which outputs whether it is successful or unsuccessful. EEG capturing device has been used to collect the EEG data. The multi-agent system which has been implemented to run java based jade platform will interpret the EEG signals and provide the recommended meditation technique. This experiment used 25 meditators. Next, the meditators were asked to stay without meditating. It has been proved that meditation session has the ability to provide more attention. The accuracy rate is 72%. The multi-agent system is successfully providing feedback by recommending the meditation technique.",
      domains: []
    },
    {
      title: "Intelligent Solution for Early Stage Prediction of Cardiovascular Diseases Using Artificial Neural Network and Multi-Agent Systems",
      abstract: "Cardiovascular disease is one of the leading causes of death around the world and remains a major public health problem. Apart from that, early-stage cardiovascular disease diagnosis and cardiovascular disease prediction also signify a major concern in public health. Most of the time, misdiagnosis of cardiovascular diseases is a very common occurrence throughout the world, for cardio specialists. This platform consists with main three main modules, which are web dashboard application, machine learning module, and machine learning web service modules. The machine learning module is based on an Artificial Neural network that was designed using the TensorFlow Machine Learning framework. The web dashboard was designed using the Flask framework and which allows the end user to input clinical variables for diagnosing the process for predicting the cardiovascular risk stage. The machine learning web service module was based on REST web services that handle the request-reply between the ML module and the frontend dashboard. The evaluation of the proposed machine learning classifier model performance (accuracy, sensitivity, and specificity) in this research study showed that the proposed model predicted the class label correctly (above 73%). More than seventy-three percent of respondents (including cardio specialists) who participated in the evaluation session agreed strongly agreed that this research followed medical procedures and that the result can support early-stage cardiovascular disease diagnosis analysis.",
      domains: []
    }
  ]

  // Publications
  const publications = [
    {
      authors: "Awasthi, Raghav, Ph.D, Gayan Samuditha, Xiaofeng Zhu, Ph.D, et al.",
      title: "Unsupervised Evaluation of Pre-Trained DNA Language Model Embeddings",
      journal: "BMC Genomics",
      volume: "26",
      issue: "1",
      pages: "710",
      year: "2025",
      doi: "10.1186/s12864-025-11913-2",
      status: "published"
    },
    {
      title: "Recent Advances in Utilizing Language Models for Omics Sequence Modeling: A Comprehensive Scoping Review",
      status: "in_progress"
    }
  ]

  const conferencePosters = [
    {
      conference: "ASHG 2023 Poster",
      title: "Towards a Comprehensive Electronic Phenotyping in the UK Biobank: Initial Steps using the OMOP CDM, Delphyne, and OHDSI Tools",
      authors: "Diya Yang, Gayan Samuditha Mend Mend Arachchige, William S. Bush, PhD",
      affiliation: "Department of Population and Quantitative Health Sciences, School of Medicine, Case Western Reserve University, OH, USA"
    },
    {
      conference: "ASHG 2024 Poster",
      title: "Cross-Phenotype Genome-Wide Association Study of Brain Morphology Features Extracted from Brain MRI Images",
      authors: "Gayan Samuditha Mend Mend Arachchige, Raghav Awasthi, PhD, Xiaofeng Zhu, PhD",
      affiliation: "Department of Population and Quantitative Health Sciences, School of Medicine, Case Western Reserve University, Cleveland, OH, USA"
    }
  ]

  const honors = [
    {
      title: "Product Innovation Award – Research & Development at Virtusa Corporation",
      description: "For innovation and contribution to the ACCELLO product."
    },
    {
      title: "Product Innovation Award – Research & Development at Virtusa Corporation",
      description: "For innovation and contribution to the CENTROID product."
    }
  ]

  // Skill icon mapping with colors
  const getSkillIcon = (skill: string) => {
    const skillLower = skill.toLowerCase()
    const iconMap: Record<string, { icon: any, color: string }> = {
      'python': { icon: FaPython, color: '#3776ab' },
      'java': { icon: FaJava, color: '#ed8b00' },
      'go': { icon: SiGo, color: '#00add8' },
      'golang': { icon: SiGo, color: '#00add8' },
      'javascript': { icon: FaJs, color: '#f7df1e' },
      'r': { icon: SiR, color: '#276dc3' },
      'julia': { icon: SiJulia, color: '#9558b2' },
      'tensorflow': { icon: SiTensorflow, color: '#ff6f00' },
      'pytorch': { icon: SiPytorch, color: '#ee4c2c' },
      'keras': { icon: SiKeras, color: '#d00000' },
      'apache spark': { icon: SiApachespark, color: '#e25a1c' },
      'apache kafka': { icon: SiApachekafka, color: '#231f20' },
      'kubeflow': { icon: FaDocker, color: '#326ce5' },
      'apache airflow': { icon: SiApacheairflow, color: '#017cee' },
      'mlflow': { icon: FaDocker, color: '#0194e2' },
      'spring': { icon: SiSpring, color: '#6db33f' },
      'spring boot': { icon: SiSpring, color: '#6db33f' },
      'docker': { icon: FaDocker, color: '#2496ed' },
      'linux': { icon: FaLinux, color: '#fcc624' },
      'aws': { icon: FaAws, color: '#ff9900' },
      'google cloud': { icon: SiGooglecloud, color: '#4285f4' },
      'azure': { icon: SiMicrosoftazure, color: '#0078d4' },
      'jenkins': { icon: SiJenkins, color: '#d24939' },
      'junit': { icon: SiJunit5, color: '#25a162' },
      'git': { icon: FaGitAlt, color: '#f05032' },
      'github': { icon: FaGitAlt, color: '#181717' },
      'github actions': { icon: FaGitAlt, color: '#2088ff' },
      'bash': { icon: FaLinux, color: '#4eaa25' },
      'powershell': { icon: FaLinux, color: '#012456' },
      'sql': { icon: FaDocker, color: '#336791' },
      'oauth': { icon: SiSpring, color: '#eb5424' },
    }
    
    // Check for partial matches
    for (const [key, data] of Object.entries(iconMap)) {
      if (skillLower.includes(key)) {
        return data
      }
    }
    return null
  }

  // Skills
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python (primary)", "Java", "Go (Golang)", "JavaScript", "R", "Julia"]
    },
    {
      title: "Scripting",
      skills: ["Bash", "PowerShell"]
    },
    {
      title: "Data & Databases",
      skills: ["SQL", "Relational databases", "NoSQL (document & key-value stores)"]
    },
    {
      title: "Machine Learning",
      skills: ["PyTorch Lightning", "TensorFlow", "Keras", "scikit-learn", "Classical ML (classification, regression, clustering)", "Model evaluation & tuning", "Feature engineering"]
    },
    {
      title: "Distributed Systems & MLOps",
      skills: ["Apache Spark", "Apache Kafka", "MLflow", "Kubeflow", "Apache Airflow", "Pipeline orchestration", "Experiment tracking"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Java/Spring Boot microservices", "REST APIs", "OAuth2", "Docker", "Linux", "AWS", "Google Cloud", "Azure"]
    },
    {
      title: "Neuroimaging & Genomics (Domain)",
      skills: ["ANTsX ecosystem", "FreeSurfer", "FSL", "GWAS/PLINK", "CPASSOC", "DNA language models (Nucleotide Transformer, DNA-BERT2, HyenaDNA, GENA-LM, GROVER)"]
    },
    {
      title: "Tooling & Quality",
      skills: ["Git/GitHub", "Jenkins", "GitHub Actions", "JUnit", "SonarQube"]
    }
  ]

  // Selected Technical Projects
  const technicalProjects = [
    {
      title: "Large-Scale Brain MRI Pipeline for Alzheimer's Disease",
      technologies: "Python, ANTsX, FreeSurfer, HPC",
      description: "End-to-end pipeline that processes thousands of MRI scans (T1/T2/FLAIR) to extract cortical thickness, volumes, and regional morphometry, parallelized over HPC nodes with automated QC and logging."
    },
    {
      title: "Electronic Phenotyping on OMOP CDM",
      technologies: "Python, SQL, Docker, OHDSI Broadsea",
      description: "Implemented data transformation from raw EHR exports into OMOP CDM and deployed OHDSI Broadsea stack to enable Atlas-based cohort definition and large-scale phenotyping analysis."
    },
    {
      title: "DNA Language Model Embedding Evaluation Toolkit",
      technologies: "Python, ML, Open Source",
      description: "Developed open-source embedding-quality package benchmarking multiple DNA LMs using unsupervised metrics (RankMe, NESum, StableRank) across diverse genomic datasets."
    }
  ]

  // Articles
  const articles = [
    {
      title: "Embracing Open Science Through Scientific Code",
      href: "/articles/scientific-code",
      description: "Exploring the importance of sharing scientific code and best practices for open science."
    },
    {
      title: "Navigating Social Media as a Modern Scientist",
      href: "/articles/navigating-social-media",
      description: "Guidance on how scientists can effectively use social media in their professional lives."
    },
    {
      title: "Strategic Career Planning for Aspiring Scientists",
      href: "/articles/career-planning",
      description: "Insights on planning and advancing your career in scientific research."
    }
  ]

  const impactCallouts = [
    {
      title: "For Hiring Teams",
      description:
        "Spearheaded digital transformation and platform engineering programs. Deliver production-grade microservices, ML pipelines, and distributed systems with AWS/Azure, ensuring measurable business impact.",
      color: "from-blue-500 to-indigo-500",
      cta: "Discuss Industry Roles",
      href: "#experience"
    },
    {
      title: "For Research Labs",
      description:
        "Lead translational R&D in biomedical imaging and genomics. Published peer-reviewed work, open-source tooling, and multi-cohort studies aligned with precision medicine goals.",
      color: "from-pink-500 to-purple-500",
      cta: "Talk PhD Opportunities",
      href: "#research-projects"
    }
  ]

  const impactHighlights = [
    "50K+ MRI scans harmonized using ANTsX pipelines and OHDSI tooling for cross-cohort research.",
    "Reduced regression QA cycle by 40% through automation platforms (ACCELLO, CENTROID, AITEST).",
    "Deployed ML-backed content services at Virtusa/Iron Mountain powering analytics across distributed teams.",
    "Built scalable DNA language model evaluation toolkit published as open-source for genomics labs."
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Gayan Samuditha
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light">
                Masters Research in <span className="text-blue-600">Biomedical</span> and <span className="text-purple-600">Health Informatics</span>
          </p>
          <p className="text-lg text-gray-600 mb-12 font-light">
                Case Western Reserve University, School of Medicine
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
            {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  const colors = ['text-blue-500', 'text-gray-800', 'text-blue-600', 'text-red-500', 'text-pink-500']
                  return (
                <a
                      key={social.text}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                  className={`${colors[idx % colors.length]} hover:scale-110 transition-transform`}
                      aria-label={social.text}
                >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
          </div>

          <div className="space-y-2 text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              Former Associate Technical Lead R&D and Platform engineering, and currently an AI Engineer, Ph.D. candidate in Biomedical and Health Informatics. I design and ship end-to-end data and ML pipelines across cloud and HPC for Large-Scale Neuro-imaging and Imaging Genomics of Alzheimer's Disease, LLM-based Modeling of Omics data, and ML-powered content platforms.
            </p>
            <p>
              Strong track record in Distributed Systems and MLOps, taking models from research prototypes to reliable, observable production services.
            </p>
          </div>
          <div className="mt-8 text-sm text-gray-500 font-light">
            <p>gayancwru@gmail.com</p>
          </div>
        </div>
      </section>

          <div className="grid gap-4 mt-12 md:grid-cols-2">
            {impactCallouts.map((callout) => (
              <div
                key={callout.title}
                className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${callout.color}`}
              >
                <h3 className="text-lg font-semibold mb-2">{callout.title}</h3>
                <p className="text-sm leading-relaxed mb-4">{callout.description}</p>
                <a
                  href={callout.href}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium bg-white text-gray-900 rounded-full hover:bg-gray-100 transition"
                >
                  {callout.cta}
                </a>
              </div>
            ))}
          </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t-2 border-blue-200 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            <span className="border-b-2 border-blue-500 pb-2">About</span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed font-light">
            <p>
              I am currently pursuing MS in Biomedical and Health Informatics (3rd Year, In Progress) at Case Western Reserve University, School of Medicine. I hold a B.Eng. (Hons) in Software Engineering from the University of Westminster, United Kingdom (Sep. 2015 – Jun. 2019), with an Overall Average of 69.25.
            </p>
            <p>
              With over five years of extensive involvement in research across both industrial and academic settings, I have developed deep expertise that bridges hands-on industry applications and advanced academic studies. My professional journey includes significant roles as an Associate Lead Software Engineer, where I honed my skills in engineering research and development, platform engineering, and product development.
            </p>
            <p>
              My research at Case Western Reserve University focuses on large-scale neuroimaging and imaging genomics of Alzheimer's Disease. I work on designing comprehensive brain MRI analysis pipelines using the Advanced Normalization Tools (ANTsX Ecosystem), focusing on Longitudinal Image Registration, Deep Learning-based Brain Extraction, Tissue Segmentation, Cortical Thickness measurement, and Cortical Parcellation to extract Imaging-derived Phenotypes (IDPs) from ADNI MRI data.
            </p>
            <p>
              I also pioneer the application of Large Language Models (LLMs) and Deep Representation Learning to omics data, focusing on enhancing variant interpretation, uncovering hidden genetic patterns influencing brain morphology, and advancing personalized medicine through the integration of Neuro-Imaging and genomic data at scale.
            </p>
            <p>
              I am always open to discussing potential collaborations, research opportunities, or queries related to my field of expertise. With a solid foundation of knowledge and a dynamic set of skills, I am eager to contribute to and collaborate on innovative ventures that push the boundaries of technology and science.
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <a
              href="mailto:gayancwru@gmail.com"
              className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-light shadow-md hover:shadow-lg"
            >
              Contact
            </a>
            <a
              href="/cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-colors font-light"
            >
              CV
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-t-2 border-purple-200 bg-gradient-to-b from-blue-50/30 to-purple-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-purple-500 pb-2">Experience</span>
          </h2>
          
          <div className="mb-20">
            <h3 className="text-xl font-light text-purple-700 mb-8">Research Experience</h3>
            <div className="space-y-12">
              {researchExperience.map((exp, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-8 bg-white/50 p-4 rounded-r-lg shadow-sm">
                  <div className="mb-4">
                    <h4 className="text-lg font-normal text-gray-900 mb-1">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                    <p className="text-base text-gray-700 mb-2">{exp.role}</p>
                    {exp.period && (
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    )}
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-sm text-gray-600 leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light text-blue-700 mb-8">Professional Experience</h3>
            <div className="space-y-12">
              {professionalExperience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-8 bg-white/50 p-4 rounded-r-lg shadow-sm">
                  <div className="mb-4">
                    <h4 className="text-lg font-normal text-gray-900 mb-1">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mb-1">{exp.location}</p>
                    <p className="text-base text-gray-700 mb-2">{exp.role}</p>
                    {exp.period && (
                      <p className="text-sm text-gray-500">{exp.period}</p>
                    )}
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-sm text-gray-600 leading-relaxed">
                        {achievement.startsWith('More info:') ? (
                          <a 
                            href={achievement.split('More info: ')[1]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:underline"
                          >
                            {achievement}
                          </a>
                        ) : (
                          achievement
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-16 px-6 border-t border-gray-200 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            <span className="border-b-2 border-green-500 pb-2">Impact Highlights</span>
          </h2>
          <div className="grid gap-4 text-sm text-gray-700 leading-relaxed md:grid-cols-2">
            {impactHighlights.map((item, index) => (
              <p key={index} className="rounded-xl border-l-4 border-green-500/60 bg-white/70 p-4 shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Technical Projects Section */}
      <section id="technical-projects" className="py-24 px-6 border-t-2 border-green-200 bg-gradient-to-b from-purple-50/30 to-green-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-green-500 pb-2">Selected Technical Projects</span>
          </h2>
          <div className="space-y-12">
            {technicalProjects.map((project, index) => {
              const colors = ['border-l-blue-500', 'border-l-purple-500', 'border-l-green-500']
              return (
                <div key={index} className={`border-l-4 ${colors[index % colors.length]} pl-6 bg-white/60 p-4 rounded-r-lg shadow-sm`}>
                  <h3 className="text-xl font-normal text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.technologies}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t-2 border-orange-200 bg-gradient-to-b from-green-50/30 to-orange-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-orange-500 pb-2">Projects</span>
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => {
              const borderColors = ['border-l-orange-500', 'border-l-green-500', 'border-l-blue-500']
              const bgColors = ['bg-orange-50/40', 'bg-green-50/40', 'bg-blue-50/40']
              return (
              <div key={index} className={`border-l-4 ${borderColors[index % borderColors.length]} pl-6 ${bgColors[index % bgColors.length]} p-4 rounded-r-lg shadow-sm`}>
                <h3 className="text-xl font-normal text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{project.location}</p>
                {project.abstract && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.abstract}</p>
                )}
                {project.features && (
                  <ul className="text-sm text-gray-600 leading-relaxed space-y-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                )}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, idx) => {
                      const tagColors = ['bg-orange-100 text-orange-700 border-orange-300', 'bg-green-100 text-green-700 border-green-300', 'bg-blue-100 text-blue-700 border-blue-300']
                      return (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs border rounded ${tagColors[idx % tagColors.length]}`}
                      >
                        {tech}
                      </span>
                    )
                    })}
                  </div>
                )}
              </div>
            )
            })}
          </div>
        </div>
      </section>

      {/* Research Projects Section */}
      <section id="research-projects" className="py-24 px-6 border-t-2 border-pink-200 bg-gradient-to-b from-orange-50/30 to-pink-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-pink-500 pb-2">Research Projects</span>
          </h2>
          <div className="space-y-16">
            {researchProjects.map((project, index) => {
              const borderColors = ['border-l-pink-500', 'border-l-purple-500', 'border-l-blue-500', 'border-l-green-500', 'border-l-orange-500']
              const bgColors = ['bg-pink-50/40', 'bg-purple-50/40', 'bg-blue-50/40', 'bg-green-50/40', 'bg-orange-50/40']
              return (
              <div key={index} className={`border-l-4 ${borderColors[index % borderColors.length]} pl-6 ${bgColors[index % bgColors.length]} p-4 rounded-r-lg shadow-sm`}>
                <h3 className="text-xl font-normal text-gray-900 mb-6">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.abstract}</p>
                {project.domains && project.domains.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.domains.map((domain, idx) => {
                      const tagColors = ['bg-pink-100 text-pink-700 border-pink-300', 'bg-purple-100 text-purple-700 border-purple-300', 'bg-blue-100 text-blue-700 border-blue-300']
                      return (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs border ${tagColors[idx % tagColors.length]} rounded`}
                      >
                        {domain}
                      </span>
                    )
                    })}
                  </div>
                )}
              </div>
            )
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6 border-t-2 border-indigo-200 bg-gradient-to-b from-pink-50/30 to-indigo-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-indigo-500 pb-2">Publications</span>
          </h2>
          
          <div className="mb-16">
            <h3 className="text-xl font-light text-indigo-700 mb-8">Research Publications</h3>
            <div className="space-y-8">
              {publications.map((pub, index) => {
                const bgColors = ['bg-indigo-50/40', 'bg-purple-50/40', 'bg-blue-50/40']
                return (
                <div key={index} className={`${bgColors[index % bgColors.length]} p-4 rounded-lg border-l-4 border-indigo-500`}>
                  {pub.authors && (
                    <p className="text-sm text-gray-700 mb-2">{pub.authors}</p>
                  )}
                  <h4 className="text-base font-normal text-gray-900 mb-2">{pub.title}</h4>
                  {pub.journal && (
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="italic text-indigo-700">{pub.journal}</span>
                      {pub.volume && `, vol. ${pub.volume}`}
                      {pub.issue && `, no. ${pub.issue}`}
                      {pub.pages && `, p. ${pub.pages}`}
                      {pub.year && `, ${pub.year}`}
                    </p>
                  )}
                  {pub.doi && (
                    <p className="text-sm text-gray-500 mb-2">
                      DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium">
                        {pub.doi}
                      </a>
                    </p>
                  )}
                  {pub.status === "in_review" && (
                    <span className="inline-block px-2 py-1 text-xs text-yellow-700 bg-yellow-100 border border-yellow-300 rounded">
                      In Review
                    </span>
                  )}
                  {pub.status === "in_progress" && (
                    <span className="inline-block px-2 py-1 text-xs text-blue-700 bg-blue-100 border border-blue-300 rounded">
                      In Progress
                    </span>
                  )}
                  {pub.status === "published" && (
                    <span className="inline-block px-2 py-1 text-xs text-green-700 bg-green-100 border border-green-300 rounded">
                      Published
                    </span>
                  )}
                </div>
              )
              })}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-xl font-light text-purple-700 mb-8">Conference Posters</h3>
            <div className="space-y-8">
              {conferencePosters.map((poster, index) => {
                const bgColors = ['bg-purple-50/40', 'bg-pink-50/40']
                const borderColors = ['border-purple-500', 'border-pink-500']
                return (
                <div key={index} className={`${bgColors[index % bgColors.length]} p-4 rounded-lg border-l-4 ${borderColors[index % borderColors.length]}`}>
                  <p className="text-sm text-purple-600 font-medium mb-2">{poster.conference}</p>
                  <h4 className="text-base font-normal text-gray-900 mb-2">{poster.title}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-normal">Authors:</span> {poster.authors}
                  </p>
                  <p className="text-sm text-gray-500">
                    {poster.affiliation}
                  </p>
                </div>
              )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-light text-yellow-600 mb-8">Honors and Awards</h3>
            <div className="space-y-6">
              {honors.map((honor, index) => {
                const bgColors = ['bg-yellow-50/40', 'bg-amber-50/40']
                return (
                <div key={index} className={`${bgColors[index % bgColors.length]} p-4 rounded-lg border-l-4 border-yellow-500`}>
                  <h4 className="text-base font-normal text-gray-900 mb-1">{honor.title}</h4>
                  <p className="text-sm text-gray-600">{honor.description}</p>
                </div>
              )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 border-t-2 border-teal-200 bg-gradient-to-b from-indigo-50/30 to-teal-50/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-teal-500 pb-2">Education</span>
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">Case Western Reserve University, School of Medicine</h3>
              <p className="text-base text-gray-600 mb-1">MS in Biomedical and Health Informatics</p>
              <p className="text-sm text-gray-500 mb-4">Ohio, United States</p>
              <p className="text-sm text-gray-600">3rd Year (In Progress)</p>
            </div>
            <div>
              <h3 className="text-xl font-normal text-gray-900 mb-2">University of Westminster</h3>
              <p className="text-base text-gray-600 mb-1">B.Eng. (Hons) in Software Engineering</p>
              <p className="text-sm text-gray-500 mb-4">London, United Kingdom</p>
              <p className="text-sm text-gray-600">Sep. 2015 – Jun. 2019; Overall Avg: 69.25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-24 px-6 border-t-2 border-cyan-200 bg-gradient-to-b from-teal-50/30 to-cyan-50/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-cyan-500 pb-2">Teaching</span>
          </h2>
          <div>
            <h3 className="text-xl font-normal text-gray-900 mb-2">Visiting Lecturer</h3>
            <p className="text-base text-gray-600 mb-1">University of Westminster</p>
            <p className="text-sm text-gray-500 mb-4">Spring 2022, London, United Kingdom</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Taught Concurrent Programming and supervised final-year research projects, mentoring students on multithreading, synchronization, and applied software engineering practices.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-t-2 border-violet-200 bg-gradient-to-b from-cyan-50/30 to-violet-50/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-16">
            <span className="border-b-2 border-violet-500 pb-2">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => {
              const categoryColors = ['text-blue-600', 'text-purple-600', 'text-green-600', 'text-orange-600', 'text-pink-600', 'text-indigo-600', 'text-teal-600', 'text-cyan-600']
              const borderColors = ['border-blue-300', 'border-purple-300', 'border-green-300', 'border-orange-300', 'border-pink-300', 'border-indigo-300', 'border-teal-300', 'border-cyan-300']
              return (
              <div key={index} className="bg-white/60 p-4 rounded-lg shadow-sm">
                <h3 className={`text-base font-normal ${categoryColors[index % categoryColors.length]} mb-4 border-b-2 ${borderColors[index % borderColors.length]} pb-2`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => {
                    const iconData = getSkillIcon(skill)
                    const IconComponent = iconData?.icon
                    const iconColor = iconData?.color
                    return (
                      <span
                        key={sIndex}
                        className="px-2 py-1 text-xs text-gray-600 border border-gray-300 flex items-center gap-1.5 hover:border-gray-400 transition-colors"
                      >
                        {IconComponent && (
                          <IconComponent 
                            className="w-3.5 h-3.5" 
                            style={{ color: iconColor }}
                          />
                        )}
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
            })}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-24 px-6 border-t-2 border-rose-200 bg-gradient-to-b from-violet-50/30 to-rose-50/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            <span className="border-b-2 border-rose-500 pb-2">Articles</span>
          </h2>
          <p className="text-sm text-gray-600 mb-12">
            Articles written as part of my classes and scientific discussion, based on <em className="text-rose-600">How To Be A Modern Scientist</em> by Jeff Leek.
          </p>
          <div className="space-y-6">
            {articles.map((article, index) => {
              const linkColors = ['hover:border-blue-500', 'hover:border-purple-500', 'hover:border-green-500']
              return (
              <Link
                key={index}
                href={article.href}
                className={`block border-b-2 border-gray-200 pb-6 ${linkColors[index % linkColors.length]} transition-colors bg-white/40 p-4 rounded-lg hover:shadow-md`}
              >
                <h3 className="text-base font-normal text-gray-900 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
                  </Link>
            )
            })}
          </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-2 border-gray-300 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 font-light">
            © {new Date().getFullYear()} Gayan Samuditha
          </p>
        </div>
      </footer>
    </div>
  )
}
