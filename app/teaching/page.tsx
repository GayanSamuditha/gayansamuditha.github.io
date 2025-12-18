export default function Teaching() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Teaching</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Visiting Lecturer</h2>
            <p className="text-xl text-primary-600 font-semibold mb-1">University of Westminster</p>
            <p className="text-gray-600 mb-4">2022 - Spring</p>
            <p className="text-gray-700 mb-6">London, United Kingdom</p>

            <div className="mb-6">
              <p className="text-gray-800 font-medium mb-2">Modules Taught:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>6SENG002W - Concurrent Programming</li>
                <li>6COSC023C - Final Year Research Project</li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              As a Visiting Lecturer at the University of Westminster, I was responsible for delivering the 6SENG002W: Concurrent Programming module to undergraduate students. In this role, I designed and delivered engaging lectures, led tutorial classes, and conducted practical sessions to help students develop a deep understanding of this complex and challenging subject matter.
            </p>
            <p>
              In addition to my teaching responsibilities, I also served as an advisor to final-year research students, providing guidance and support as they pursued projects in a range of research domains related to Machine Learning, Deep Learning, Reinforcement Learning, and other cutting-edge areas. My particular expertise in Medical Informatics, Biomedical Informatics, Health Informatics, Data Science, Multi-Agent Systems, and Gamification made me a valuable resource for students working on projects in these areas.
            </p>
            <p>
              Throughout my tenure at the University of Westminster, I was committed to fostering a collaborative and supportive learning environment that encouraged students to explore and innovate. I worked closely with colleagues and students alike to share knowledge and insights, and to develop new and innovative approaches to teaching and learning.
            </p>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> I'm currently not teaching 6SENG002W and not advising Level 6 Undergraduate students(PT/FT) from 2023 April. The 6SENG002W: Concurrent Programming lecture materials and Codebase have been hidden from my teaching website and the Blackboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

