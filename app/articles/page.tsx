import Link from 'next/link'

export default function Articles() {
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

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Articles Overview</h1>
        <p className="text-gray-600 mb-8">
          This page provides links to various articles I have written as part of my classes and scientific discussion.
        </p>
        <p className="text-gray-700 mb-12">
          The below articles I have written based on the book I read - <em>How To Be A Modern Scientist</em> by Jeff Leek.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Articles List</h2>
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.href}
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-primary-500"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{index + 1}. {article.title}</h3>
              <p className="text-gray-600">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

