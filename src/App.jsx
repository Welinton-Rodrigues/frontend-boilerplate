import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BestSellers from './components/sections/BestSellers'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BestSellers />
      {/* próximas seções entram aqui */}
      <Footer />
    </div>
  )
}

export default App

