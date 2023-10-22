import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p className="text-gray-600 text-lg mt-2">Could not find the requested resource</p>
      <Link href="/" className="text-blue-500 mt-4">Return Home</Link>
    </div>
  )
}
