export default function CV() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Curriculum Vitae</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-gray-700 mb-6">
              You can view and download my CV in PDF format below.
            </p>
            <a
              href="/cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View/Download CV (PDF)
            </a>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> If the PDF doesn't load, please ensure the file is located at <code className="bg-gray-200 px-2 py-1 rounded">/cv/cv.pdf</code> in your public directory.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

