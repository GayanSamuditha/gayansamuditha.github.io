'use client'

import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCard from '@/components/AnimatedCard'

export default function Publications() {
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
      title: "Longitudinal Graph Neural Networks for Predicting MCI-to-AD Conversion Using Multi-Feature Brain Morphology Graphs",
      status: "in_review"
    },
    {
      title: "Recent Advances in Utilizing Language Models for Omics Sequence Modeling: A Comprehensive Scoping Review",
      status: "in_review"
    }
  ]

  const conferencePosters = [
    {
      conference: "American Society of Human Genetics (ASHG) 2023",
      title: "Towards a Comprehensive Electronic Phenotyping in the UK Biobank: Initial Steps using the OMOP CDM, Delphyne, and ODHSI Tools",
      authors: "Diya Yang, Gayan Samuditha Mend Mend Arachchige, William S. Bush, PhD",
      affiliation: "Department of Population and Quantitative Health Sciences, School of Medicine, Case Western Reserve University, OH, USA"
    },
    {
      conference: "American Society of Human Genetics (ASHG) 2024",
      title: "Cross-Phenotype Genome-Wide Association Study of Brain Morphology Features Extracted from Brain MRI Images",
      authors: "Gayan Samuditha Mend Mend Arachchige, Raghav Awasthi, PhD, Xiaofeng Zhu, PhD",
      affiliation: "Department of Population and Quantitative Health Sciences, School of Medicine, Case Western Reserve University, Cleveland, OH, USA"
    }
  ]

  const honors = [
    {
      title: "Product Innovation Award - Research and Development at Virtusa Corporation",
      description: "Outstanding recognition of innovation and contribution towards developing ACCELLO Product - Virtusa Corporation USA."
    },
    {
      title: "Product Innovation Award - Research and Development at Virtusa Corporation",
      description: "Outstanding recognition of innovation and contribution towards developing CENTROID Product - Virtusa Corporation USA."
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Publications & Presentations</h1>
        </AnimatedSection>

        {/* Research Publications */}
        <section className="mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Research Publications</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                {pub.authors && (
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">{pub.authors}</span>
                  </p>
                )}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                {pub.journal && (
                  <p className="text-gray-700 mb-1">
                    <span className="italic">{pub.journal}</span>
                    {pub.volume && `, vol. ${pub.volume}`}
                    {pub.issue && `, no. ${pub.issue}`}
                    {pub.pages && `, p. ${pub.pages}`}
                    {pub.year && `, ${pub.year}`}
                  </p>
                )}
                {pub.doi && (
                  <p className="text-sm text-gray-600 mb-2">
                    DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 underline">
                      {pub.doi}
                    </a>
                  </p>
                )}
                {pub.status === "in_review" && (
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                    In Review
                  </span>
                )}
                {pub.status === "published" && (
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Published
                  </span>
                )}
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Conference Posters */}
        <section className="mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Conference Posters</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {conferencePosters.map((poster, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <p className="text-primary-600 font-semibold mb-2">{poster.conference}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{poster.title}</h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Authors:</span> {poster.authors}
                </p>
                <p className="text-gray-600 text-sm">
                  {poster.affiliation}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Honors and Awards */}
        <section>
          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Honors and Awards</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {honors.map((honor, index) => (
              <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{honor.title}</h3>
                <p className="text-gray-700">{honor.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

