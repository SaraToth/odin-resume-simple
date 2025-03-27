import './App.css'
import GenInfo from './components/GenInfo'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'


function App() {

  return(
    <div className={`resume`}>
        <GenInfo />
        <Summary />
        <Experience />
        <Education />
        <div className="print-preview">
          <p>Fill out all form fields</p>
          <p>Press command p to open the print preview screen to see the final version of this resume</p>
          <p>Save as a pdf file to save the final rendered resume</p>
        </div>
    </div>
  )
}

export default App
