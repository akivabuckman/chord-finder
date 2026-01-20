import './App.css'
import ChordFinder from './pages/ChordFinder'


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 text-gray-100 dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-purple-950 dark:text-gray-100">
      {/* <Router /> */}
      <ChordFinder />
    </div>
  )
}

export default App
