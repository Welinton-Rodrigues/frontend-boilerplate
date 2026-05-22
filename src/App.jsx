import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* próximas seções entram aqui */}
      <Footer />
    </div>
  )
}

export default App