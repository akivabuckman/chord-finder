import './App.css'
import ChordFinder from './pages/ChordFinder'


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 text-gray-100 dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 dark:text-gray-100">
      {/* <Router /> */}
      <ChordFinder />
      <footer className="fixed bottom-0 left-0 right-0 text-center text-zinc-200 text-xs py-2 px-4 bg-gradient-to-r from-blue-900 via-orange-900 to-blue-900 border-t border-zinc-600 select-none tracking-wide">
        ✨ Everything here was made by yours truly - 🖥️ frontend, 🚀 CI, and ☁️ AWS. See more projects at{' '}
        <a
          href="https://akivabuckman.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white pointer-events-auto"
        >
          akivabuckman.com
        </a>
        {' '}✨
      </footer>
    </div>
  )
}

export default App
