import React, { useEffect, useState } from 'react';
import './App.css';
import Athletes from './cmp/athletes/Athletes';
import Athlete from './cmp/athletes/Athlete';

function App() {
  const [stravaCode, setStravaCode] = useState(undefined);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    const error = new URLSearchParams(window.location.search).get('error');

    if(error) {
      setAccessDenied(true);
    } else {
      const code = new URLSearchParams(window.location.search).get('code');
      if(code !== null) {
        setStravaCode(code);
      }
    }
  }, [stravaCode, accessDenied]);

  return (
    <div className="App">
      <h1>
        fitminds.run
      </h1>

      {accessDenied && 
        <p>Failed to authenticate with strava</p>
      }
      
      {stravaCode !== undefined 
        ? <div>Your Strava Code is: {stravaCode}</div>
        : <a
            className="App-link"
            href="https://www.strava.com/oauth/authorize?client_id=44056&redirect_uri=http://localhost:3000&response_type=code&scope=read"
            rel="noopener noreferrer">
            Log in with Strava
          </a>
      }
      <Athletes/>
      <Athlete id="50572954"/>
    </div>
  );
}

export default App;
