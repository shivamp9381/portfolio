import React, { useEffect, useState } from 'react';
import './StartupAnnimation.css';

const StartupAnimation = ({ onFinish }) => {
  const [stage, setStage] = useState('initial');

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage('expand'), 100),
      setTimeout(() => setStage('fadeOut'), 4000),
      setTimeout(() => onFinish(), 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div className={`startup-container ${stage}`}>
      <div className="animated-logo">
        {stage !== 'initial' && <span className="fullname">Shivam</span>}
    
      </div>
    </div>
  );
};

export default StartupAnimation;
