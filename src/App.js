import './App.css';
import Images from './components/Images';

function App() {

  return (
    <div className='container'>
      <div>
       <Images image= "perro 1"/>
       <Images image= "perro 2"/>
       <Images image= "perro 1"/>
       <Images image= "perro 2"/>
       <Images image= "aguila"/>
       <Images image= "aguila"/>
      </div>
      <button className='restart-button'>Restart</button>
    </div>
  )
}

export default App;