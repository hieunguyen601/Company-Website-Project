import './App.css'
import Header from './components/Header';
import LeftCard from './components/LeftCard';
import RightCard from './components/RightCard';
import Spotify from './components/Spotify';
import WeatherApp from './components/WeatherApp';



function App() {

  return (
    <div className='container'>
      <Header />
      <div className='main-section'>
        <LeftCard />
        <RightCard />
      </div>
      <div className='extraComponents'>
        <Spotify />
        <WeatherApp />
      </div>
    </div>
  )
}

export default App
