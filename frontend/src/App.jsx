import { useState } from 'react'
import './App.css'
import LiveKitModal from './components/LiveKitModal';
import Grainient from './components/Grainient';
import LearnMoreModal from './components/LearnMoreModal'; // NEW
import Footer from './components/Footer';

function App() {
  const [showSupport, setShowSupport] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false); // NEW

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  const handleLearnMoreClick = () => {
    setShowLearnMore(true); // NEW
  };

  return (
    
    <div className="app-container">
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <Grainient
    color1="#FF9FFC"
    color2="#5227FF"
    color3="#B19EEF"
    timeSpeed={0.25}
    colorBalance={0}
    warpStrength={1}
    warpFrequency={5}
    warpSpeed={2}
    warpAmplitude={50}
    blendAngle={0}
    blendSoftness={0.05}
    rotationAmount={500}
    noiseScale={2}
    grainAmount={0.1}
    grainScale={2}
    grainAnimated={false}
    contrast={1.5}
    gamma={1}
    saturation={1}
    centerX={0}
    centerY={0}
    zoom={0.9}
  />
</div>

      <div className="orb-content">
        <div className="new-badge">✦ Lang Tutor</div>

        <h1 className="orb-heading">
        Multilingual AI Language <br/> Tutor
        </h1>

        <div className="orb-buttons">
          <button className="orb-button primary"  onClick={handleSupportClick}>Talk to an Agent!</button>
          <button className="orb-button secondary" onClick={handleLearnMoreClick}>Learn More</button>
        </div>

        {showSupport && <LiveKitModal setShowSupport={setShowSupport}/>}
          {showLearnMore && <LearnMoreModal setShowLearnMore={setShowLearnMore} />} {/* NEW */}
      </div>
      <div>
      {/* your main content like hero, sections, etc. */}
      <Footer />
    </div>

     

    </div>
  )
}

export default App
