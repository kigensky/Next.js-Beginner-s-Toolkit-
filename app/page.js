export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to My Next.js App! 🚀
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Built by [Your Name] using Next.js and deployed on Vercel
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://nextjs.org/docs"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            target="_blank"
          >
            Read the Docs
          </a>
          <a
            href="https://github.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}