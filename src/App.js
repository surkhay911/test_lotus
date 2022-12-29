import logo from './logo.svg';
import './App.css';
import CountDown from './Timercomponent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>таймер</p>
        
      </header>
      <body>
      <div className="timer">
          
          <div className='one'>
            <CountDown minutes={2} seconds={0}/>
          </div>
          <div className='two'>
            {/* <CountDown minutes={0} seconds={2}/> */}
          </div>
          <div className='three'>
            {/* <CountDown minutes={0} seconds={2}/> */}
          </div>
          <div className='four'>
            {/* <CountDown minutes={0} seconds={2}/> */}
          </div>
        </div>
        <div className='roles'>
          <div>
            <p>Участник 1</p>
          </div>
          <div>
            <p>Участник 2</p>
          </div>
          <div>
            <p>Участник 3</p>
          </div>
          <div>
            <p>Участник 4</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
