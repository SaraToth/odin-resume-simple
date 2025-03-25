import './App.css'
import GenInfo from './components/GenInfo'
import Summary from './components/Summary'
import Experience from './components/Experience'

function App() {
  return(
    <div className='resume'>
        <GenInfo />
        <Summary />
        <Experience />
    </div>
  )
}

export default App
