import React, { useState, useEffect } from 'react';
import './App.css';

const appName = "Programmer's Telephone"
function App() {
  const [data, setData] = useState({
    ideas: [],
  })

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data
        });
      })
      .catch(() => {
       setPartData({
          state: apiStates.ERROR,
          error: 'fetch failed'
        });
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
      </header>
      <main>
        <section>
          <h3>Intro</h3>

          <p>{appName} is a coding variation of the Telephone game. Instead of players passing a
          message to each other, in this game, your task is to pass code.</p>
          <p>Imagine you and your peers each have an idea for a million dollar application and you've all agreed to
            collaborate - on all of them, at the same time. Time to market is estimated at around one to two
            hours from now, so you will need to work in tandem, switching between projects as you go.</p>

          <h3>Rules</h3>
          <h5>2 or more players</h5>
          <p>This game is played as a series of rounds. For each round, players have a set amount of time to code an
            application. When that time is up, players pass the code to their digital left so that each player now has new
            code to work with. When players are ready, a new round begins - each player must continue the work of their peer as
            best they can and decide what to do next. A game ends once enough rounds are played that everyone has received their
            original project.
          </p>

          <h4>Getting Started</h4>
          <p>Before starting the game, players should do the following:</p>
          <ul>
          <li>Agree on a progamming language</li>
          <li>Agree on how long rounds should be. Timers are provided below for 10, 20, and 30 minutes rounds. Shorter rounds are
            recommended if there are many players</li>
          <li>Create REPLs (recommended) or repositories - one for each player. Repositories should be set so all players have
            write access.</li>
          <li>Once everyone is ready to start, each player chooses one of two options:
            <ul>
              <li>Navigate to this page and click the <b>Generate Million Dollar Idea</b> button below to get their starting idea</li>
              <li>Come up with their own million dollar idea</li>
            </ul>
          </li>
          <li>The game begins when a timer is started</li>
          </ul>
        </section>
        <section>
          <button>Generate Million Dollar Idea</button>
          <div>
            <output></output>
          </div>
        </section>
        {/* Game */}
        {/* Additional Info */}
      </main>
    </div>
  );
}

export default App;
