import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-sm">
              © 2024 Gayan Samuditha CC BY-SA 4.0
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm">
              Built with Next.js & React
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              PhD Student at Case Western Reserve University
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

