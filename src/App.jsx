import './App.css'
import GenInfo from './components/GenInfo'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import { useState } from 'react'

function App() {
  const [printPreview, setPrintPreview] = useState(false);

  const printPreviewOn = () => {
    setPrintPreview(true);
  }

  const printPreviewOff = () => {
    setPrintPreview(false);
  }

  return(
    <div className={`resume ${printPreview ? 'print-mode' : ''}`}>
        <GenInfo />
        <Summary />
        <Experience />
        <Education />
        <div className="print-btn-container">
        {(!printPreview) && <button type='submit' onClick={printPreviewOn} className='btn print-btn'>Print Preview</button>}
        {printPreview && <button type="submit" onClick={printPreviewOff} className='btn print-btn'>Close Print Preview</button>}
        </div>
    </div>
  )
}

export default App
