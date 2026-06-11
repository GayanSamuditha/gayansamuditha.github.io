'use client'

import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'

export default function Experience() {
  const researchExperience = [
    {
      company: "Case Western Reserve University, School of Medicine",
      location: "Cleveland, OH, United States",
      role: "Graduate Research Engineer – Neuroimaging, Multimodal Integration, and Biomedical Data Harmonization",
      period: "Jul 2023 – May 2026",
      achievements: [
        "🧠 Prof. Xiaofeng Zhu Lab – Imaging Genomics",
        "Built and stabilized cohort-scale neuroimaging analysis pipelines on the ADNI dataset, processing nearly 3,000 MRI subjects end-to-end using ANTsX, ANTsPyNet, and DiReCT for skull stripping, brain extraction, tissue segmentation, and cortical thickness estimation.",
        "Designed reproducible HPC-orchestrated workflows on Linux clusters for high-throughput MRI preprocessing with structured output organization, automated QC, and failure inspection for thousands of jobs.",
        "Integrated a 619-subject cohort combining imaging-derived phenotypes, genotype/GWAS variants, and clinical variables into harmonized tables for statistical modeling and machine learning.",
        "Supported a cross-phenotype GWAS of brain-morphology features using vision-transformer-based representations (ASHG 2024 poster).",
        "Converted scientific requirements into reusable analysis software, including QC dashboards and data dictionaries, based on feedback from clinicians and researchers.",
        "🧬 Prof. William S. Bush Lab – Computational Big Data Lab",
        "Engineered transformation pipelines converting UK Biobank data to OMOP Common Data Model (CDM 5.3.1) for 502,000+ participants using Delphyne, PostgreSQL, and Broadsea, supporting OHDSI tools like Atlas and Hades (ASHG 2023 poster).",
        "Architected a PostgreSQL platform with pgvector/pgvectorscale for biomedical data harmonization using semantic retrieval, Nomic embeddings, and local Llama inference to standardize sensitive dbGaP research variables without external API dependencies.",
        "Developed ETL workflows for biomedical data dictionaries with automated quality checks and human-reviewable mapping outputs.",
        "Built Python pipelines for AlphaFold 3 and DNA language model embeddings, automating input generation, batch HPC execution, and quantitative quality metrics (BMC Genomics, 2025).",
        "Designed PostgreSQL schemas and semantic search workflows for large-scale biomedical metadata to support AI-assisted variable mapping."
      ]
    }
  ]

  const professionalExperience = [
    {
      company: "Virtusa Corporation — EAG · ETDS Organization",
      location: "Colombo, Western Province, Sri Lanka (On-site)",
      role: "Associate Technical Lead",
      period: "Jan 2023 – Jul 2023 (7 months) · 6 yrs 2 mos total at Virtusa",
      achievements: [
        "Led a 19-member cross-functional delivery team (Engineering, QA, Quality, DevOps) shipping enterprise product and platform releases.",
        "Managed sprint execution, roadmap breakdowns, estimations, task allocation, dependency management, release planning, and delivery governance.",
        "Reported directly to the VP of Engineering with weekly status updates, delivery forecasts, risk escalations, and resourcing updates.",
        "Acted as technical owner for core services and integrations; led architecture/design reviews, coding standards, and implementation-quality reviews.",
        "Managed end-to-end release processes including QA alignment, release gates, CI/CD readiness, deployment coordination, and post-release stabilization.",
        "Integrated OpenAI APIs into Virtusa V+ Assistant for skill updates, skill matching, project allocation, and job description generation.",
        "Built Azure Logic Apps workflows automating 40+ talent, resource allocation, hiring, and staffing workflows for a 30,000+ employee organization.",
        "Delivered ML-powered content classification for high-volume physical and digital documents, improving search, analytics, and compliance workflows.",
        "Contributed to Virtusa Enterprise Cloud Platform development for scalability and modularity to accelerate digital transformation.",
        "Integrated Azure, AWS, and GCP with legacy systems for AI/ML/GenAI readiness, cost efficiency, and security through evolutionary migration."
      ]
    },
    {
      company: "Virtusa Corporation — Iron Mountain (Client)",
      location: "Colombo, Sri Lanka (On-site)",
      role: "Senior Software Engineer",
      period: "Sep 2021 – Dec 2022 (1 yr 4 mos)",
      achievements: [
        "Senior engineer on Virtusa's Iron Mountain product engineering team for TMT East, supporting Smart Sort Mobile App, Sierra26, SecureBase, and SafeKeeper PLUS.",
        "Sierra26: SMB-focused records and information management platform for offsite document storage, barcode inventory tracking, reporting, secure handling, scanning, and warehouse operations.",
        "Modernized legacy SecureBase workflows via Sierra26 dashboard features for barcode box scanning, inventory tracking, reporting, and warehouse operations.",
        "Engineered Java microservices, backend APIs, services, and CLI tools for SafeKeeper PLUS covering inventory tracking, retrieval, delivery, destruction, billing, reporting, and compliance.",
        "Built user-facing dashboard workflows and frontend components for inventory visibility, records movement, warehouse activities, and operational reporting.",
        "Integrated Sierra26 frontend workflows with backend APIs and external services using React Native, AngularJS, and Java.",
        "Supported production troubleshooting, workflow validation, defect fixes, and iterative enhancements for records-management platforms.",
        "Collaborated with engineering, QA, DevOps, and client stakeholders to translate records-management and logistics requirements into reliable product workflows."
      ]
    },
    {
      company: "Virtusa Corporation — Iron Mountain | ReWrite Smart Sort (Client)",
      location: "Colombo, Sri Lanka (On-site)",
      role: "Software Engineer",
      period: "Apr 2020 – Aug 2021 (1 yr 5 mos)",
      achievements: [
        "Modernized and rewrote core workflows for Iron Mountain's Smart Sort Mobile App — a React Native handheld-scanner application for high-volume records cleanup.",
        "Rewrote 5 core workflows in React Native: barcode scanning, manual File ID capture, real-time disposition decisions, reboxing confirmation, exception handling, and reporting.",
        "Integrated the mobile app with backend APIs and GCP-based data pipelines to synchronize scanned records with downstream inventory and management systems.",
        "Enabled file-level visibility and defensible disposition, contributing to documented client storage cost reductions of 33–40%+.",
        "Built workflow-driven mobile screens to reduce manual lookup effort and improve scan-to-disposition usability for warehouse teams.",
        "Handled production troubleshooting, defect fixes, and iterative enhancements to improve application stability and operational accuracy."
      ]
    },
    {
      company: "Virtusa Corporation — Modjoul (Client)",
      location: "Colombo, Sri Lanka (On-site)",
      role: "Associate Software Engineer",
      period: "Dec 2019 – Mar 2020 (4 months)",
      achievements: [
        "Engineered backend services and high-throughput data pipelines for an AWS-based IoT analytics platform processing sensor data from thousands of SmartBelt wearable devices.",
        "Built product dashboards and reporting workflows surfacing safety-risk signals, device activity, operational trends, and workplace productivity insights for enterprise users.",
        "Developed near real-time analytics workflows transforming wearable sensor streams into actionable safety insights for injury prevention and operational decision-making.",
        "Implemented real-time alerting and device-health monitoring to track connectivity, data quality, and safety-event signals across deployed wearables.",
        "Supported backend API development, data modeling, dashboard validation, production troubleshooting, and iterative platform improvements.",
        "More info: https://www.virtusa.com/success-stories/aws-based-iot-data-aggregation-analytics-platform"
      ]
    },
    {
      company: "Virtusa Corporation — Global Technology Office (GTO)",
      location: "Colombo, Sri Lanka (Remote)",
      role: "External Consultant (Software Engineer)",
      period: "Aug 2018 – Nov 2019 (1 yr 4 mos) · Part-time",
      achievements: [
        "Worked as product and support engineer across internal R&D products: InsightLive, LUMOS, AITEST, ERA+, ACCELLO, CENTROID, and AIRIS.",
        "Engineered framework components for Virtusa InsightLive, a cloud-native SDLC gamification and engineering-intelligence platform on AWS and GCP.",
        "Supported product users via troubleshooting, workflow validation, UI improvements, backend/API defect fixes, and coordinated enhancements from engineering teams.",
        "Enhanced test-management accelerators (Lumos Test, AITEST) for backend workflows, UI flows, test design, execution, analytics, and reporting.",
        "Contributed to reusable SDLC/DevSecOps components, delivery telemetry dashboards, and engineering governance accelerators.",
        "Citi Telemetry Platform: Architected backend ETL pipelines, data models, and high-volume telemetry layers using ELK Stack and Apache POI; built Citi SDLC Telemetry System with KPI/metrics logic and customized Kibana dashboards."
      ]
    },
    {
      company: "Virtusa Corporation — Global Technology Office (GTO)",
      location: "Colombo, Sri Lanka (On-site)",
      role: "Software Engineer Intern",
      period: "Jun 2017 – Jul 2018 (1 yr 2 mos)",
      achievements: [
        "Member of Speed Cloud Platform Team and ERA Platform Team, contributing to GTO R&D initiatives advancing engineering excellence.",
        "ACCELLO (AI-native QA & digital test automation): Built backend services and workflow components to automate regression workflows and reduce manual QA effort.",
        "More info: https://www.virtusa.com/lp/seamless-qa-without-the-slowdowns",
        "CENTROID (RPA-based E2E test automation): Developed backend workflow logic and UI workflows converting manual regression scenarios into reusable automated components.",
        "More info: https://www.virtusa.com/news-room/press-releases/year_2017/September/33535",
        "LUMOS (NLP-driven requirement clarity): Implemented backend and front-end workflows with Jira-integrated feedback flows to improve requirement quality.",
        "More info: https://marketplace.atlassian.com/archive/1222231",
        "AIRIS (Business process modeling): Developed backend workflows, APIs, and UI flows modeling business processes into structured requirement artifacts.",
        "ERA+ (SDLC KPI surfacing): Built gamification dashboards and visualization workflows tracking delivery performance and engineering productivity.",
        "More info: https://www.virtusa.com/solutions/open-talent-platform",
        "Lumos Test & AITEST: Enhanced test management accelerators for test design, execution, analytics, and reporting."
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

  const renderAchievement = (achievement: string) => {
    if (achievement.startsWith('More info:')) {
      const url = achievement.split('More info: ')[1]
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-800 underline"
        >
          {achievement}
        </a>
      )
    }
    return achievement
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-gray-600 mb-12">
            Full career history also on{' '}
            <a href="https://www.linkedin.com/in/gayan-samuditha-023013114/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn</a>
            {' '}and research on{' '}
            <a href="https://scholar.google.com/citations?user=ARKdd88AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Scholar</a>.
          </p>
        </AnimatedSection>

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
                  {exp.period && <p className="text-gray-600 mb-4">{exp.period}</p>}
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li
                        key={aIndex}
                        className={`leading-relaxed flex items-start ${
                          achievement.startsWith('🧠') || achievement.startsWith('🧬')
                            ? 'text-gray-900 font-semibold mt-2'
                            : 'text-gray-700'
                        }`}
                      >
                        {!(achievement.startsWith('🧠') || achievement.startsWith('🧬')) && (
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                        )}
                        <span>{renderAchievement(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        <div>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Experience (6+ Years)</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {professionalExperience.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h3>
                  <p className="text-primary-600 font-semibold mb-1">{exp.location}</p>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{exp.role}</p>
                  {exp.period && <p className="text-gray-600 mb-4">{exp.period}</p>}
                  <ul className="space-y-3 mt-4">
                    {exp.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="text-gray-700 leading-relaxed flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span>{renderAchievement(achievement)}</span>
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
