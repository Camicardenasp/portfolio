import Intro from './Components/Intro'
import Info from './Components/Info'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Skills from './Components/Skills'
import References from './Components/References'
import Contact from './Components/Contact'
import Made from './Components/Made'

function App() {
  return (
    <div className="App bg-dark text-white columns-3 row">
      <Intro />
      <Info />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <References />
      <Contact />
      <Made />
    </div>
  )
}

export default App
