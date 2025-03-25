import './App.css'
import GenInfo from './components/GenInfo'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return(
    <div className='resume'>
        <GenInfo />
        <Summary />
        <Experience />
        <Education />
    </div>
  )
}

export default App
